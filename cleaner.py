import os
import shutil

def remove_node_modules(root_dir):
    for dirpath, dirnames, filenames in os.walk(root_dir, topdown=False):
        for dirname in dirnames:
            if dirname == 'node_modules':
                full_path = os.path.join(dirpath, dirname)
                print(f"Removing: {full_path}")
                shutil.rmtree(full_path, ignore_errors=True)

if __name__ == "__main__":
    current_dir = os.path.dirname(os.path.abspath(__file__))
    print(f"Scanning and cleaning node_modules in: {current_dir}")
    remove_node_modules(current_dir)
    print("✅ All node_modules folders removed.")
