function createTriangle(alias, base, height) {
    return {
        alias: alias,
        base: base,
        height: height,
        getArea() {
            return ((this.base * this.height) / 2).toFixed(1);
        },
    };
}

const triangleOne = createTriangle('Triangle #1', 10, 13);
const triangleTwo = createTriangle('Triangle #2', 16.5, 20.3);
const triangleThree = createTriangle('Triangle #3', 16.5, 20.3);
const triangleFour = createTriangle('Triangle #4', 20.3, 16.5);
const triangleFive = createTriangle('Triangle #5', 7.8, 5.6);
const triangleSix = createTriangle('Triangle #6', 9.3, 12.4);

export const triangles = [
    triangleOne,
    triangleTwo,
    triangleThree,
    triangleFour,
    triangleFive,
    triangleSix,
];
