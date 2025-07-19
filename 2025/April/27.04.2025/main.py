# print("Hello World!")
from datetime import datetime
# class Person:
#     def __init__(self, first_name, last_name):
#         self.first_name = first_name
#         self.last_name = last_name

#     def greet(self):
#         print(f"{self.first_name} says hello")

# person1 = Person(last_name = "Fitoussi", first_name = "Lirone")

# person1.greet()

datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S')

class Superhero:
    def __init__(self, name: str, alias: str, power: int, strength_level, team, is_active = True):
        self.name = name
        self.alias = alias
        self.power = power
        self.strength_level = strength_level
        self.team = team
        self.is_active = is_active

    def introduce(self):
        print(f"I am {self.alias}, also known as {self.name}. My power is {self.power}, and I fight for {self.team}!")
        
    
    def train(self, hours):
        self.strength_level += int(hours) * 10
        print(f"{self.name} have now total of {self.strength_level} power")
    
    def fight_villain(self, villain_name) -> None:
        if not self.is_active:
            print("This guy is already dead!")
            return
        print(f"{self.name} is fighting {villain_name}")
        self.strength_level -= 5
        if self.strength_level < 10:
            self.retire()
            
    def retire(self):
        self.is_active = False
        print(f"Goodbye {self.name}")
    
    def reactivate(self):
        self.is_active = True
        print("Guess Whos Back?")
        
hero1 = Superhero("Deadpool", "Wade Wilson", "Badass", 50, "x-men")
hero2 = Superhero("Iron man", "Tony Stark", "Millionaire", 100, "Avengers", False)

print(hero1.is_active)
print(hero2.is_active)

# hero1.introduce()
# hero2.train("5")

# hero1.fight_villain("Himself")
# hero1.fight_villain("Himself")
# hero1.fight_villain("Himself")
# hero1.fight_villain("Himself")
# hero1.fight_villain("Himself")
# hero1.fight_villain("Himself")
# hero2.retire()
# hero2.reactivate()

class BankAccount: 
    def __init__(self, name):
        self.name = name
        self.__balance = 0

account1 = BankAccount("Lirone")

account1.__balance = 400  

print(account1.__balance)      