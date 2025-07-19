def factorial(num):
    sum = 1
    for i in range(1, num + 1):
        sum *= i
    return sum


# print(factorial(5))

# def greeting(name, msg = "Hello"):
#     return


def get_data(*parmas):
    print(parmas)


# get_data(1, 2, 3, 4, 5)


def greet_all(*args):
    return "Hello " + ", ".join(args)


# print(greet_all("John", "Peter", "Vicky"))


# Kwargs
def user_profile(**kwargs):
    print(kwargs)
    # for key, value in kwargs.items():
    #     print(f"{key}: {value}")


# user_profile(name="John", age=30, city="New York")


def log_event(message, **kwargs):
    print(f"Event: {message}")
    for key, value in kwargs.items():
        print(f"  {key}: {value}")


# Usage
# log_event("User login", username="john_doe", ip_address="192.168.0.1", status="success")


def configure_app(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")


# Usage
# configure_app(debug=True, database="PostgreSQL", cache="Redis")


# KWARG


def d_prod(**kwargs):
    # print(kwargs.items())
    product_details = "product details: \n"
    for key, value in kwargs.items():  # ("name" [idx = 0], "Laptop" [idx = 1])
        product_details += f"{key}: {value}\n"
    return product_details


# print(d_prod(name="Laptop", brand="Dell", price=1200, stock=50))


numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
# print(even_numbers)


# from math import sqrt
# from random import randint

# print(sqrt(101))
# print(randint)

def sqrt(x):
    return x**(1/2)

# print(sqrt(16))