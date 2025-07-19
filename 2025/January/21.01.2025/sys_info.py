import os
import platform

def get_machine_info():
    print("="*50)
    print("🔍 SYSTEM INFORMATION")
    print("="*50)
    
    # System and architecture details
    print(f"System: {platform.system()}")
    print(f"Node Name: {platform.node()}")
    print(f"Release: {platform.release()}")
    print(f"Version: {platform.version()}")
    print(f"Machine: {platform.machine()}")
    print(f"Processor: {platform.processor()}")
    print("="*50)
    
    # Current working directory
    print("📂 Current Working Directory")
    print(f"{os.getcwd()}")
    print("="*50)
    
    # Environment variables
    print("🌐 Environment Variables (Partial List)")
    env_vars = os.environ
    for key, value in list(env_vars.items())[:10]:  # Limit to 10 for brevity
        print(f"{key}: {value}")
    print("="*50)
    
    # User details
    print("👤 Current User Details")
    print(f"User: {os.getlogin()}")
    print(f"Home Directory: {os.path.expanduser('~')}")
    print("="*50)

if __name__ == "__main__":
    get_machine_info()
