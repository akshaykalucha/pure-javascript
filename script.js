/*var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);*/

/*var obj1 = {
    name: 'Akshay',
    age: 19,
    job: 'Teacher'
};

var obj2 = obj1;

obj1.age = 30;

console.log(obj1);
console.log(obj2.age);*/


/*var age = 27;
var obj = {
    name: 'Akshay',
    city: 'Delhi'
};

function change(a) {
    a.name = 'Ankur';
    a.city = 'Mumbai';
};

change(obj);

console.log(obj.name);
console.log(obj.city); */






/*var years = [1990, 1965, 1937, 2005, 1998];

function arraycalc(arr, fn) {
    var arrRes = [];
    for (i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    };
    return arrRes;
};

function cacluateAge(el) {
    return 2019 - el;
};

function isFullAge(el) {
    return el >= 18;
};

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {

        return Math.round(206 - (0.67 * el));
    } else {
        return -1;
    };
};

var ages = arraycalc(years, cacluateAge);
console.log(ages);

var fullAges = arraycalc(ages, isFullAge);
console.log(fullAges);


var heart = arraycalc(ages, maxHeartRate);
console.log(heart);*/




/*function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ' you are a designer, please xplain design');
        };
    } else if (job === 'teacher') {
        return function (name) {
            console.log(name + ' please tell what is teacher');
        };
    } else {
        return function (name) {
            console.log('hello' + name + 'what you do?');
        };
    }
}



var teacherquestion = interviewQuestion('teacher');

teacherquestion('akshay');

var designerQuestion = interviewQuestion('designer');
designerQuestion('Akshay');


interviewQuestion('teacher')('ankur');*/

/*function retirement(retirementAge) {
    var a = ' years left until retirement';
    return function (yearOfBirth) {
        var age = 2019 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}*/



/* inner function is able to use the 'a' variable which is declared before the yearOfBirth function*/


/*var retirementUS = retirement(66);
retirementUS(2000);*/




//var retirementIndia = retirement(70)(2000);


/* rewriting interview question function using the closure method */



/*function interviewQuestion(job) {
    return function (name) {
        if (job === 'designer') {
            console.log(name + ' you are a designer, please xplain design');
        } else if (job === 'teacher') {
            console.log(name + ' please tell what is teacher');

        }
        else {
            console.log('hello' + name + 'what you do?');


        }
    }

}

interviewQuestion('teacher')('Akshay');*/

// bind, call and apply method

/*var akshay = {
    name: 'Akshay',
    job: 'teacher',
    age: 30,
    presentation: function (style, timeOfDay) {
        if (style == 'formal') {
            console.log('Good ' + timeOfDay + ' ladies and gentlemens I am ' + this.name + ' and a ' + this.job)
        } else if (style === 'friendly') {
            console.log('hello my name is ' + this.name + ' my job is ' + this.job + ' have a nice ' + timeOfDay);
        }
    }
}

akshay.presentation('formal', 'morning');

var ankur = {
    name: 'ankur',
    job: 'designer',
    age: 20
};

akshay.presentation.call(ankur, 'friendly', 'afternoon');*/
// coding challenges

/*function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.displayQuestion = function () {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
        console.log(i + ': ' + this.answers[i]);
    }
}


Question.prototype.checkAnswer = function (ans) {
    if (ans === this.correct) {
        console.log('correct answer')
    } else {
        console.log('wrong answer')
    }
}


var q1 = new Question('Who is defence minister of india',
    ['N.Sitharaman', 'Amit shah', 'Rajnath singh'], 2);

var q2 = new Question('What is the name of Pythons web framework',
    ['Django', 'Pandas', 'Numpy'], 0);

var q3 = new Question('What is capital of inida',
    ['Mumbai', 'kolkata', 'Delhi', 'Chennai'], 2);



var questions = [q1, q2, q3];

var n = Math.floor(Math.random() * questions.length);

questions[n].displayQuestion();



var answer = parseInt(prompt('please select correct answer.'));


questions[n].checkAnswer(answer);*/






function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.displayQuestion = function () {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
        console.log(i + ': ' + this.answers[i]);
    }
}


Question.prototype.checkAnswer = function (ans) {
    if (ans === this.correct) {
        console.log('correct answer')
    } else {
        console.log('wrong answer')
    }
}


var q1 = new Question('Who is defence minister of india',
    ['N.Sitharaman', 'Amit shah', 'Rajnath singh'], 2);

var q2 = new Question('What is the name of Pythons web framework',
    ['Django', 'Pandas', 'Numpy'], 0);

var q3 = new Question('What is capital of inida',
    ['Mumbai', 'kolkata', 'Delhi', 'Chennai'], 2);


var questions = [q1, q2, q3];

var n = Math.floor(Math.random() * questions.length);

questions[n].displayQuestion();



var answer = parseInt(prompt('please select correct answer.'));


questions[n].checkAnswer(answer);





