import { triangles } from './triangles.js';

const [
    triangleOne,
    triangleTwo,
    triangleThree,
    triangleFour,
    triangleFive,
    triangleSix,
] = triangles;

const messageList = document.querySelector('.message__list');
let comparisonItems = [];

function compareTriangles(triangleA, triangleB) {
    let triangleItem;
    if (triangleA.getArea() > triangleB.getArea()) {
        triangleItem = `${triangleA.alias} has the largest area`;
    } else if (triangleA.getArea() < triangleB.getArea()) {
        triangleItem = `${triangleB.alias} has the largest area`;
    } else if (triangleA.getArea() === triangleB.getArea()) {
        triangleItem = `The triangles have the same areas`;
    } else {
        console.log('Something went wrong. Try again');
    }
    comparisonItems.push(triangleItem);
}

compareTriangles(triangleOne, triangleTwo);
compareTriangles(triangleThree, triangleFour);
compareTriangles(triangleFive, triangleSix);

for (let i = 0; i < comparisonItems.length; i++) {
    const li = document.createElement('li');
    li.textContent = comparisonItems[i];
    messageList.append(li);
}
