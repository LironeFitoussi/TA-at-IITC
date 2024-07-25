# ATM Simulation Exercise - Multi-Part Project

## Objective
Create a simple ATM (Automated Teller Machine) simulation using JavaScript. This project will cover variables, arithmetic operations, logical operators, comparison operators, and assignment operators.

## Part 1: Variable Initialization

### Task
Initialize the necessary variables for the ATM simulation.

### Requirements
- Create variables for account balance, PIN code, and maximum withdrawal limit.
- Use appropriate variable types (let/const) based on whether the values will change.

### Hints
- Consider what data type each variable should be (number or string).
- Think about which variables might need to change during the program's execution.

### Resources
- [JavaScript Variables](https://www.w3schools.com/js/js_variables.asp)
- [JavaScript Data Types](https://www.w3schools.com/js/js_datatypes.asp)

## Part 2: PIN Verification

### Task
Create a function to verify the user's PIN.

### Requirements
- The function should take an entered PIN as an argument.
- It should return a boolean indicating whether the PIN is correct.

### Hints
- Use comparison operators to check if the entered PIN matches the correct PIN.
- Consider using strict equality (===) for comparison.

### Resources
- [JavaScript Functions](https://www.w3schools.com/js/js_functions.asp)
- [JavaScript Comparison Operators](https://www.w3schools.com/js/js_comparisons.asp)

## Part 3: Balance Check

### Task
Implement a function to check and display the account balance.

### Requirements
- The function should return the current account balance.
- Consider how to format the balance for display (e.g., two decimal places).

### Hints
- You might want to use template literals for formatting the output string.
- Think about whether this function needs any parameters.

### Resources
- [JavaScript Numbers](https://www.w3schools.com/js/js_numbers.asp)
- [JavaScript String Methods](https://www.w3schools.com/js/js_string_methods.asp)

## Part 4: Withdrawal Function

### Task
Create a function to handle withdrawals from the account.

### Requirements
- The function should take the withdrawal amount as an argument.
- It should check if the withdrawal is valid (sufficient balance and within maximum limit).
- If valid, it should update the account balance and return the withdrawn amount.
- If invalid, it should return an appropriate message or value.

### Hints
- Use arithmetic operators to calculate the new balance.
- Use comparison operators to check if the withdrawal is valid.
- Consider using logical operators to combine multiple conditions.
- Don't forget to use assignment operators to update the balance.

### Resources
- [JavaScript Arithmetic Operators](https://www.w3schools.com/js/js_arithmetic.asp)
- [JavaScript Logical Operators](https://www.w3schools.com/js/js_comparisons.asp)
- [JavaScript Assignment Operators](https://www.w3schools.com/js/js_assignment.asp)

## Part 5: Deposit Function

### Task
Implement a function to handle deposits to the account.

### Requirements
- The function should take the deposit amount as an argument.
- It should update the account balance and return the new balance.

### Hints
- Use an assignment operator to update the account balance.
- Think about whether you need to validate the deposit amount.

### Resources
- [JavaScript Functions](https://www.w3schools.com/js/js_functions.asp)
- [JavaScript Arithmetic Operators](https://www.w3schools.com/js/js_arithmetic.asp)

## Part 6: Main ATM Logic

### Task
Create the main function that simulates the ATM's operation.

### Requirements
- The function should prompt the user for their PIN.
- If the PIN is correct, it should present options (check balance, withdraw, deposit).
- Based on the user's choice, it should call the appropriate function.
- It should display relevant messages to the user (success, error, etc.).

### Hints
- Consider using a loop to allow multiple transactions.
- Think about how to handle invalid user inputs.
- Use conditional statements to process the user's choice.

### Resources
- [JavaScript if...else Statements](https://www.w3schools.com/js/js_if_else.asp)
- [JavaScript Switch Statement](https://www.w3schools.com/js/js_switch.asp)
- [JavaScript Loops](https://www.w3schools.com/js/js_loop_for.asp)

## Part 7: Integration

### Task
Combine all the functions you've created into a cohesive ATM simulation program.

### Requirements
- Ensure all parts work together seamlessly.
- The program should run without errors and handle various scenarios gracefully.

### Hints
- Test your program with different inputs and scenarios.
- Consider adding error handling for unexpected situations.

### Resources
- [JavaScript Errors](https://www.w3schools.com/js/js_errors.asp)
- [JavaScript Scope](https://www.w3schools.com/js/js_scope.asp)

## Bonus Challenges
1. Implement a feature to track failed PIN attempts and lock the account after 3 fails.
2. Add a feature to display the last 5 transactions.
3. Implement a daily withdrawal limit in addition to the per-transaction limit.

## Final Steps
- Test your ATM simulation thoroughly.
- Consider edge cases and how your program handles them.
- Refactor your code for clarity and efficiency if needed.

Remember to apply the concepts of variables, arithmetic operations, logical operators, comparison operators, and assignment operators throughout your solution. Good luck!

[JavaScript Tutorial](https://www.w3schools.com/js/default.asp)
