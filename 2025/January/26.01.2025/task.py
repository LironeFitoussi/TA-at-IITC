import json

# Clear Console
print("\033[H\033[J")
print("""
__________               __                .__ 
\______   \_____ _______|  | ____ __  ____ |__|
 |    |  _/\__  \\_  __ \  |/ /  |  \/    \|  |
 |    |   \ / __ \|  | \/    <|  |  /   |  \  |
 |______  /(____  /__|  |__|_ \____/|___|  /__|
        \/      \/           \/          \/    
""")
print("Welcome to the Task 3")
print("Please choose and action to perform")

while True:
    # Welocme Message
    print("1 - add user\n2 - view all users\n3 - delete last user\n4 - exit\n")


    user_input = input("Enter your choice: ")

    def add_user(**kwargs):
        with open("db.json", "r") as file:
            # print(file["users"])
            db = json.load(file)
            db["users"].append(kwargs)
            
        with open("db.json", "w") as file:
            json.dump(db, file)
        
        print("user added successfully")

    def view_all():
        with open("db.json", "r") as file:
            # print(file["users"])
            db = json.load(file)
            print(db["users"])
        
    if user_input == "1":
        name = input("Add User Name:\n")
        mail = input("Add User Mail:\n")
        phone = input("Add User phone:\n")
        
        add_user(name = name, mail = mail, phone = phone)
        
    elif user_input == "2":
        view_all()
        continue
    
    elif user_input == "3":
        with open("db.json", "r") as file:
            # print(file["users"])
            db = json.load(file)
            db["users"].pop(-1)
            print(db)
        
        with open("db.json", "w") as file:
            json.dump(db, file)
    
    elif user_input == "4":
        print("Goodbye")
        break
    print("\033[H\033[J")

        
# add_user(name="John", age=30, city="New York")