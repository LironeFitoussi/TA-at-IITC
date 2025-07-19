from custom_module.sqrt_sum import calc

# calc(2, 54, 30, 72, 299, 3434)

# x = 1
# y = 2
# z = 3

# print(x, y, z)
# x, y, z = y, z, x
# print(x, y, z)

try:
    f = open("demofile.txt", "r")
    print(f.readline())
    
    10 / 0
except FileNotFoundError:
    print("File does not exist.")
except ZeroDivisionError:
    print("dont split the zero")
finally:
    print("execustion done")