from tkinter import Tk, Label, Button
from module.Bank import BankAccount

root = Tk()

user_account = BankAccount("Lirone")

root.geometry("400x250")  # Set window size
root.title("Welcome to BABA BANK")  # Set window title

def add_balance():
    user_account.deposit(50)
    balance_data.config(text=f"{user_account.checkBalance()}")

def remove_balance():
    user_account.withdraw(50)
    balance_data.config(text=f"{user_account.checkBalance()}")
    
Label(root, text=f"Welcome back, {user_account.owner}").pack()
Label(root, text="Balance", font=("Arial", 25)).pack()
balance_data = Label(root, text=f"{user_account.checkBalance()}", font=("Arial", 45))
balance_data.pack()
Button(root, text="+", command=add_balance).pack()
Button(root, text="-", command=remove_balance).pack()

root.mainloop()