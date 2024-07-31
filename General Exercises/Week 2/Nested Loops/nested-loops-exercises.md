# 30 Basic Nested Loop Exercises in JavaScript

## Exercise 1
Print a 3x3 grid of asterisks.

Hint: Use two nested loops, both running 3 times.
Resource: [Nested Loops in JavaScript](https://www.freecodecamp.org/news/nesting-for-loops-in-javascript/)
Expected Output:
```
* * *
* * *
* * *
```

## Exercise 2
Print a 5x5 grid of numbers, where each number is the sum of its row and column indices.

Hint: Use two nested loops and add the loop variables.
Resource: [2D Arrays in JavaScript](https://www.freecodecamp.org/news/javascript-2d-arrays/)
Expected Output:
```
0 1 2 3 4
1 2 3 4 5
2 3 4 5 6
3 4 5 6 7
4 5 6 7 8
```

## Exercise 3
Print a right-angled triangle of asterisks with 5 rows.

Hint: The outer loop controls rows, the inner loop prints asterisks based on the row number.
Resource: [Nested Loops for Patterns](https://www.programiz.com/javascript/examples/pyramid-pattern)
Expected Output:
```
*
* *
* * *
* * * *
* * * * *
```

## Exercise 4
Print a 4x4 multiplication table.

Hint: Use nested loops where loop variables represent factors.
Resource: [Multiplication Tables in JavaScript](https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercise-62.php)
Expected Output:
```
1 2 3 4
2 4 6 8
3 6 9 12
4 8 12 16
```

## Exercise 5
Print a square border of asterisks with side length 5.

Hint: Use nested loops and conditionals to print asterisks only on the border.
Resource: [Drawing Shapes with Loops](https://javascript.plainenglish.io/how-to-print-stars-pyramid-patterns-in-javascript-7e58c5eec4b8)
Expected Output:
```
* * * * *
*       *
*       *
*       *
* * * * *
```

## Exercise 6
Print numbers from 1 to 25 in a 5x5 grid.

Hint: Use a single counter variable that increments in the inner loop.
Resource: [Nested Loops in JavaScript](https://www.freecodecamp.org/news/nesting-for-loops-in-javascript/)
Expected Output:
```
1  2  3  4  5
6  7  8  9  10
11 12 13 14 15
16 17 18 19 20
21 22 23 24 25
```

## Exercise 7
Print a pyramid of numbers with 5 rows.

Hint: Use nested loops with proper spacing and number placement.
Resource: [Number Pyramid in JavaScript](https://www.programiz.com/javascript/examples/pyramid-pattern)
Expected Output:
```
    1
   2 2
  3 3 3
 4 4 4 4
5 5 5 5 5
```

## Exercise 8
Print a checkerboard pattern of 0s and 1s in a 5x5 grid.

Hint: Use the sum of row and column indices to determine whether to print 0 or 1.
Resource: [2D Arrays in JavaScript](https://www.freecodecamp.org/news/javascript-2d-arrays/)
Expected Output:
```
0 1 0 1 0
1 0 1 0 1
0 1 0 1 0
1 0 1 0 1
0 1 0 1 0
```

## Exercise 9
Print the first 5 rows of Pascal's triangle.

Hint: Use an array to store previous row's values and calculate current row based on it.
Resource: [Pascal's Triangle in JavaScript](https://www.geeksforgeeks.org/pascal-triangle/)
Expected Output:
```
    1
   1 1
  1 2 1
 1 3 3 1
1 4 6 4 1
```

## Exercise 10
Print a hollow square of asterisks with side length 5.

Hint: Print asterisks only when on the border of the square.
Resource: [Drawing Shapes with Loops](https://javascript.plainenglish.io/how-to-print-stars-pyramid-patterns-in-javascript-7e58c5eec4b8)
Expected Output:
```
* * * * *
*       *
*       *
*       *
* * * * *
```

## Exercise 11
Print a right-angled triangle of numbers from 1 to 15.

Hint: Use a counter variable that increments in the inner loop.
Resource: [Number Patterns in JavaScript](https://www.programiz.com/javascript/examples/pyramid-pattern)
Expected Output:
```
1
2 3
4 5 6
7 8 9 10
11 12 13 14 15
```

## Exercise 12
Print a 4x4 grid where each cell contains its row number repeated column times.

Hint: Use string repeat method or a nested loop for repetition.
Resource: [String Repeat in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)
Expected Output:
```
1 11 111 1111
2 22 222 2222
3 33 333 3333
4 44 444 4444
```

## Exercise 13
Print an inverted right-angled triangle of asterisks with 5 rows.

Hint: Start with the maximum number of asterisks and decrease in each row.
Resource: [Inverted Triangle Pattern](https://www.programmingwithbasics.com/2016/03/printing-inverted-right-triangle-star-pattern.html)
Expected Output:
```
* * * * *
* * * *
* * *
* *
*
```

## Exercise 14
Print a 5x5 grid where each cell contains the larger of its row or column index.

Hint: Use Math.max() to compare row and column indices.
Resource: [Math.max() in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
Expected Output:
```
0 1 2 3 4
1 1 2 3 4
2 2 2 3 4
3 3 3 3 4
4 4 4 4 4
```

## Exercise 15
Print a diamond pattern of asterisks with maximum width 5.

Hint: Combine an increasing triangle with a decreasing triangle.
Resource: [Diamond Pattern in JavaScript](https://www.programmingwithbasics.com/2016/03/printing-diamond-star-pattern.html)
Expected Output:
```
  *
 ***
*****
 ***
  *
```

## Exercise 16
Print a 6x6 grid where each cell contains the product of its row and column indices.

Hint: Multiply the row index by the column index.
Resource: [Multiplication Table in JavaScript](https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercise-62.php)
Expected Output:
```
0 0 0 0 0 0
0 1 2 3 4 5
0 2 4 6 8 10
0 3 6 9 12 15
0 4 8 12 16 20
0 5 10 15 20 25
```

## Exercise 17
Print a right-angled triangle of letters (A-Z) with 5 rows.

Hint: Use String.fromCharCode() to convert numbers to letters.
Resource: [String.fromCharCode() in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)
Expected Output:
```
A
B C
D E F
G H I J
K L M N O
```

## Exercise 18
Print a 5x5 spiral of numbers from 1 to 25.

Hint: Use a 2D array and fill it in a spiral pattern.
Resource: [Spiral Matrix in JavaScript](https://www.geeksforgeeks.org/print-a-given-matrix-in-spiral-form/)
Expected Output:
```
1  2  3  4  5
16 17 18 19 6
15 24 25 20 7
14 23 22 21 8
13 12 11 10 9
```

## Exercise 19
Print a hollow pyramid of asterisks with 5 rows.

Hint: Print asterisks only for the border of the pyramid.
Resource: [Hollow Pyramid Pattern](https://www.geeksforgeeks.org/programs-printing-pyramid-patterns-javascript/)
Expected Output:
```
    *
   * *
  *   *
 *     *
*********
```

## Exercise 20
Print a 4x4 grid where each cell contains the sum of all numbers from 1 to the product of its indices.

Hint: Use a helper function to calculate the sum of numbers from 1 to n.
Resource: [Sum of Natural Numbers in JavaScript](https://www.programiz.com/javascript/examples/sum-natural-number)
Expected Output:
```
1 1 1 1
1 3 6 10
1 6 21 55
1 10 55 220
```

## Exercise 21
Print an hourglass pattern of asterisks with maximum width 5.

Hint: Combine a decreasing triangle with an increasing triangle.
Resource: [Hourglass Pattern in JavaScript](https://www.geeksforgeeks.org/programs-printing-pyramid-patterns-javascript/)
Expected Output:
```
*****
 ***
  *
 ***
*****
```

## Exercise 22
Print a 5x5 grid where each cell contains the absolute difference between its row and column indices.

Hint: Use Math.abs() to calculate the absolute difference.
Resource: [Math.abs() in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs)
Expected Output:
```
0 1 2 3 4
1 0 1 2 3
2 1 0 1 2
3 2 1 0 1
4 3 2 1 0
```

## Exercise 23
Print a right-angled triangle of even numbers up to 30.

Hint: Use a counter that increments by 2 in each iteration.
Resource: [Number Patterns in JavaScript](https://www.programiz.com/javascript/examples/pyramid-pattern)
Expected Output:
```
2
4 6
8 10 12
14 16 18 20
22 24 26 28 30
```

## Exercise 24
Print a 6x6 grid where each cell contains the remainder when the product of its indices is divided by 5.

Hint: Use the modulo operator (%) to calculate the remainder.
Resource: [Modulo Operator in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)
Expected Output:
```
0 0 0 0 0 0
0 1 2 3 4 0
0 2 4 1 3 0
0 3 1 4 2 0
0 4 3 2 1 0
0 0 0 0 0 0
```

## Exercise 25
Print a butterfly pattern of asterisks with maximum width 5.

Hint: Combine two right-angled triangles with spaces in between.
Resource: [Butterfly Pattern in JavaScript](https://www.geeksforgeeks.org/program-print-butterfly-pattern-javascript/)
Expected Output:
```
*   *
** **
*****
** **
*   *
```

## Exercise 26
Print a 5x5 grid where each cell contains the smaller of its row or column index.

Hint: Use Math.min() to compare row and column indices.
Resource: [Math.min() in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min)
Expected Output:
```
0 0 0 0 0
0 1 1 1 1
0 1 2 2 2
0 1 2 3 3
0 1 2 3 4
```

## Exercise 27
Print a right-angled triangle of odd numbers up to 25.

Hint: Use a counter that increments by 2, starting from 1.
Resource: [Number Patterns in JavaScript](https://www.programiz.com/javascript/examples/pyramid-pattern)
Expected Output:
```
1
3 5
7 9 11
13 15 17 19
21 23 25
```

## Exercise 28
Print a 4x4 grid where each cell contains the maximum of all numbers from 1 to the sum of its indices.

Hint: Use a helper function to calculate the maximum of numbers from 1 to n.
Resource: [Math.max() in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
Expected Output:
```
1 2 3 4
2 3 4 5
3 4 5 6
4 5 6 7
```

## Exercise 29
Print a hollow diamond pattern of asterisks with maximum width 5.

Hint: Combine hollow increasing and decreasing triangles.
Resource: [Hollow Diamond Pattern in JavaScript](https://www.geeksforgeeks.org/program-to-print-hollow-diamond-pattern/)
Expected Output:
```
  *
 * *
*   *
 * *
  *
```

## Exercise 30
Print a 5x5 grid where each cell contains the number of factors of the product of its indices.

Hint: Create a function to count factors and use it within nested loops.
Resource: [Counting Factors in JavaScript](https://www.geeksforgeeks.org/find-divisors-natural-number-set-1/)
Expected Output:
```
1 2 2 3 2
2 3 4 4 4
2 4 4 6 4
3 4 6 6 8
2 4 4 8 6
```
