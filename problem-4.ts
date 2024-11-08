{
    /// Problem 4 ///

    type Circle = { shape: "circle"; radius: number };
    type Rectangle = { shape: "rectangle"; width: number; height: number };

    function calculateShapeArea(shape: Circle | Rectangle): number {
        if (shape.shape === "circle") {
            return parseFloat((Math.PI * shape.radius ** 2).toFixed(2));
        } else if (shape.shape === "rectangle") {
            return shape.width * shape.height;
        }
        return 0;
    }

    // Sample Input 1:
    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

    // Sample Output 1:
    console.log(circleArea);

    // Sample Input 2:
    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });
    
    // Sample Output 2:
    console.log(rectangleArea);

    ///
}