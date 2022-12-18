/*2.3.1. Створити об’єкт «Користувач» з властивостями «Прізвище»,
 «Імя»
 */

const prompt = require("prompt-sync")();

let user = {
    name: null, surname: "Mitsura"
};

console.log("---User---")
console.log(`User: %s %s`, user.name, user[`surname`]);

console.log("Name property in user exist? : ");
console.log(user.name !== undefined);

console.log("Surname property in user exist? : ");
console.log("surname" in user);

console.log("Age property in user exist? : ");
console.log("age" in user);

/* 2.3.2. Створити об’єкт «Студент», що містить властивості
«Спеціальність», «Група» і методи: додати, змінити, видалити дані
*/

let student = {
    specialization: "CS", group: "TR-14",
    addData: function () {
        let newSpecialization = prompt("Enter your specialization: ");
        let newGroup = prompt("Enter your group: ");
        this.specialization = newSpecialization;
        this.group = newGroup;
    },

    updateSpecialization() {
        this.specialization = prompt("Enter your specialization: ");
    },

    updateGroup() {
        this.group = prompt("Enter your group: ");
    },

    deleteData() {
        this.specialization = null;
        this.group = null;
    }
};

console.log("---Student---")
console.log(`Student specialization %s, group %s`, student.specialization, student.group);
student.addData();
console.log(`Add data! Student specialization %s, group %s`, student.specialization, student.group);
student.updateSpecialization();
console.log(`Upload specialisation! Student specialization %s, group %s`, student.specialization, student.group);
student.updateGroup();
console.log(`Upload group! Student specialization %s, group %s`, student.specialization, student.group);
student.deleteData();
console.log(`Deleted! Student specialization %s, group %s`, student.specialization, student.group);


/*2.3.3. Реалізувати копіювання властивостей і методів об’єктів
«Користувач» і «Студент»
*/
console.log("---copy properties---")
let clone = {}; // новий порожній об’єкт
// скопіюємо все властивості user в нього
for (let key in user) {
    clone[key] = user[key];
}

Object.assign(clone, {specialization: student.specialization}, {group: student.group});

console.log("Clone properties from user and student");
console.log("Cloned name: %s", clone.name);
console.log("Cloned surname: %s", clone.surname);
console.log("Cloned major: %s", clone.specialization);
console.log("Cloned group: %s", clone.group);

/*
Додати в прототип об’єкту «Студент» метод «Показати дані»
*/
console.log("---Adding method to prototype---");

function Student1(name, surname, specialization, group) {
    this.name = name;
    this.surname = surname;
    this.specialization = specialization;
    this.group = group;
    this.addData = function () {
        let newSpecialization = prompt("Enter your specialization: ");
        let newGroup = prompt("Enter your group: ");
        this.specialization = newSpecialization;
        this.group = newGroup;
    };
    this.updateSpecialization = function () {
        this.specialization = prompt("Enter your specialization: ");
    };

    this.updateGroup = function () {
        this.group = prompt("Enter your group: ");
    };

    this.deleteData = function () {
        this.specialization = null;
        this.group = null;
    };
}

Student1.prototype.showBio = function () {
    console.log(`Student specialization %s, group %s`, this.specialization, this.group);
}

let vovaStudent = new Student1("Vova", "Mitsura", "CS", "TR-14");
vovaStudent.showBio();


/*
2.3.5. Створити об’єкт «Успішність», що наслідує властивості і методи
об’єкту «Студент» і має додаткові властивості «Тест», «Спроба», «Бали»
і метод «Розрахунок середнього балу» (за декілька спроб).
Перевизначити в об’єкті «Успішність» метод «Показати дані».
2.3.6. Увага! Класи реалізуються самостійно, незалежно від
об’єктів. Реалізувати класи «Студент» і «Успішність» з такими же
методами і властивостями як і попередні об’єкти. «Успішність» наслідує
методи та властивості від «Студент». При реалізації використовувати
геттери і сеттери, наприклад, для перевірки даних чи виведення в різних
виглядах інформацію.
*/
console.log("---class hierarchy---")

class Student {
    constructor(name, surname, major, group) {
        this._name = name;
        this._surname = surname;
        this._major = major;
        this._group = group;
    }

    get name() {
        return this._name;
    }

    set Name(value) {
        if (value.length < 4) {
            console.error("Too short")
            return
        }
        this._name = value;
    }

    get surname() {
        return this._surname;
    }

    set surname(value) {
        this._surname = value;
    }

    get major() {
        return this._major;
    }

    set major(value) {
        this._major = value;
    }

    get group() {
        return this._group;
    }

    set group(value) {
        this._group = value;
    }

    showBio() {
        console.log(`Student specialization %s, group %s`, this.specialization, this.group);
    }

    deleteData() {
        this.specialization = null;
        this.group = null;
    };
}

class Success extends Student {

    constructor(student) {
        super(student.name, student.surname, student.major, student.group);
        this._testAndMark = new Map();
        this._attempt = 0;
    }

    addRecord(test, mark) {
        this._testAndMark.set(test, mark);
        this._attempt++;
    }

    get attempt() {
        return this._attempt;
    }

    set attempt(value) {
        this._attempt = value;
    }

    get testAndMark() {
        return this._testAndMark;
    }

    getAverageMark() {
        if (this._attempt === 0) {
            return 0;
        }
        var average = 0;
        for (let value of this._testAndMark.values()) {
            average += value;
        }

        return average / this._attempt;
    }


    showBio() {
        super.showBio();
        console.log(`${this.name} ${this.surname} passed ${this.attempt} tests with average mark: ${this.getAverageMark()}`);
    }
}

let danStudent = new Student("Dan", "Smith", "CS", "TR-14");
let danStudentSuccess = new Success(danStudent);
danStudentSuccess.addRecord("1", 5.5);
danStudentSuccess.addRecord("2", 5.1);
danStudentSuccess.addRecord("3", 5.3);
danStudentSuccess.showBio();