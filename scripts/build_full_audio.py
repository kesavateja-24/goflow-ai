import os
import math
import subprocess
import numpy as np
import imageio_ffmpeg

ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()

# Scene definitions
scenes = [
    ("Ravi", "I need to apply for a government service, but I don't know where to start.", 1),
    ("GovFlow", "Don't worry! Tell me what you want to accomplish, and I will help you step by step.", 2),
    ("Ravi", "I want to apply for Jnanabhumi Post-Matric Scholarship and Fee Reimbursement.", 3),
    ("GovFlow", "I will help you understand the prerequisite Caste and Income certificates, bank NPCI mapping, and the official Jnanabhumi portal.", 4),
    ("GovFlow", "See your complete Jnanabhumi journey in one place: Goal, Eligibility, Documents, Official Portal, Application, and Tracking.", 5),
    ("Ravi", "What if I do not know the exact name of the service?", 6),
    ("GovFlow", "You can explore common government services and start a journey directly from what you need.", 7),
    ("GovFlow", "Before applying, understand which documents are required so you don't face repeated office visits.", 8),
    ("Ravi", "Can I submit the application directly through GovFlow.AI?", 9),
    ("GovFlow", "GovFlow.AI directs you to the authorized official portal, like MeeSeva or Jnanabhumi, when submission is required.", 10),
    ("GovFlow", "Return to My Journey anytime, track live status, and print your personal citizen docket.", 11),
    ("GovFlow", "From confusion to completion, start your government service journey with GovFlow.AI today!", 12)
]

os.makedirs("scratch/audio", exist_ok=True)

# 1. Get exact duration of each scene mp3
scene_durations = []
for idx in range(1, 13):
    mp3_path = f"scratch/audio/scene_{idx}.mp3"
    cmd = [ffmpeg, "-i", mp3_path]
    p = subprocess.Popen(cmd, stderr=subprocess.PIPE, stdout=subprocess.PIPE)
    _, err = p.communicate()
    err_str = err.decode("utf-8", errors="ignore")
    dur = 5.0
    for line in err_str.splitlines():
        if "Duration:" in line:
            dur_str = line.split("Duration:")[1].split(",")[0].strip()
            h, m, s = dur_str.split(":")
            dur = float(h)*3600 + float(m)*60 + float(s)
            break
    # Add a slight padding (0.4s) at the end of each scene for natural pacing
    scene_durations.append(dur + 0.4)

total_duration = sum(scene_durations)
print(f"Total Video Duration: {total_duration:.2f} seconds")

# 2. Build WebVTT files with exact timestamps
def format_vtt_time(sec):
    h = int(sec // 3600)
    m = int((sec % 3600) // 60)
    s = sec % 60
    return f"{h:02d}:{m:02d}:{s:06.3f}"

# English
en_vtt_lines = ["WEBVTT - GovFlow.AI How It Works Explainer", ""]
# Telugu
te_vtt_lines = ["WEBVTT - GovFlow.AI How It Works Explainer (Telugu)", ""]
# Hindi
hi_vtt_lines = ["WEBVTT - GovFlow.AI How It Works Explainer (Hindi)", ""]

te_texts = [
    "రవి: నేను ప్రభుత్వ సేవ కోసం దరఖాస్తు చేసుకోవాలి, కానీ ఎక్కడి నుండి ప్రారంభించాలో నాకు తెలియదు.",
    "GovFlow.AI: ఆందోళన చెందకండి. మీరు ఏమి సాధించాలనుకుంటున్నారో చెప్పండి, నేను మీకు దశలవారీగా మార్గనిర్దేశం చేస్తాను.",
    "రవి: నేను జ్ఞానభూమి పోస్ట్-మెట్రిక్ స్కాలర్‌షిప్ & ఫీజు రీయింబర్స్‌మెంట్ కోసం దరఖాస్తు చేయాలనుకుంటున్నాను.",
    "GovFlow.AI: అవసరమైన కుల, ఆదాయ ధృవీకరణ పత్రాలు, బ్యాంక్ NPCI మ్యాపింగ్ మరియు అధికారిక పోర్టల్ గురించి వివరిస్తాను.",
    "GovFlow.AI: మీ పూర్తి ప్రయాణాన్ని ఒకే చోట చూడండి: లక్ష్యం, అర్హత, పత్రాలు, అధికారిక పోర్టల్, దరఖాస్తు మరియు ట్రాకింగ్.",
    "రవి: నాకు పథకం యొక్క ఖచ్చితమైన పేరు తెలియకపోతే ఏమిటి?",
    "GovFlow.AI: మీరు సాధారణ ప్రభుత్వ సేవలను అన్వేషించవచ్చు మరియు మీ అవసరానికి తగిన ప్రయాణాన్ని ప్రారంభించవచ్చు.",
    "GovFlow.AI: దరఖాస్తు చేయడానికి ముందు ఏ పత్రాలు అవసరమో తెలుసుకోండి, తద్వారా ఆఫీసుల చుట్టూ తిరగాల్సిన అవసరం ఉండదు.",
    "రవి: నేను GovFlow.AI ద్వారా నేరుగా దరఖాస్తును సమర్పించవచ్చా?",
    "GovFlow.AI: దరఖాస్తు సమర్పణ కోసం GovFlow.AI మిమ్మల్ని అధికారిక పోర్టల్ (మీసేవ/జ్ఞానభూమి)కి నడిపిస్తుంది.",
    "GovFlow.AI: ఎప్పుడైనా 'మై జర్నీ'కి తిరిగి రండి, ప్రత్యక్ష స్థితిని ట్రాక్ చేయండి మరియు మీ సిటిజెన్ డాకెట్‌ను ముద్రించండి.",
    "GovFlow.AI: గందరగోళం నుండి పరిష్కారం వరకు — ఈరోజే GovFlow.AI తో మీ ప్రభుత్వ సేవా ప్రయాణాన్ని ప్రారంభించండి!"
]

hi_texts = [
    "रवि: मुझे एक सरकारी सेवा के लिए आवेदन करना है, लेकिन मुझे नहीं पता कि शुरुआत कहाँ से करूँ।",
    "GovFlow.AI: चिंता मत कीजिए। मुझे बताइए कि आप क्या चाहते हैं, और मैं आपको चरण-दर-चरण मार्गदर्शन करूँगा।",
    "रवि: मैं ज्ञानभूमि पोस्ट-मैट्रिक स्कॉलरशिप और फीस प्रतिपूर्ति के लिए आवेदन करना चाहता हूँ।",
    "GovFlow.AI: मैं आपको आवश्यक जाति, आय प्रमाण पत्र, बैंक एनपीसीआई मैपिंग और आधिकारिक पोर्टल समझने में मदद करूँगा।",
    "GovFlow.AI: अपनी पूरी यात्रा को एक ही स्थान पर देखें: लक्ष्य, पात्रता, दस्तावेज़, आधिकारिक पोर्टल, आवेदन और ट्रैकिंग।",
    "रवि: अगर मुझे सेवा का सटीक नाम नहीं पता है तो क्या करें?",
    "GovFlow.AI: आप लोकप्रिय सेवाओं को एक्सप्लोर कर सकते हैं और अपनी ज़रूरत के आधार पर यात्रा शुरू कर सकते हैं।",
    "GovFlow.AI: आवेदन से पहले ज़रूरी दस्तावेज़ समझें ताकि आपको बार-बार सरकारी दफ़्तरों के चक्कर न लगाने पड़ें।",
    "रवि: क्या मैं सीधे GovFlow.AI के माध्यम से आवेदन जमा कर सकता हूँ?",
    "GovFlow.AI: आवेदन जमा करने के लिए GovFlow.AI आपको अधिकृत सरकारी पोर्टल (मीसेवा/ज्ञानभूमि) पर निर्देशित करता है।",
    "GovFlow.AI: कभी भी 'माई जर्नी' पर वापस आएँ, लाइव स्थिति ट्रैक करें और अपना नागरिक डॉकेट प्रिंट करें।",
    "GovFlow.AI: असमंजस से समाधान तक — आज ही GovFlow.AI के साथ अपनी सेवा यात्रा शुरू करें!"
]

curr_time = 0.5
for idx, (speaker, en_txt, scene_num) in enumerate(scenes):
    dur = scene_durations[idx]
    start_str = format_vtt_time(curr_time)
    end_str = format_vtt_time(curr_time + dur - 0.2)
    
    en_vtt_lines.append(f"{idx+1}")
    en_vtt_lines.append(f"{start_str} --> {end_str}")
    en_vtt_lines.append(f"{speaker}: {en_txt}")
    en_vtt_lines.append("")
    
    te_vtt_lines.append(f"{idx+1}")
    te_vtt_lines.append(f"{start_str} --> {end_str}")
    te_vtt_lines.append(te_texts[idx])
    te_vtt_lines.append("")
    
    hi_vtt_lines.append(f"{idx+1}")
    hi_vtt_lines.append(f"{start_str} --> {end_str}")
    hi_vtt_lines.append(hi_texts[idx])
    hi_vtt_lines.append("")
    
    curr_time += dur

with open("public/captions/govflow-en.vtt", "w", encoding="utf-8") as f:
    f.write("\n".join(en_vtt_lines))
with open("public/captions/govflow-te.vtt", "w", encoding="utf-8") as f:
    f.write("\n".join(te_vtt_lines))
with open("public/captions/govflow-hi.vtt", "w", encoding="utf-8") as f:
    f.write("\n".join(hi_vtt_lines))
print("Updated WebVTT files with exact frame-synchronized timestamps!")

# 3. Concatenate audio with ffmpeg filter_complex
# Create silence audio for padding
filter_inputs = []
filter_parts = []
input_cmd = [ffmpeg, "-y"]

for idx in range(1, 13):
    input_cmd.extend(["-i", f"scratch/audio/scene_{idx}.mp3"])

# Build concat filter
for i in range(12):
    # Add 0.4s delay/pad
    filter_parts.append(f"[{i}:a]apad=pad_dur=0.4[a{i}];")

concat_inputs = "".join(f"[a{i}]" for i in range(12))
filter_complex = "".join(filter_parts) + f"{concat_inputs}concat=n=12:v=0:a=1[voice]"

voice_only_cmd = input_cmd + ["-filter_complex", filter_complex, "-map", "[voice]", "-c:a", "libmp3lame", "-b:a", "192k", "scratch/voice_full.mp3"]
subprocess.check_call(voice_only_cmd)
print("Concatenated full voice track successfully!")

# 4. Generate gentle synthesized ambient background music with numpy (44100 Hz, 16-bit PCM)
sample_rate = 44100
total_samples = int(sample_rate * (total_duration + 2.0))
t = np.linspace(0, total_duration + 2.0, total_samples, endpoint=False)

# Chord progression: Dmaj (D4 293.66, F#4 369.99, A4 440) -> Bmin (B3 246.94, D4 293.66, F#4 369.99) -> Gmaj (G3 196.00, B3 246.94, D4 293.66) -> Amaj (A3 220.00, C#4 277.18, E4 329.63)
# Changes every 8 seconds
chords = [
    [293.66, 369.99, 440.00], # Dmaj
    [246.94, 293.66, 369.99], # Bmin
    [196.00, 246.94, 293.66], # Gmaj
    [220.00, 277.18, 329.63], # Amaj
]

bg_audio = np.zeros(total_samples, dtype=np.float32)
chord_duration = 8.0

for i, freq_set in enumerate(chords):
    # Repeat pattern throughout duration
    chord_idx = 0
    t_start = 0
    while t_start < total_duration + 2.0:
        c_freqs = chords[chord_idx % len(chords)]
        start_samp = int(t_start * sample_rate)
        end_samp = min(total_samples, int((t_start + chord_duration) * sample_rate))
        chunk_t = t[start_samp:end_samp] - t_start
        
        # Envelope: soft attack and decay
        env = np.sin(np.pi * (chunk_t / chord_duration)) ** 0.5
        chord_wave = np.zeros_like(chunk_t)
        for f in c_freqs:
            # Fundamental + warm overtone
            chord_wave += 0.5 * np.sin(2 * np.pi * f * chunk_t) + 0.25 * np.sin(2 * np.pi * (f*2) * chunk_t)
        
        bg_audio[start_samp:end_samp] += (chord_wave * env * 0.12).astype(np.float32)
        chord_idx += 1
        t_start += chord_duration

# Soft master volume and convert to 16-bit PCM WAV
bg_audio = np.clip(bg_audio, -1.0, 1.0)
bg_audio_int16 = (bg_audio * 32767).astype(np.int16)

import wave
with wave.open("scratch/ambient_bg.wav", "wb") as wf:
    wf.setnchannels(1)
    wf.setsampwidth(2)
    wf.setframerate(sample_rate)
    wf.writeframes(bg_audio_int16.tobytes())

print("Generated ambient background track successfully!")

# 5. Mix voice with ambient background music (-18dB on music, crisp voice)
final_audio_cmd = [
    ffmpeg, "-y",
    "-i", "scratch/voice_full.mp3",
    "-i", "scratch/ambient_bg.wav",
    "-filter_complex", "[0:a]volume=1.0[v];[1:a]volume=0.18[m];[v][m]amix=inputs=2:duration=first[out]",
    "-map", "[out]",
    "-c:a", "aac",
    "-b:a", "192k",
    "scratch/final_master_audio.aac"
]
subprocess.check_call(final_audio_cmd)
print("Master mixed audio track scratch/final_master_audio.aac created successfully!")

# Save durations list for video renderer
import json
with open("scratch/scene_durations.json", "w") as f:
    json.dump({
        "scene_durations": scene_durations,
        "total_duration": total_duration
    }, f, indent=2)
