

### 1. Print a Square of Stars
**Exercise:**  
Write a program that prints a 5x5 square of stars (`*`).

**Hint:**  
Use a nested loop. The outer loop will run 5 times (for each row), and the inner loop will also run 5 times (for each column). In each iteration of the inner loop, add a star to the current row.

**Expected Output:**
```
*****
*****
*****
*****
*****
```

---

### 2. Print a Rectangle of Stars
**Exercise:**  
Write a program that prints a rectangle of stars with 3 rows and 7 columns.

**Hint:**  
The outer loop should handle the rows (3 iterations), and the inner loop should handle the columns (7 iterations). Construct each row by concatenating 7 stars.

**Expected Output:**
```
*******
*******
*******
```

---

### 3. Print a Right Triangle of Stars
**Exercise:**  
Write a program that prints a right triangle with 5 rows of stars.

**Hint:**  
The outer loop should represent the rows, running 5 times. The inner loop controls the number of stars in each row, which increases by 1 as you move to the next row.

**Expected Output:**
```
*
**
***
****
*****
```

---

### 4. Print a Left-Aligned Triangle
**Exercise:**  
Write a program to print a left-aligned triangle with 5 rows.

**Hint:**  
Similar to the right triangle, but each row starts from the left side and increases in stars from top to bottom. Focus on incrementing the number of stars in each successive row.

**Expected Output:**
```
*
**
***
****
*****
```

---

### 5. Print a Number Square
**Exercise:**  
Write a program to print a 4x4 square with numbers from 1 to 4.

**Hint:**  
The outer loop runs 4 times for rows. The inner loop prints numbers from 1 to 4 in each row.

**Expected Output:**
```
1 2 3 4 
1 2 3 4 
1 2 3 4 
1 2 3 4 
```

---

### 6. Print a Reverse Number Triangle
**Exercise:**  
Write a program to print a reverse number triangle starting from 5.

**Hint:**  
The outer loop should start at 5 and count down to 1. The inner loop should print numbers from the current row number down to 1.

**Expected Output:**
```
5 4 3 2 1 
4 3 2 1 
3 2 1 
2 1 
1 
```

---

### 7. Multiplication Table
**Exercise:**  
Write a program to print a 5x5 multiplication table.

**Hint:**  
The outer loop represents the first number in the multiplication, and the inner loop represents the second number. Multiply the values of the outer and inner loop indices and print them in a tabular format.

**Expected Output:**
```
1  2  3  4  5  
2  4  6  8  10  
3  6  9  12 15  
4  8  12 16 20  
5  10 15 20 25  
```

---

### 8. Print a Checkerboard Pattern
**Exercise:**  
Write a program to print a checkerboard pattern with alternating `#` and `*` characters in a 6x6 grid.

**Hint:**  
The pattern should alternate symbols based on the sum of the current row and column index. If the sum is even, print `#`; if it's odd, print `*`.

**Expected Output:**
```
# * # * # * 
* # * # * # 
# * # * # * 
* # * # * # 
# * # * # * 
* # * # * # 
```

---

### 9. Print a Number Pyramid
**Exercise:**  
Write a program to print a pyramid of numbers where each row contains numbers from 1 up to that row number.

**Hint:**  
The outer loop controls the rows, and the inner loop prints numbers starting from 1 up to the current row number.

**Expected Output:**
```
1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 
```

---

### 10. Sum of Numbers in Rows
**Exercise:**  
Write a program to print the sum of numbers in each row, where each row contains numbers from 1 to 5.

**Hint:**  
Use the inner loop to calculate the sum of numbers from 1 to 5. The outer loop should print this sum for each row.

**Expected Output:**
```
Sum of row 1: 15
Sum of row 2: 15
Sum of row 3: 15
Sum of row 4: 15
Sum of row 5: 15
```

---

### 11. Print a Number Diamond
**Exercise:**  
Write a program that prints a diamond shape made of numbers, where the middle row has the maximum width.

**Hint:**  
The pattern starts with an increasing number of digits and then decreases. Use nested loops to create the top half, and then mirror this pattern for the bottom half.

**Expected Output:**
```
   1   
  1 2  
 1 2 3 
1 2 3 4
 1 2 3 
  1 2  
   1   
```

---

### 12. Print a Hollow Square
**Exercise:**  
Write a program to print a hollow square of 5x5 stars, with stars only on the borders.

**Hint:**  
For the first and last rows, print stars completely. For the rows in between, print stars only at the beginning and end of each row.

**Expected Output:**
```
*****
*   *
*   *
*   *
*****
```

---

### 13. Print a Hollow Triangle
**Exercise:**  
Write a program to print a right-angled hollow triangle with 5 rows.

**Hint:**  
The first and last rows should be fully filled with stars. The rows in between should have stars only at the beginning and end.

**Expected Output:**
```
*
**
* *
*  *
*****
```

---

### 14. Inverted Number Pyramid
**Exercise:**  
Write a program to print an inverted number pyramid starting from 5.

**Hint:**  
The outer loop should start from 5 and count down, while the inner loop should print numbers starting from 1 up to the current row number.

**Expected Output:**
```
1 2 3 4 5 
1 2 3 4 
1 2 3 
1 2 
1 
```

---

### 15. Print Diagonal of Stars
**Exercise:**  
Write a program to print a diagonal of stars in a 5x5 grid.

**Hint:**  
The stars should be printed where the row index equals the column index.

**Expected Output:**
```
*    
 *   
  *  
   * 
    *
```

---

### 16. Print a Hollow Rectangle
**Exercise:**  
Write a program to print a hollow rectangle of stars with 3 rows and 7 columns.

**Hint:**  
The first and last rows should be fully filled with stars, while the middle row should have stars only at the beginning and end.

**Expected Output:**
```
*******
*     *
*******
```

---

### 17. Print a Mirrored Right Triangle
**Exercise:**  
Write a program to print a mirrored right triangle of stars with 5 rows.

**Hint:**  
Each row should start with spaces, followed by stars. The number of spaces decreases while the number of stars increases.

**Expected Output:**
```
    *
   **
  ***
 ****
*****
```

---

### 18. Print an Hourglass Pattern
**Exercise:**  
Write a program to print an hourglass pattern with stars.

**Hint:**  
The first half of the pattern decreases in star count, and the second half increases. Use nested loops and ensure correct alignment of spaces.

**Expected Output:**
```
*****
 ****
  ***
   **
    *
   **
  ***
 ****
*****
```

---

### 19. Print a Hollow Diamond
**Exercise:**  
Write a program to print a hollow diamond shape of stars.

**Hint:**  
The pattern starts with a single star at the top, increases in width with spaces in between, and then decreases symmetrically.

**Expected Output:**
```
  *  
 * *
*   *
 * *
  *  
```

---

### 20. Sum of Rows and Columns
**Exercise:**  
Write a program to print the sum of each row and each column in a 3x3 grid, where the grid contains numbers from 1 to 9.

**Hint:**  
Calculate the sum for each row and column separately using nested loops.

**Expected Output:**
```
Row 1 sum: 6
Row 2 sum: 15
Row 3 sum: 24

Column 1 sum: 12
Column 2 sum: 15
Column 3 sum: 18
```

