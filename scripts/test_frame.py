import os
import math
from PIL import Image, ImageDraw, ImageFont

# Load character image
char_img = Image.open("public/images/character-ravi.jpg")
char_w, char_h = char_img.size

# Bust crop (suit & tie)
bust = char_img.crop((0, 0, char_w, int(char_h * 0.88)))
bust = bust.resize((380, int(380 * (bust.height / bust.width))), Image.Resampling.LANCZOS)

# Create 1280x720 canvas
canvas = Image.new("RGB", (1280, 720), "#0A1128")
draw = ImageDraw.Draw(canvas)

# Fonts
font_title = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", 36)
font_sub = ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 20)
font_bold = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", 22)
font_card = ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 18)
font_sm = ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 15)

# Background subtle gradient & grid
for y in range(0, 720, 40):
    draw.line([(0, y), (1280, y)], fill="#101D3F", width=1)
for x in range(0, 1280, 40):
    draw.line([(x, 0), (x, 720)], fill="#101D3F", width=1)

# Header banner
draw.rectangle([(0, 0), (1280, 60)], fill="#0D1836")
draw.line([(0, 60), (1280, 60)], fill="#1F3260", width=2)
draw.text((40, 14), "GOVFLOW.AI", font=font_bold, fill="#38BDF8")
draw.text((200, 17), "|  Andhra Pradesh Citizen Service Navigator", font=font_sub, fill="#94A3B8")

# Left Column: Character Card (Ravi)
card_x, card_y, card_w, card_h = 50, 90, 420, 590
draw.rounded_rectangle([(card_x, card_y), (card_x + card_w, card_y + card_h)], radius=20, fill="#0F172A", outline="#3B82F6", width=2)

# Paste character bust
bust_paste_x = card_x + (card_w - bust.width) // 2
bust_paste_y = card_y + 20
# Paste with crop to fit inside card
max_bust_h = 360
bust_crop = bust.crop((0, 0, bust.width, min(bust.height, max_bust_h)))
canvas.paste(bust_crop, (bust_paste_x, bust_paste_y))

# Character Name badge
draw.rounded_rectangle([(card_x + 30, card_y + 400), (card_x + card_w - 30, card_y + 450)], radius=12, fill="#1E293B", outline="#475569", width=1)
draw.text((card_x + 50, card_y + 412), "Ravi Kumar  •  B.Tech Student", font=font_bold, fill="#F8FAFC")

# Sound wave bars
wave_x = card_x + 50
wave_y = card_y + 475
draw.text((wave_x, wave_y), "Speaking:", font=font_sm, fill="#38BDF8")
for i in range(12):
    bar_h = 10 + int(8 * math.sin(i * 0.8))
    draw.line([(wave_x + 80 + i * 8, wave_y + 12 - bar_h // 2), (wave_x + 80 + i * 8, wave_y + 12 + bar_h // 2)], fill="#38BDF8", width=3)

# Speech Bubble below
draw.rounded_rectangle([(card_x + 20, card_y + 505), (card_x + card_w - 20, card_y + 575)], radius=10, fill="#1E3A8A", outline="#60A5FA", width=1)
draw.text((card_x + 35, card_y + 515), "\"I want to apply for Jnanabhumi", font=font_card, fill="#FFFFFF")
draw.text((card_x + 35, card_y + 540), "Scholarship & Fee Reimbursement.\"", font=font_card, fill="#E2E8F0")

# Right Column: Interactive Civic Workspace
wk_x, wk_y, wk_w, wk_h = 510, 90, 720, 590
draw.rounded_rectangle([(wk_x, wk_y), (wk_x + wk_w, wk_y + wk_h)], radius=20, fill="#0B132B", outline="#1E293B", width=2)

# Scene Content (e.g. Scene 3 Search & Intent)
draw.text((wk_x + 40, wk_y + 30), "Smart Civic Service Discovery", font=font_title, fill="#FFFFFF")
draw.text((wk_x + 40, wk_y + 80), "Instant AI verification of government department & scholarship scheme", font=font_sub, fill="#94A3B8")

# Search Bar Mockup
s_box_y = wk_y + 130
draw.rounded_rectangle([(wk_x + 40, s_box_y), (wk_x + wk_w - 40, s_box_y + 60)], radius=14, fill="#1E293B", outline="#3B82F6", width=2)
draw.text((wk_x + 65, s_box_y + 16), "Jnanabhumi Post-Matric Scholarship", font=font_bold, fill="#60A5FA")
draw.line([(wk_x + 465, s_box_y + 16), (wk_x + 465, s_box_y + 44)], fill="#38BDF8", width=2) # cursor

# Verified Service Card
card2_y = wk_y + 220
draw.rounded_rectangle([(wk_x + 40, card2_y), (wk_x + wk_w - 40, card2_y + 190)], radius=16, fill="#111827", outline="#059669", width=2)
draw.rounded_rectangle([(wk_x + 60, card2_y + 20), (wk_x + 230, card2_y + 48)], radius=8, fill="#065F46")
draw.text((wk_x + 75, card2_y + 24), "OFFICIAL SCHEME", font=font_sm, fill="#34D399")

draw.text((wk_x + 60, card2_y + 60), "Jnanabhumi Post-Matric Scholarship & Fee Reimbursement", font=font_bold, fill="#FFFFFF")
draw.text((wk_x + 60, card2_y + 95), "Department of Social Welfare & Higher Education, Government of Andhra Pradesh", font=font_card, fill="#A7F3D0")
draw.text((wk_x + 60, card2_y + 130), "• Full College Tuition Fee Reimbursement (RTF) + Jagananna Vidya Deevena", font=font_sm, fill="#CBD5E1")
draw.text((wk_x + 60, card2_y + 155), "• Mess & Maintenance Charges (MTF) + Vasathi Deevena directly to Mother's Bank", font=font_sm, fill="#CBD5E1")

# Prerequisite Checklist
chk_y = wk_y + 430
draw.text((wk_x + 40, chk_y), "Verified Prerequisites Required:", font=font_bold, fill="#E2E8F0")

checks = [
    ("✓", "Aadhaar e-KYC (Active & linked to student phone)", "#10B981"),
    ("✓", "Integrated Caste & Community Certificate (MeeSeva signed)", "#10B981"),
    ("✓", "Valid Income Certificate / White Ration Card (< ₹2.5 Lakh/yr)", "#10B981"),
    ("✓", "Bank Account with Active Aadhaar NPCI Seeding", "#10B981")
]
for idx, (sym, txt, col) in enumerate(checks):
    cy = chk_y + 35 + idx * 28
    draw.text((wk_x + 40, cy), sym, font=font_bold, fill=col)
    draw.text((wk_x + 70, cy), txt, font=font_card, fill="#E2E8F0")

os.makedirs("scratch", exist_ok=True)
canvas.save("scratch/test_frame.jpg", quality=95)
print("Saved scratch/test_frame.jpg")
