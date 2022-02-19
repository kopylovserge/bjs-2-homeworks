class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    fix() {
        this._state = this._state * 1.5;
        if (this._state > 100) {
            this._state = 100;
        }
    }

    set state(a) {
        if (a <= 0) {
            this._state = 0;
        }
        if (a > 100) {
            this._state = 100;
        }
        else {
            this._state = a;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(...args) {
        super(...args);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author,name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(...args) {
        super(...args);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(...args) {
        super(...args);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(...args) {
        super(...args);
        this.type = "detective";
    }
}

// Задача 2

class Library {
    constructor(name, books) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let book = this.books.find(item => item[type] === value);
        if (book === undefined) {
            return null;
        } else {
            return book;
        }
    }

    giveBookByName(bookName) {
        let bookId = this.books.findIndex(item => item.name === bookName);
        if (bookId === -1) {
            return null;
        } else {
            let book = this.books[bookId]
            this.books.splice(bookId, 1);
            return book;
        }
    }

}

// Задача 3

class Student {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.grades = {};
    }

    addMark(mark, subject) {
        if (mark >= 1 && mark <= 5) {
            if (this.grades[subject]) {
                this.grades[subject].push(mark);
            } else {
                this.grades[subject] = [];
                this.grades[subject].push(mark);
            }
        } else {
            console.log("Ошибка, оценка должна быть числом от 1 до 5");
        }
    }

    getAverageBySubject(subject) {
        if (this.grades[subject]) {
            const average = this.grades[subject].reduce((acc, item, idx, arr) => {
                if (idx === arr.length - 1) {
                return (acc + item) / arr.length;
                } else {
                  return acc + item;
                }
                })
            return average;
        } else {
            console.log("Несуществующий предмет");
        }
    }

    getAverage() {
        if (Object.keys(this.grades).length === 0) {
            console.log("Оценок нет");
        } else {
            let numMark = 0;
            let sumMark = 0
            for (let key in this.grades) {
                sumMark += this.grades[key].reduce((acc, item, idx, arr) => {
                return acc + item;
                })
                numMark += this.grades[key].length;
            }
            return sumMark / numMark;
        }

    }

}
