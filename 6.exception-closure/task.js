function parseCount(variable) {
    let result = Number.parseInt(variable);
    if (isNaN(result)) {
        throw new Error("Невалидное значение");
    }
    return result;
}

function validateCount(variable) {
    try {
        return parseCount(variable);
    } catch(err) {
        return err;
    }
}


class Triangle {
    constructor(side1, side2, side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
        if (side1 + side2 < side3 || side1 + side3 < side2 || side2 + side3 < side1) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    getPerimeter() {
        return this.side1 + this.side2 + this.side3;
    }

    getArea() {
        let p = this.getPerimeter() / 2;
        return Number(Math.sqrt(p * (p - this.side1) * (p - this.side2) * (p - this.side3)).toFixed(3));
    }
}

function getTriangle(side1, side2, side3) {
    try {
        return new Triangle(side1, side2, side3);
    } catch(err) {
        console.log(err);
        // возвращаем объект с двумя методами (не труегольник)
        return {
            getPerimeter: () => "Ошибка! Треугольник не существует",
            getArea: () => "Ошибка! Треугольник не существует",
          }
    }
}