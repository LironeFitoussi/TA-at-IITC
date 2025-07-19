import pandas as pd

# Define the list of topics
topics = [
    "How AI Chatbots Like ChatGPT Work (In Simple Terms)",
    "Why Everyone is Talking About the Cloud: What It Really Means",
    "The Magic Behind Google Search: How It Finds What You’re Looking For",
    "What Are Smart Homes? A Beginner’s Guide to IoT Devices",
    "The Basics of Cybersecurity: How to Stay Safe Online",
    "What is HTML, CSS, and JavaScript? The Building Blocks of Websites",
    "How Apps Are Built: A Simple Look at Front-End and Back-End",
    "Why Learn Python? A Beginner-Friendly Programming Language",
    "How Websites Remember You: The Basics of Cookies and Sessions",
    "What Is Open Source Software, and Why Is It Free?",
    "How Netflix Knows What You Want to Watch: Understanding AI Recommendations",
    "Can AI Really Think? Debunking Common AI Myths",
    "How Your Phone Understands Your Voice: A Simple Look at Speech Recognition",
    "What Are Deepfakes, and How Do They Work?",
    "AI Art: How Computers Are Learning to Paint and Draw",
    "Why Strong Passwords Matter: Simple Steps to Secure Your Accounts",
    "What Is a VPN, and Should You Be Using One?",
    "Phishing Scams Explained: How to Spot and Avoid Them",
    "What Happens to Your Data Online: A Beginner’s Guide to Privacy",
    "How Hackers Break Into Accounts (And How You Can Stop Them)",
    "Why Do Phones Keep Getting Better Cameras? Understanding Smartphone Tech",
    "How Online Shopping Works: A Peek Behind the Scenes",
    "How Fitness Trackers Work: The Tech Behind Steps and Heart Rates",
    "The Rise of Electric Cars: What Makes Them Different?",
    "How GPS Works: Finding Your Way with Satellites",
    "What’s Inside Your Computer? A Simple Breakdown of Hardware",
    "How Do Video Games Work? A Beginner’s Look at Game Engines",
    "Why Are Processors So Important? Understanding CPUs in Everyday Devices",
    "What Is a Graphics Card? The Tech Behind Stunning Visuals",
    "How 3D Printing Works: Turning Digital Designs into Physical Objects",
    "What Is the Metaverse, and Why Are People Talking About It?",
    "What Makes TikTok So Addictive? The Tech Behind Social Media Algorithms",
    "Why Are There So Many Streaming Services? A Look at the Industry",
    "How E-Books Work: The Tech Behind Kindle and More",
    "What Is Esports? Understanding the Rise of Competitive Gaming"
]

# Create a DataFrame
data = {
    "TechTalk Subject": topics,
    "Student": [""] * len(topics)  # Empty column for students to fill
}
df = pd.DataFrame(data)

# Save to an Excel file
file_name = "TechTalk_Subjects.xlsx"
df.to_excel(file_name, index=False)

file_name
