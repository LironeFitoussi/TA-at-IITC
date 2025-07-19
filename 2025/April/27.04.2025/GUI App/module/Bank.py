class BankAccount:
    def __init__(self, owner):
        self.owner = owner
        self.__balance = 0
    
    def deposit(self, sum):
        self.__balance += sum
    def withdraw(self, sum):
        self.__balance -= sum
    def checkBalance(self):
        print(f"\nCurrent balance: {self.__balance}")
        return self.__balance
