"""
Fun With Lists in Python
Lists are like Arrays in JS
"""

# ? Lists:
# my_movies = ["Harry Potter", "Spiderman", "Superman"]


# my_movies.append("Shrek")

# print(my_movies)


# my_movies.remove("Spiderman")
# print(my_movies)

# ? Tuples:
# my_birth = (10, 1999)
# my_birth.append(26) # This will Throw and error
# my_birth.remove(10) # This will Throw and error

# ? Dictionaries
# sabag = {
#     "fName": "Yosef",
#     # True: "sabag",
#     # fName,
#     "age": 25
# }

# del sabag["fName"]

# print(sabag)

# ? Sets
# # create a set of integer type
# student_id = {112, 114, 116, 118, 115}
# print('Student ID:', student_id)

# # create a set of string type
# vowel_letters = {'a', 'e', 'i', 'o', 'u'}
# print('Vowel Letters:', vowel_letters)

# # create a set of mixed data types
# mixed_set = {'Hello', 101, -2, 'Bye'}
# print('Set of mixed data types:', mixed_set)


# fruits = {"Apple", "Peach", "Mango"}

# # for loop to access each fruits
# for fruit in fruits:
#     print(fruit)

# colors = ["red", "green", "blue", "purple", "black"]
# # print(colors[0], colors[-1])

# colors.append("orange")
# colors.remove(colors[1])

# print(colors)

# list_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# for num in list_1:
#     if num % 2 == 0:
#         print(num)

# fruits = ["apple", "banana","grape", "streberry"]
# print(fruits)
# rev_fruits = fruits.reverse()
# print(rev_fruits)


# colors = ("red","blue","green","yellow")

# t = list(colors)
# # print('colors:' , t)

# tupy = tuple(t)
# print(tupy)
# evens = [x for x in range(10) if x % 2 == 0]
# print(evens)  # Output: [0, 2, 4, 6, 8]

words = [word.upper() for word in ['product', 'preview', 'card']]
print(words)

users = {
    "john": 25,
    "Baba": 30,
    "Jacob": 31
}
print(users.items())
for name, age in users.items():
    print(f"{name} is {age} y.o.")