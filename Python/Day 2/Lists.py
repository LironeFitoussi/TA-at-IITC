# First Example
fruits = ['apple', 'banana', 'cherry']
fruits.append('date')
fruits.remove('banana')
print(fruits)  # Output: ['apple', 'cherry', 'date']

# Tuples
coordinates = (10, 20)
print(coordinates[0])  # Output: 10

# Dictionaries
contact = {'name': 'Alice', 'age': 30}
contact['email'] = 'alice@example.com'
del contact['age']
print(contact)  # Output: {'name': 'Alice', 'email': 'alice@example.com'}

# Sets
unique_numbers = {1, 2, 3, 3}
unique_numbers.add(4)
print(unique_numbers)  # Output: {1, 2, 3, 4}

# List Comprehensions:
squares = [x**2 for x in range(10)]
# Expected Output: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

squares = [x**2 for x in range(1, 6)]
print(squares)  # Output: [1, 4, 9, 16, 25]

evens = [x for x in range(10) if x % 2 == 0]
print(evens)  # Output: [0, 2, 4, 6, 8]


# Dictionary Methods:
# .keys(), .values(), .items() 

# .keys()
contact = {'name': 'Alice', 'email': 'alice@doe.com'}
print(contact.keys())  # Output: dict_keys(['name', 'email'])

# .values()
print(contact.values())  # Output: dict_values(['Alice', 'alice@doe.com'])

# .items()
print(contact.items())  # Output: dict_items([('name', 'Alice'), ('email', 'alice@doe.com')])

# .get()
print(contact.get('name'))  # Output: Alice

my_dict = {'name': 'Alice', 'age': 25}
print(my_dict.keys())   # Output: dict_keys(['name', 'age'])
print(my_dict.values()) # Output: dict_values(['Alice', 25])
print(my_dict.items())  # Output: dict_items([('name', 'Alice'), ('age', 25)])

for key, value in my_dict.items():
    print(f"{key}: {value}")

# Nested Structures
nested_list = [[1, 2], [3, 4]]
for sublist in nested_list:
    for item in sublist:
        print(item)  # Output: 1, 2, 3, 4
        
students = {
    'Alice': {'age': 25, 'grade': 'A'},
    'Bob': {'age': 22, 'grade': 'B'}
}
print(students['Alice']['grade'])  # Output: A

# List of Dictionaries:
students = [
    {'name': 'Alice', 'age': 25},
    {'name': 'Bob', 'age': 22}
]
for student in students:
    print(student['name'])  # Output: Alice, Bob

# Dictionary of Lists:
grades = {'Alice': [90, 85, 88], 'Bob': [80, 75, 78]}
print(grades['Alice'])  # Output: [90, 85, 88]


# Nested Loops
nested = [[1, 2], [3, 4]]
for sublist in nested:
    for item in sublist:
        print(item)
