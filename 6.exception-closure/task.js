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
        if (this.side1 !== 0) {
            return this.side1 + this.side2 + this.side3;
        } else {
            return "Ошибка! Треугольник не существует";
        }
    }

    getArea() {
        if (this.side1 !== 0) {
            let p = this.getPerimeter() / 2;
            return Number(Math.sqrt(p * (p - this.side1) * (p - this.side2) * (p - this.side3)).toFixed(3));
        } else {
            return "Ошибка! Треугольник не существует";
        }
    }
}

function getTriangle(side1, side2, side3) {
    try {
        return new Triangle(side1, side2, side3);
    } catch(err) {
        console.log(err);
        return new Triangle(0, 0, 0);
    }
}