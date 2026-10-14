import os
import subprocess
import gtts
import imageio_ffmpeg

scenes = [
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

os.makedirs("scratch/audio", exist_ok=True)
durations = []
ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()

for idx, (speaker, text) in enumerate(scenes):
    mp3_path = f"scratch/audio/scene_{idx+1}.mp3"
    # Use Indian English accent for Ravi (co.in) and standard English for GovFlow
    tld = "co.in" if speaker == "Ravi" else "us"
    tts = gtts.gTTS(text, lang="en", tld=tld)
    tts.save(mp3_path)
    
    # Get duration using ffmpeg
    cmd = [ffmpeg, "-i", mp3_path]
    p = subprocess.Popen(cmd, stderr=subprocess.PIPE, stdout=subprocess.PIPE)
    _, err = p.communicate()
    err_str = err.decode("utf-8", errors="ignore")
    for line in err_str.splitlines():
        if "Duration:" in line:
            dur_str = line.split("Duration:")[1].split(",")[0].strip()
            h, m, s = dur_str.split(":")
            dur = float(h)*3600 + float(m)*60 + float(s)
            durations.append(dur)
            print(f"Scene {idx+1:2d} ({speaker:7s}): {dur:5.2f}s | {text[:50]}...")
            break

print(f"\nTotal speech duration: {sum(durations):.2f} seconds across {len(durations)} scenes.")
