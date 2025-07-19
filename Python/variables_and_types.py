# String Example

# What you can do
text = "Hello"
print(text + " World!")  # Concatenation: Hello World!
print(text * 3)          # Repetition: HelloHelloHello
print(text[1])           # Indexing: e

# What you cannot do
try:
    print(text + 5)      # Error: Cannot add string and number
except TypeError as e:
    print(f"Error: {e}")

# Float Example
# What you can do
pi = 3.14
radius = 5
area = pi * (radius ** 2)  # Circle area calculation
print(f"Area of circle: {area}")  # Output: Area of circle: 78.5

# What you cannot do
try:
    print(pi["Hello"])    # Error: Floats cannot be indexed
except TypeError as e:
    print(f"Error: {e}")

# Integer Example
# What you can do
x = 10
y = 3
print(x + y)             # Addition: 13
print(x // y)            # Integer division: 3
print(x % y)             # Modulus: 1

# What you cannot do
try:
    print(x / "5")       # Error: Cannot divide an integer by a string
except TypeError as e:
    print(f"Error: {e}")

# Conversion Example
num_str = "123"
result = int(num_str) + 2
print(result)  # Output: 125

# Combining Types
# Mixing types with explicit conversion
num = 10  # Integer
decimal = 3.5  # Float
text = "Number is: "

# Combining them into a single output
print(text + str(num))      # Convert integer to string: "Number is: 10"
print(num + int(decimal))   # Convert float to integer: 10 + 3 = 13
