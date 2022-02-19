function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function(mark) {
  if (this.marks === undefined) { 
    this.marks = [mark];
    } else {
    this.marks.push(mark)
    }
}

Student.prototype.addMarks = function(...marks) {
  for (let i = 0; i < marks.length; i++) {
    if (this.marks === undefined) {
      this.marks = []
    }
    this.marks.push(marks[i]);
    }
}

Student.prototype.getAverage = function() {
  if (this.marks) {
    const average = this.marks.reduce((acc, item, idx, arr) => {
      if (idx === arr.length - 1) {
      return (acc + item) / arr.length;
      } else {
        return acc + item;
      }
      })
    return average;
  }
}

Student.prototype.exclude = function(reason) {
  if (this.subject) {
    delete this.subject;
  }
  if (this.marks) {
    delete this.marks;
  }
  this.excluded = reason;
}

// let student1 = new Student("Tony", "male", 37);
// student1.setSubject("Algebra");
// student1.addMark(5);