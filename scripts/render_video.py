import os
import sys
import math
import json
import random
import subprocess
import numpy as np
from PIL import Image, ImageDraw, ImageFont
import imageio_ffmpeg

ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()

# Load scene durations
with open("scratch/scene_durations.json", "r") as f:
    meta = json.load(f)

scene_durations = meta["scene_durations"]
total_duration = meta["total_duration"]
fps = 24
total_frames = int(total_duration * fps)

print(f"Preparing to render {total_frames} frames ({total_duration:.2f}s) at {fps} fps...")

# Load character image
char_raw = Image.open("public/images/character-ravi.jpg")
cw, ch = char_raw.size
# Crop bust (suit and tie)
char_bust = char_raw.crop((0, 0, cw, int(ch * 0.88)))
char_bust = char_bust.resize((360, int(360 * (char_bust.height / char_bust.width))), Image.Resampling.LANCZOS)

# Fonts
font_title = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", 32)
font_sub = ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 18)
font_bold = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", 20)
font_card = ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 16)
font_sm = ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 14)
font_big = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", 40)

# Pre-generate confetti particles for Scene 12
random.seed(42)
confetti = []
colors = ["#38BDF8", "#34D399", "#FBBF24", "#F472B6", "#A78BFA", "#F87171"]
for _ in range(70):
    confetti.append({
        "x": random.randint(50, 1230),
        "y": random.randint(-400, 700),
        "speed": random.uniform(2.5, 6.0),
        "size": random.randint(6, 12),
        "color": random.choice(colors),
        "rot": random.uniform(0, 360),
        "wobble": random.uniform(1.0, 3.0)
    })

# Helpers
def draw_checkmark(draw, x, y, size=18, color="#10B981"):
    # Clean vector checkmark
    pts = [(x, y + size * 0.5), (x + size * 0.35, y + size * 0.85), (x + size, y + size * 0.15)]
    draw.line(pts, fill=color, width=3, joint="curve")

def draw_header(draw, scene_idx, t_total):
    # Top navigation bar
    draw.rectangle([(0, 0), (1280, 56)], fill="#0B132B")
    draw.line([(0, 56), (1280, 56)], fill="#1E293B", width=1)
    
    # GovFlow Logo
    draw.text((40, 13), "GOVFLOW.AI", font=font_bold, fill="#38BDF8")
    draw.text((180, 16), "|  Andhra Pradesh Citizen Service Navigator", font=font_card, fill="#94A3B8")
    
    # Scene badge pill
    badge_txt = f"SCENE {scene_idx + 1} OF 12"
    draw.rounded_rectangle([(1080, 12), (1240, 44)], radius=8, fill="#1E293B", outline="#3B82F6", width=1)
    draw.text((1100, 18), badge_txt, font=font_sm, fill="#60A5FA")
    
    # Progress line along top
    prog = min(1.0, t_total / total_duration)
    draw.line([(0, 56), (int(1280 * prog), 56)], fill="#38BDF8", width=3)

def draw_character_column(canvas, draw, t_scene, is_ravi_speaking, speech_text):
    # Left Card
    cx, cy, cw_box, ch_box = 45, 80, 390, 605
    outline_col = "#38BDF8" if is_ravi_speaking else "#334155"
    fill_col = "#0F172A"
    
    # Subtle floating offset
    float_y = int(3 * math.sin(t_scene * 2.0)) if is_ravi_speaking else 0
    
    draw.rounded_rectangle([(cx, cy + float_y), (cx + cw_box, cy + ch_box + float_y)], radius=18, fill=fill_col, outline=outline_col, width=2)
    
    # Character Photo Crop
    max_h = 330
    c_crop = char_bust.crop((0, 0, min(char_bust.width, 350), max_h))
    px = cx + (cw_box - c_crop.width) // 2
    py = cy + 18 + float_y
    canvas.paste(c_crop, (px, py))
    
    # Badge
    badge_y = cy + 365 + float_y
    draw.rounded_rectangle([(cx + 25, badge_y), (cx + cw_box - 25, badge_y + 44)], radius=10, fill="#1E293B", outline="#475569", width=1)
    draw.text((cx + 45, badge_y + 11), "Ravi Kumar  •  AP Citizen & Student", font=font_bold, fill="#F8FAFC")
    
    # Speaking wave or listening state
    state_y = cy + 425 + float_y
    if is_ravi_speaking:
        draw.text((cx + 35, state_y), "Speaking:", font=font_sm, fill="#38BDF8")
        for i in range(14):
            # Dynamic dancing soundwave
            h_bar = 8 + int(10 * abs(math.sin(t_scene * 8.0 + i * 0.7)))
            draw.line([(cx + 115 + i * 8, state_y + 10 - h_bar // 2), (cx + 115 + i * 8, state_y + 10 + h_bar // 2)], fill="#38BDF8", width=3)
    else:
        draw.text((cx + 35, state_y), "Listening to GovFlow AI Guide...", font=font_sm, fill="#64748B")
        for i in range(6):
            draw.ellipse([(cx + 260 + i * 14, state_y + 6), (cx + 268 + i * 14, state_y + 14)], fill="#334155")
    
    # Speech bubble
    bubble_y = cy + 465 + float_y
    draw.rounded_rectangle([(cx + 20, bubble_y), (cx + cw_box - 20, bubble_y + 120)], radius=12, fill="#1E3A8A" if is_ravi_speaking else "#1E293B", outline="#60A5FA" if is_ravi_speaking else "#334155", width=1)
    
    # Word wrap speech
    words = speech_text.split()
    lines = []
    cur = []
    for w in words:
        cur.append(w)
        if len(" ".join(cur)) > 30:
            lines.append(" ".join(cur[:-1]))
            cur = [w]
    if cur:
        lines.append(" ".join(cur))
    
    for l_idx, line in enumerate(lines[:4]):
        draw.text((cx + 32, bubble_y + 16 + l_idx * 24), line, font=font_card, fill="#FFFFFF" if is_ravi_speaking else "#CBD5E1")

# Scene content generators for Right Column
def render_right_workspace(canvas, draw, scene_idx, t_scene, dur):
    wx, wy, ww, wh = 465, 80, 770, 605
    draw.rounded_rectangle([(wx, wy), (wx + ww, wy + wh)], radius=18, fill="#0B132B", outline="#1E293B", width=2)
    
    # Scene 1: The Problem
    if scene_idx == 0:
        draw.text((wx + 40, wy + 35), "The Problem: Government Portal Maze", font=font_title, fill="#FFFFFF")
        draw.text((wx + 40, wy + 80), "Where do students and citizens start when applying for state benefits?", font=font_sub, fill="#94A3B8")
        
        cards = [
            ("MeeSeva Portal", "Which application category? Caste? Income?", "#EF4444"),
            ("Jnanabhumi System", "Post-Matric vs Pre-Matric? Aadhaar e-KYC status?", "#F59E0B"),
            ("Sachivalayam Desk", "When to submit physical forms to Village Secretary?", "#8B5CF6"),
            ("Direct Benefit Transfer", "Is bank account NPCI active or rejected?", "#EC4899")
        ]
        for idx, (title, desc, col) in enumerate(cards):
            cy = wy + 130 + idx * 105
            draw.rounded_rectangle([(wx + 40, cy), (wx + ww - 40, cy + 85)], radius=12, fill="#111827", outline=col, width=1)
            draw.ellipse([(wx + 65, cy + 28), (wx + 95, cy + 58)], fill=col)
            draw.text((wx + 75, cy + 30), "?", font=font_bold, fill="#FFFFFF")
            draw.text((wx + 115, cy + 20), title, font=font_bold, fill="#FFFFFF")
            draw.text((wx + 115, cy + 48), desc, font=font_card, fill="#94A3B8")

    # Scene 2: GovFlow AI Solution
    elif scene_idx == 1:
        draw.text((wx + 40, wy + 35), "GovFlow.AI: Universal Civic Gateway", font=font_title, fill="#FFFFFF")
        draw.text((wx + 40, wy + 80), "Intelligent step-by-step guidance tailored for every citizen's goal", font=font_sub, fill="#94A3B8")
        
        # Big AI Greeting Card
        draw.rounded_rectangle([(wx + 40, wy + 135), (wx + ww - 40, wy + 265)], radius=16, fill="#0F172A", outline="#38BDF8", width=2)
        draw.text((wx + 70, wy + 160), "GovFlow AI Assistant", font=font_bold, fill="#38BDF8")
        draw.text((wx + 70, wy + 195), "\"Tell me what you want to achieve — whether it's college scholarships,", font=font_card, fill="#E2E8F0")
        draw.text((wx + 70, wy + 225), "land records, or certificate verification. I'll navigate every step for you.\"", font=font_card, fill="#E2E8F0")
        
        # 3 Quick action buttons
        actions = ["Scholarships & Tuition Fee", "Revenue & Land Adangal", "Integrated Certificates"]
        for idx, act in enumerate(actions):
            bx = wx + 40 + idx * 235
            draw.rounded_rectangle([(bx, wy + 310), (bx + 220, wy + 420)], radius=12, fill="#1E293B", outline="#3B82F6", width=1)
            draw.text((bx + 20, wy + 345), act, font=font_bold, fill="#60A5FA")
            draw.text((bx + 20, wy + 375), "Start Guided Journey ➔", font=font_sm, fill="#94A3B8")

    # Scene 3: Search for Jnanabhumi
    elif scene_idx == 2:
        draw.text((wx + 40, wy + 35), "Instant Service Matching", font=font_title, fill="#FFFFFF")
        draw.text((wx + 40, wy + 80), "Type naturally — AI maps citizen keywords to official state schemes", font=font_sub, fill="#94A3B8")
        
        # Search Box with typing animation
        full_query = "Jnanabhumi Post-Matric Scholarship & Fee Reimbursement"
        chars_to_show = int(min(len(full_query), len(full_query) * (t_scene / (dur * 0.7))))
        displayed_query = full_query[:chars_to_show]
        
        s_y = wy + 130
        draw.rounded_rectangle([(wx + 40, s_y), (wx + ww - 40, s_y + 60)], radius=12, fill="#1E293B", outline="#38BDF8", width=2)
        draw.text((wx + 65, s_y + 16), displayed_query, font=font_bold, fill="#60A5FA")
        if int(t_scene * 3) % 2 == 0:
            cursor_x = wx + 65 + int(chars_to_show * 11.2)
            draw.line([(cursor_x, s_y + 16), (cursor_x, s_y + 44)], fill="#38BDF8", width=2)
        
        # Result Card
        if t_scene > 2.0:
            rc_y = wy + 225
            draw.rounded_rectangle([(wx + 40, rc_y), (wx + ww - 40, rc_y + 300)], radius=16, fill="#0F172A", outline="#10B981", width=2)
            draw.rounded_rectangle([(wx + 65, rc_y + 25), (wx + 220, rc_y + 55)], radius=8, fill="#065F46")
            draw.text((wx + 80, rc_y + 30), "OFFICIAL SCHEME", font=font_sm, fill="#34D399")
            
            draw.text((wx + 65, rc_y + 75), "Jnanabhumi Post-Matric Scholarship & Fee Reimbursement", font=font_bold, fill="#FFFFFF")
            draw.text((wx + 65, rc_y + 110), "Department of Social Welfare & Higher Education, Government of Andhra Pradesh", font=font_card, fill="#A7F3D0")
            draw.text((wx + 65, rc_y + 155), "• Full College Tuition Fee Reimbursement (RTF) / Vidya Deevena", font=font_card, fill="#E2E8F0")
            draw.text((wx + 65, rc_y + 190), "• Student Hostel & Mess Maintenance Allowance (MTF) / Vasathi Deevena", font=font_card, fill="#E2E8F0")
            draw.text((wx + 65, rc_y + 225), "• Applicable for B.Tech, Degree, PG, Medicine & Polytechnic Courses", font=font_card, fill="#E2E8F0")
            
            draw.rounded_rectangle([(wx + 65, rc_y + 255), (wx + 280, rc_y + 285)], radius=6, fill="#1E3A8A")
            draw.text((wx + 80, rc_y + 260), "Start 6-Step Journey ➔", font=font_sm, fill="#38BDF8")

    # Scene 4: Prerequisites Intelligence
    elif scene_idx == 3:
        draw.text((wx + 40, wy + 35), "Prerequisite Intelligence & Validation", font=font_title, fill="#FFFFFF")
        draw.text((wx + 40, wy + 80), "Ensure 100% application readiness before starting official submission", font=font_sub, fill="#94A3B8")
        
        prereqs = [
            ("Aadhaar e-KYC Verification", "Linked to active mobile number with biometric verification status.", True),
            ("Integrated Caste & Community Certificate", "Issued through MeeSeva portal with barcode verification.", True),
            ("Current Income Certificate / White Ration Card", "Annual family income threshold < ₹2,50,000 for full fee eligibility.", True),
            ("Bank NPCI Aadhaar Direct Seeding", "Active Aadhaar-NPCI bank mapping required for direct cash transfer.", True)
        ]
        
        for idx, (p_title, p_desc, ok) in enumerate(prereqs):
            py = wy + 130 + idx * 105
            draw.rounded_rectangle([(wx + 40, py), (wx + ww - 40, py + 88)], radius=14, fill="#111827", outline="#059669" if ok else "#64748B", width=2)
            draw_checkmark(draw, wx + 65, py + 24, size=24, color="#10B981")
            draw.text((wx + 110, py + 18), p_title, font=font_bold, fill="#FFFFFF")
            draw.text((wx + 110, py + 48), p_desc, font=font_card, fill="#94A3B8")

    # Scene 5: The 6-Step Universal Pathway
    elif scene_idx == 4:
        draw.text((wx + 40, wy + 35), "The Universal 6-Step Pathway", font=font_title, fill="#FFFFFF")
        draw.text((wx + 40, wy + 80), "A transparent, structured lifecycle from intent to final disbursal", font=font_sub, fill="#94A3B8")
        
        steps = [
            ("1. Goal", "Define service & student profile"),
            ("2. Eligibility", "Automated criteria validation"),
            ("3. Documents", "Verified prerequisite checklist"),
            ("4. Portal", "Official Jnanabhumi gateway"),
            ("5. Submit", "Institute verification & token"),
            ("6. Tracking", "Live status & citizen docket")
        ]
        
        # Horizontal line connecting steps
        line_y = wy + 220
        draw.line([(wx + 70, line_y), (wx + ww - 70, line_y)], fill="#1E3A8A", width=4)
        
        # Active step travels with time
        active_step = min(5, int((t_scene / dur) * 6))
        active_x = wx + 70 + int((active_step / 5) * (ww - 140))
        draw.line([(wx + 70, line_y), (active_x, line_y)], fill="#38BDF8", width=4)
        
        for idx, (st_name, st_desc) in enumerate(steps):
            sx = wx + 70 + int((idx / 5) * (ww - 140))
            is_done = idx <= active_step
            # Node circle
            draw.ellipse([(sx - 18, line_y - 18), (sx + 18, line_y + 18)], fill="#38BDF8" if is_done else "#1E293B", outline="#60A5FA" if is_done else "#475569", width=2)
            draw.text((sx - 6, line_y - 10), str(idx + 1), font=font_bold, fill="#0F172A" if is_done else "#94A3B8")
            
            # Step card below
            draw.text((sx - 35, line_y + 30), st_name, font=font_bold, fill="#FFFFFF" if is_done else "#64748B")
        
        # Highlight current active step card
        h_y = wy + 340
        draw.rounded_rectangle([(wx + 40, h_y), (wx + ww - 40, h_y + 180)], radius=16, fill="#0F172A", outline="#38BDF8", width=2)
        cur_st_name, cur_st_desc = steps[active_step]
        draw.text((wx + 65, h_y + 25), f"Active Stage: {cur_st_name}", font=font_title, fill="#38BDF8")
        draw.text((wx + 65, h_y + 70), cur_st_desc, font=font_card, fill="#E2E8F0")
        draw.text((wx + 65, h_y + 105), "GovFlow automatically maintains your verification tokens and journey state.", font=font_card, fill="#94A3B8")
        draw.text((wx + 65, h_y + 135), "Zero duplicate entries. Complete clarity at every milestone.", font=font_card, fill="#10B981")

    # Scene 6: Natural Language Query Resolution
    elif scene_idx == 5:
        draw.text((wx + 40, wy + 35), "Semantic Search: Ask In Plain Words", font=font_title, fill="#FFFFFF")
        draw.text((wx + 40, wy + 80), "Citizens don't need official scheme names — GovFlow understands intent", font=font_sub, fill="#94A3B8")
        
        # Natural Language prompt box
        p_y = wy + 140
        draw.rounded_rectangle([(wx + 40, p_y), (wx + ww - 40, p_y + 100)], radius=14, fill="#1E293B", outline="#F59E0B", width=2)
        draw.text((wx + 65, p_y + 18), "Citizen Plain Query:", font=font_sm, fill="#FBBF24")
        draw.text((wx + 65, p_y + 45), "\"I finished inter and joined B.Tech college. How do I get fee help?\"", font=font_bold, fill="#FFFFFF")
        
        # Arrow down
        draw.line([(wx + ww // 2, p_y + 110), (wx + ww // 2, p_y + 150)], fill="#38BDF8", width=3)
        
        # AI Resolution Result
        r_y = wy + 310
        draw.rounded_rectangle([(wx + 40, r_y), (wx + ww - 40, r_y + 180)], radius=14, fill="#0F172A", outline="#10B981", width=2)
        draw.text((wx + 65, r_y + 22), "GovFlow AI Intent Resolution  (99.4% Match)", font=font_bold, fill="#34D399")
        draw.text((wx + 65, r_y + 60), "➔ Matched: Jnanabhumi Post-Matric Scholarship & Fee Reimbursement", font=font_bold, fill="#FFFFFF")
        draw.text((wx + 65, r_y + 95), "➔ Department: Higher Education & Social Welfare, AP", font=font_card, fill="#94A3B8")
        draw.text((wx + 65, r_y + 125), "➔ Auto-routed to official registration workflow", font=font_card, fill="#38BDF8")

    # Scene 7: Common Services Hub
    elif scene_idx == 6:
        draw.text((wx + 40, wy + 35), "Explore Popular Citizen Services", font=font_title, fill="#FFFFFF")
        draw.text((wx + 40, wy + 80), "Direct one-click journeys for the most essential public services", font=font_sub, fill="#94A3B8")
        
        svcs = [
            ("Jnanabhumi Scholarship", "Full tuition reimbursement & student maintenance", "#3B82F6"),
            ("RoR 1B & Adangal Records", "Certified land ownership & survey boundary records", "#10B981"),
            ("Integrated Caste Certificate", "Statutory SC/ST/BC/EWS certification via MeeSeva", "#F59E0B"),
            ("YSR Cheyutha & Welfare", "Direct benefit transfer & Grama Sachivalayam schemes", "#EC4899")
        ]
        
        for idx, (s_name, s_desc, col) in enumerate(svcs):
            row = idx // 2
            col_idx = idx % 2
            bx = wx + 40 + col_idx * 345
            by = wy + 140 + row * 180
            draw.rounded_rectangle([(bx, by), (bx + 320, by + 155)], radius=14, fill="#111827", outline=col, width=2)
            draw.rounded_rectangle([(bx + 20, by + 20), (bx + 60, by + 60)], radius=8, fill=col)
            draw.text((bx + 80, by + 25), s_name, font=font_bold, fill="#FFFFFF")
            draw.text((bx + 20, by + 75), s_desc, font=font_card, fill="#94A3B8")
            draw.text((bx + 20, by + 120), "Start Journey ➔", font=font_sm, fill=col)

    # Scene 8: Document Intelligence
    elif scene_idx == 7:
        draw.text((wx + 40, wy + 35), "Document Intelligence Center", font=font_title, fill="#FFFFFF")
        draw.text((wx + 40, wy + 80), "Avoid repeated office visits by knowing precise document requirements", font=font_sub, fill="#94A3B8")
        
        # Split comparison boxes
        b1_x = wx + 40
        draw.rounded_rectangle([(b1_x, wy + 135), (b1_x + 330, wy + 420)], radius=14, fill="#111827", outline="#10B981", width=2)
        draw.text((b1_x + 20, wy + 155), "Mandatory Documents", font=font_bold, fill="#34D399")
        
        mand_docs = [
            "Aadhaar Card (Active OTP/e-KYC)",
            "SSC Hall Ticket / Marks Memo",
            "MeeSeva Income Certificate",
            "College Seat Allotment Order",
            "Bank Passbook (NPCI linked)"
        ]
        for idx, d in enumerate(mand_docs):
            draw_checkmark(draw, b1_x + 20, wy + 205 + idx * 38, size=18, color="#10B981")
            draw.text((b1_x + 50, wy + 200 + idx * 38), d, font=font_card, fill="#E2E8F0")
            
        b2_x = wx + 395
        draw.rounded_rectangle([(b2_x, wy + 135), (b2_x + 335, wy + 420)], radius=14, fill="#111827", outline="#F59E0B", width=2)
        draw.text((b2_x + 20, wy + 155), "Rejection Prevention Tips", font=font_bold, fill="#FBBF24")
        
        tips = [
            "Name on Aadhaar must match SSC Memo",
            "Income certificate must be within 1 year",
            "Aadhaar must be seeded with NPCI at bank",
            "College code must be valid in Jnanabhumi"
        ]
        for idx, tip in enumerate(tips):
            draw.ellipse([(b2_x + 20, wy + 208 + idx * 48), (b2_x + 32, wy + 220 + idx * 48)], fill="#F59E0B")
            draw.text((b2_x + 45, wy + 202 + idx * 48), tip, font=font_card, fill="#CBD5E1")

    # Scene 9: Direct Submission Clarification
    elif scene_idx == 8:
        draw.text((wx + 40, wy + 35), "Trusted Government Architecture", font=font_title, fill="#FFFFFF")
        draw.text((wx + 40, wy + 80), "How GovFlow.AI bridges citizens and authorized state portals securely", font=font_sub, fill="#94A3B8")
        
        # 3-tier architecture diagram
        tiers = [
            ("Citizen (Ravi)", "Plain goal input, document check, docket tracking", "#38BDF8"),
            ("GovFlow.AI Intelligence", "Pre-verification, validation rules, step guidance", "#34D399"),
            ("Authorized AP Portals", "Official statutory submission, biometric capture, approval", "#F59E0B")
        ]
        for idx, (t_name, t_desc, col) in enumerate(tiers):
            ty = wy + 140 + idx * 115
            draw.rounded_rectangle([(wx + 60, ty), (wx + ww - 60, ty + 85)], radius=14, fill="#111827", outline=col, width=2)
            draw.text((wx + 90, ty + 18), t_name, font=font_bold, fill=col)
            draw.text((wx + 90, ty + 48), t_desc, font=font_card, fill="#E2E8F0")
            if idx < 2:
                # Down arrow
                draw.line([(wx + ww // 2, ty + 85), (wx + ww // 2, ty + 115)], fill="#38BDF8", width=3)

    # Scene 10: Official Portal Handoff
    elif scene_idx == 9:
        draw.text((wx + 40, wy + 35), "Authorized Official Portal Handoff", font=font_title, fill="#FFFFFF")
        draw.text((wx + 40, wy + 80), "Direct, seamless launch into verified Andhra Pradesh government servers", font=font_sub, fill="#94A3B8")
        
        # Portal Connection Card
        c_y = wy + 140
        draw.rounded_rectangle([(wx + 40, c_y), (wx + ww - 40, c_y + 320)], radius=16, fill="#0F172A", outline="#10B981", width=2)
        
        draw.rounded_rectangle([(wx + 70, c_y + 25), (wx + 260, c_y + 55)], radius=8, fill="#065F46")
        draw.text((wx + 85, c_y + 30), "SSL SECURE 256-BIT ENCRYPTED", font=font_sm, fill="#34D399")
        
        draw.text((wx + 70, c_y + 80), "Portal: https://jnanabhumi.ap.gov.in", font=font_bold, fill="#FFFFFF")
        draw.text((wx + 70, c_y + 115), "Authorized Operator: Department of Social Welfare, Government of Andhra Pradesh", font=font_card, fill="#94A3B8")
        
        draw.line([(wx + 70, c_y + 150), (wx + ww - 70, c_y + 150)], fill="#1E293B", width=1)
        
        draw.text((wx + 70, c_y + 175), "✓ Pre-filled verification checklist forwarded", font=font_card, fill="#34D399")
        draw.text((wx + 70, c_y + 205), "✓ Zero duplicate data entry required", font=font_card, fill="#34D399")
        draw.text((wx + 70, c_y + 235), "✓ Direct return to GovFlow for real-time tracking docket", font=font_card, fill="#34D399")
        
        # Launch Button
        draw.rounded_rectangle([(wx + 70, c_y + 265), (wx + 360, c_y + 305)], radius=8, fill="#2563EB")
        draw.text((wx + 95, c_y + 275), "Open Official Jnanabhumi Portal ➔", font=font_bold, fill="#FFFFFF")

    # Scene 11: Citizen Docket & Live Tracking
    elif scene_idx == 10:
        draw.text((wx + 40, wy + 35), "Live Tracking & Citizen Docket", font=font_title, fill="#FFFFFF")
        draw.text((wx + 40, wy + 80), "Keep your journey organized and print your permanent confirmation docket", font=font_sub, fill="#94A3B8")
        
        # Docket Preview Card
        d_y = wy + 130
        draw.rounded_rectangle([(wx + 40, d_y), (wx + ww - 40, d_y + 330)], radius=16, fill="#111827", outline="#3B82F6", width=2)
        
        draw.text((wx + 70, d_y + 25), "GovFlow Citizen Docket  •  AP-2026-JN-94812", font=font_bold, fill="#38BDF8")
        draw.text((wx + 70, d_y + 55), "Beneficiary: Ravi Kumar  |  College: JNTU Kakinada", font=font_card, fill="#E2E8F0")
        
        # Live status timeline
        tl_y = d_y + 105
        statuses = ["Submitted", "College Verification", "Mandal Officer Sign", "Scholarship Disbursed"]
        for idx, st in enumerate(statuses):
            bx = wx + 70 + idx * 160
            is_active = idx <= 2
            draw.ellipse([(bx, tl_y), (bx + 20, tl_y + 20)], fill="#10B981" if is_active else "#334155")
            draw.text((bx - 20, tl_y + 30), st, font=font_sm, fill="#FFFFFF" if is_active else "#64748B")
            if idx < 3:
                draw.line([(bx + 20, tl_y + 10), (bx + 160, tl_y + 10)], fill="#10B981" if idx < 2 else "#334155", width=3)
        
        # Actions
        draw.rounded_rectangle([(wx + 70, d_y + 250), (wx + 280, d_y + 295)], radius=10, fill="#1E3A8A", outline="#38BDF8", width=1)
        draw.text((wx + 95, d_y + 265), "Download PDF Docket", font=font_bold, fill="#38BDF8")
        
        draw.rounded_rectangle([(wx + 300, d_y + 250), (wx + 510, d_y + 295)], radius=10, fill="#1E293B", outline="#475569", width=1)
        draw.text((wx + 325, d_y + 265), "WhatsApp Status Alert", font=font_bold, fill="#E2E8F0")

    # Scene 12: Final Celebration & CTA
    elif scene_idx == 11:
        # Confetti rendering
        for p in confetti:
            py = int((p["y"] + t_scene * p["speed"] * 50) % 650) + wy + 20
            px = wx + (p["x"] % (ww - 40))
            draw.ellipse([(px, py), (px + p["size"], py + p["size"])], fill=p["color"])
        
        # Victory Card
        v_y = wy + 60
        draw.rounded_rectangle([(wx + 40, v_y), (wx + ww - 40, v_y + 440)], radius=20, fill="#0F172A", outline="#10B981", width=3)
        
        draw.rounded_rectangle([(wx + 70, v_y + 30), (wx + ww - 70, v_y + 85)], radius=10, fill="#065F46")
        draw.text((wx + 100, v_y + 42), "SCHOLARSHIP APPROVED & TUITION REIMBURSED", font=font_bold, fill="#34D399")
        
        draw.text((wx + 70, v_y + 120), "From Confusion to Completion", font=font_big, fill="#FFFFFF")
        draw.text((wx + 70, v_y + 180), "GovFlow.AI guided Ravi from zero knowledge to a fully funded education.", font=font_sub, fill="#E2E8F0")
        draw.text((wx + 70, v_y + 220), "No repeated Mandal visits. No missing documents. 100% clarity.", font=font_card, fill="#A7F3D0")
        
        # CTA Button
        draw.rounded_rectangle([(wx + 70, v_y + 280), (wx + 420, v_y + 345)], radius=12, fill="#2563EB")
        draw.text((wx + 105, v_y + 300), "Start Your Journey on GovFlow.AI ➔", font=font_bold, fill="#FFFFFF")
        
        draw.text((wx + 70, v_y + 375), "Andhra Pradesh's Premier Citizen Service Navigation Intelligence", font=font_sm, fill="#94A3B8")

# Video frame generation & pipe into FFmpeg
output_mp4 = "public/videos/govflow-explainer-en.mp4"
temp_mp4 = "scratch/temp_explainer.mp4"

# Set up ffmpeg subprocess to read raw RGB frames from stdin
cmd_ffmpeg = [
    ffmpeg, "-y",
    "-f", "rawvideo",
    "-vcodec", "rawvideo",
    "-s", "1280x720",
    "-pix_fmt", "rgb24",
    "-r", str(fps),
    "-i", "-",
    "-i", "scratch/final_master_audio.aac",
    "-c:v", "libx264",
    "-pix_fmt", "yuv420p",
    "-preset", "veryfast",
    "-crf", "22",
    "-c:a", "copy",
    "-shortest",
    output_mp4
]

print("Launching FFmpeg video pipe...")
p_pipe = subprocess.Popen(cmd_ffmpeg, stdin=subprocess.PIPE)

# Calculate start time for each scene
scene_starts = [0.0]
for d in scene_durations[:-1]:
    scene_starts.append(scene_starts[-1] + d)

# Scenes speaker & dialogue mapping
scenes_info = [
    ("Ravi", "I need to apply for a government service, but I don't know where to start."),
    ("GovFlow", "Don't worry! Tell me what you want to accomplish, and I will help you step by step."),
    ("Ravi", "I want to apply for Jnanabhumi Post-Matric Scholarship and Fee Reimbursement."),
    ("GovFlow", "I will help you understand the prerequisite Caste and Income certificates, bank NPCI mapping, and the official Jnanabhumi portal."),
    ("GovFlow", "See your complete Jnanabhumi journey in one place: Goal, Eligibility, Documents, Official Portal, Application, and Tracking."),
    ("Ravi", "What if I do not know the exact name of the service?"),
    ("GovFlow", "You can explore common government services and start a journey directly from what you need."),
    ("GovFlow", "Before applying, understand which documents are required so you don't face repeated office visits."),
    ("Ravi", "Can I submit the application directly through GovFlow.AI?"),
    ("GovFlow", "GovFlow.AI directs you to the authorized official portal, like MeeSeva or Jnanabhumi, when submission is required."),
    ("GovFlow", "Return to My Journey anytime, track live status, and print your personal citizen docket."),
    ("GovFlow", "From confusion to completion, start your government service journey with GovFlow.AI today!")
]

# Render loop
for f_idx in range(total_frames):
    t_total = f_idx / fps
    
    # Find which scene we are in
    scene_idx = 0
    for s_i, s_start in enumerate(scene_starts):
        if t_total >= s_start:
            scene_idx = s_i
        else:
            break
            
    t_scene = t_total - scene_starts[scene_idx]
    s_dur = scene_durations[scene_idx]
    speaker, speech_text = scenes_info[scene_idx]
    is_ravi = (speaker == "Ravi")
    
    # Create canvas
    canvas = Image.new("RGB", (1280, 720), "#070E22")
    draw = ImageDraw.Draw(canvas)
    
    # Subtle animated background grid
    offset_grid = int((t_total * 15) % 40)
    for y in range(offset_grid, 720, 40):
        draw.line([(0, y), (1280, y)], fill="#0E1B3E", width=1)
    for x in range(0, 1280, 40):
        draw.line([(x, 0), (x, 720)], fill="#0E1B3E", width=1)
        
    # Draw header
    draw_header(draw, scene_idx, t_total)
    
    # Draw character column (featuring the young man in the navy suit)
    draw_character_column(canvas, draw, t_scene, is_ravi, speech_text)
    
    # Draw right interactive workspace
    render_right_workspace(canvas, draw, scene_idx, t_scene, s_dur)
    
    # Pipe raw bytes to ffmpeg
    p_pipe.stdin.write(canvas.tobytes())
    
    if f_idx % 240 == 0:
        pct = (f_idx / total_frames) * 100
        print(f"Render progress: {pct:.1f}% ({f_idx}/{total_frames} frames)...")

p_pipe.stdin.close()
p_pipe.wait()

print(f"\nRender completed successfully! Output saved to: {output_mp4}")
# Duplicate to how-it-works as well so both paths resolve
import shutil
shutil.copyfile("public/videos/govflow-explainer-en.mp4", "public/videos/govflow-how-it-works-en.mp4")
print("Copied to public/videos/govflow-how-it-works-en.mp4 successfully!")

# Also generate an updated video poster thumbnail featuring this character
poster_frame = Image.new("RGB", (1280, 720), "#070E22")
p_draw = ImageDraw.Draw(poster_frame)
for y in range(0, 720, 40):
    p_draw.line([(0, y), (1280, y)], fill="#0E1B3E", width=1)
for x in range(0, 1280, 40):
    p_draw.line([(x, 0), (x, 720)], fill="#0E1B3E", width=1)
draw_header(p_draw, 2, 20.0)
draw_character_column(poster_frame, p_draw, 1.0, True, "I want to apply for Jnanabhumi Post-Matric Scholarship & Fee Reimbursement.")
render_right_workspace(poster_frame, p_draw, 2, 3.0, 6.5)

# Center amber play button overlay
cx, cy = 640, 360
p_draw.ellipse([(cx - 45, cy - 45), (cx + 45, cy + 45)], fill="#F59E0B", outline="#FFFFFF", width=3)
p_draw.polygon([(cx - 15, cy - 25), (cx - 15, cy + 25), (cx + 25, cy)], fill="#FFFFFF")

poster_frame.save("public/images/govflow-video-poster.jpg", quality=95)
print("Updated video poster thumbnail at public/images/govflow-video-poster.jpg!")
