# Step 1: Ask the user for input
year = int(input("Enter a year to check if it's a leap year: "))

# Step 2: Apply the leap year rules
if (year % 4 == 0):  # Check if divisible by 4
    if (year % 100 == 0):  # Check if divisible by 100
        if (year % 400 == 0):  # Check if divisible by 400
            print(f"{year} is a leap year.")
        else:
            print(f"{year} is not a leap year.")
    else:
        print(f"{year} is a leap year.")
else:
    print(f"{year} is not a leap year.")
