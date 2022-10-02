# Assignment 1

    - Calculate the area of two triangles in three different cases
    - Then compare the values of the result to see which triangle in each case has the largest area

## Requirements

    - Use parentheses to solve the formula
    - Answer why the parentheses are needed
    - Use literal templates
    - In the end of each case, the total area of each triangle should be printed together with answer to which triangle is the largest

## TO DO LIST

    - 1. Set up a variable for one triangle
    - 2. Calculate the value of the triangle and check that it's correct
    - 3. Calculate value of the other triangle and check
    - 4. Compare the values and print the answer
    - 5. Code the other cases

## THE CASES

**Case 1**
triangleOne (b = 10cm, h = 13cm)
triangleTwo (b = 16.5cm, h = 20.3cm)

**Case 2**
triangleThree (b = 16.5cm, h = 20.3cm)
triangleFour (b = 20.3cm, h = 16.5cm)

**Case 3**
triangleFive (b = 7.8cm, h = 5.6cm)
triangleSix (b = 9.3cm, h = 12.4cm)

## QUESTION: WHY DO WE USE THE PARENTHESES?

The multiplication and division operators have the same precedence of 13 in JS.
When I tried to remove the parantheses and checked the answer, the result was the same,
so it would work without the parantheses. However, we shouldn't solely rely on the operator precedence, since they have the same precedence. It could cause an incorrect calculation, especially if we would've written a more complex calculation. Therefor we wrap the multiplier-operator between the parantheses (also called the grouping operator), since the parantheses has the highest precedence in JS. By doing so, we ensure that JS calculates the numbers in the order we want.
