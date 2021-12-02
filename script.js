//TO DO
//1. Use the formula (base * height) / 2 = x cm2
//2. Calculate area of triangles of case 1
//3. Compare the triangles to answer which one has the largest area
//4. Check the output
//5. Calculate area of case 2 and case 3
//6. Compare the triangles to answer which one has the largest are
//7. Answer why the parentheses are needed

/* CASE 1 */

//TriangleOne
// base 10 cm, height 13 cm
const triangleOne = (10 * 13) / 2;
console.log(`Triangle one has an area of ${triangleOne} cm2.`);
//Area is 65 cm2

//TriangleTwo
//base 16.5 cm, height 20.3 cm
const triangleTwo = (16.5 * 20.3) / 2;
console.log(`Triangle two has an area of ${triangleTwo} cm2.`);
//Area is 167.475cm2

//Compare the two areas
if (triangleOne > triangleTwo) {
  console.log("The triangle with the largest area is Triangle one");
} else if (triangleOne < triangleTwo) {
  console.log("The triangle with the largest area is Triangle two");
} else if (triangleOne === triangleTwo) {
  console.log("The triangles have the same areas");
} else {
  console.log("Something went wrong. Try again");
}
//Output: Triangle two has the biggest area.

/* CASE 2*/

//TriangleThree
// base 16.5 cm, h 20.3 cm
const triangleThree = (16.5 * 20.3) / 2;
console.log(`Triangle three has an area of ${triangleThree} cm2.`);

//TriangleFour
// base 20.3 cm, h 16.5 cm
const triangleFour = (20.3 * 16.5) / 2;
console.log(`Triangle four has an area of ${triangleFour} cm2.`);

//Compare the two areas

if (triangleThree > triangleFour) {
  console.log("The triangle with the largest area is Triangle three");
} else if (triangleThree < triangleFour) {
  console.log("The triangle with the largest area is Triangle four");
} else if (triangleThree === triangleFour) {
  console.log("The triangles have the same areas");
} else {
  console.log("Something went wrong. Try again");
}
//Output: The triangles have the same areas.

/* CASE 3 */

// TriangleFive
// base 7.8 cm, height 5.6 cm
const triangleFive = (7.8 * 5.6) / 2;
console.log(`Triangle five has an area of ${triangleFive} cm2.`);

// TriangleSix
// base 9.3 cm, height 12.4 cm
const triangleSix = (9.3 * 12.4) / 2;
console.log(`Triangle six has an area of ${triangleSix} cm2.`);

//Compare the two areas

if (triangleFive > triangleSix) {
  console.log("The triangle with the largest area is Triangle five");
} else if (triangleFive < triangleSix) {
  console.log("The triangle with the largest area is Triangle six");
} else if (triangleFive === triangleSix) {
  console.log("The triangles have the same areas");
} else {
  console.log("Something went wrong. Try again");
}
//Output: Triangle six has the biggest area.


// WHY DO WE USE THE PARENTHESES?
/*The multiplication and division operators have the same precedence of 13 in JS.
When I tried to remove the parantheses and checked the answer, the result was the same,
so it would work without the parantheses. However, we shouldn't solely rely on the operator precedence,
since they have the same precedence. It could cause an incorrect calculation, especially if we would've
written a more complex calculation. Therefor we wrap the multiplier-operator between the parantheses
(also called the grouping operator),since the parantheses has the highest precedence in JS.
 By doing so, we ensure that JS calculates the numbers in the order we want.*/
