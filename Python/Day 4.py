# Slide 3: Exercise – Warm-Up
class User:
    def __init__(self, name, balance):
        self.name = name
        self.balance = balance

    def greet(self):
        return f"Hello, {self.name}! Your balance is {self.balance}."
user = User("Alice", 100)
print(user.greet())  # Output: Hello, Alice! Your balance is 100.


# Slide 4: Topic – Defining Classes
class User:
    def __init__(self, name):
        self.name = name

# Slide 5: Exercise – Create a Class
class User:
    def __init__(self, name, balance):
        self.name = name
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        self.balance -= amount

# Slide 6: Topic – Inheritance
class SubClass(ParentClass):
    pass
    # Additional attributes or methods

# Slide 7: Exercise – Extend a Class
class BankAccount:
    def __init__(self, holder, balance=0):
        self.holder = holder
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount

class SavingsAccount(BankAccount):
    def deposit(self, amount):
        bonus = amount * 0.02
        self.balance += (amount + bonus)

# Slide 8: Topic – Private Attributes
class BankAccount:
    def __init__(self):
        self.__balance = 0

# Slide 9: Exercise – Use Encapsulation
class BankAccount:
    def __init__(self):
        self.__balance = 0

    def get_balance(self):
        return self.__balance

    def set_balance(self, amount):
        self.__balance = amount

# Slide 11: Exercise – Build a GUI
from tkinter import Tk, Label, Button

root = Tk()
Label(root, text="Welcome!").pack()
Button(root, text="Click Me", command=lambda: print("Hello!")).pack()
root.mainloop()

# Slide 13: Exercise – Build the System
class ATM:
    def __init__(self):
        self.balance = 0

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        if amount > self.balance:
            return "Insufficient funds"
        self.balance -= amount

from tkinter import Tk, Button
atm = ATM()
root = Tk()
Button(root, text="Deposit", command=lambda: atm.deposit(100)).pack()
root.mainloop()
