# Quick Quiz: Write a list comprehension to create a list of squares for numbers 1–10.
squares = [x**2 for x in range(1, 11)]
print(squares)  # Output: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

# Quick Quiz: Write a list comprehension to create a list of squares for numbers 1–10.
def area_of_rectangle(length, width):
    return length * width

print(area_of_rectangle(5, 10))  # Output: 50

# Check even or odd:
def is_even(number):
    return number % 2 == 0

print(is_even(4))  # Output: True

# Write a function that calculates the factorial of a number.
def factorial(n):
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result

print(factorial(5))  # Output: 120


# Defaul Parameters
def greet(name, message="Hello"):
    return f"{message}, {name}!"

print(greet("Alice"))  # Output: Hello, Alice!
print(greet("Bob", "Hi"))  # Output: Hi, Bob!


# Args
def sum_all(*args):
    return sum(args)

print(sum_all(1, 2, 3, 4))  # Output: 10

# Kwargs
def user_profile(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

user_profile(name="John", age=30, city="New York")

# lambda
# Lambda functions are small, anonymous functions that can have any number of arguments, but can only have one expression.
numbers = [1, 2, 3, 4]
doubled = list(map(lambda x: x * 2, numbers))
print(doubled)  # Output: [2, 4, 6, 8]


# Math Module
import math
print(math.sqrt(16))  # Output: 4.0

# Random Module
import random
print(random.randint(1, 100))  # Output: Random number between 1 and 100

# Create a custom module for user operations and import it into a script..
def greet_user(name):
    return f"Hello, {name}!"

from user_operations import greet_user
print(greet_user("Alice"))  # Output: Hello, Alice!

# Error Handling Basics
# Division by zero:
try:
    result = 10 / 0
except ZeroDivisionError:
    print("You cannot divide by zero!")
finally:
    print("Execution completed.")


# Write a program to open a file and handle the FileNotFoundError exception.
try:
    with open("nonexistent.txt", "r") as file:
        print(file.read())
except FileNotFoundError:
    print("File not found.")


# Practical Error Handling
try:
    with open("numbers.txt", "r") as file:
        numbers = [int(line.strip()) for line in file]
        print(numbers)
except FileNotFoundError:
    print("File not found.")
except ValueError:
    print("Invalid data in file.")
