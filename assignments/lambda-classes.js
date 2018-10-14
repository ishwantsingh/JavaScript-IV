// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
};


class Instructor extends Person {
    constructor(insAttributes) {
        super(insAttributes);
        this.speciality = insAttributes.speciality;
        this.favLanguage = insAttributes.favLanguage;
        this.catchPhrase = insAttributes.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(subject) {
        console.log(`${this.name} recieves a perfect score on ${subject}`);
    }
};


class Student extends Person {
    constructor(stuAttributes) {
        super(stuAttributes);
        this.previousBackground = stuAttributes.previousBackground;
        this.className = stuAttributes.className;
        this.favSubjects = stuAttributes.favSubjects;
    }
    listsSubjects() {
        console.log(`${this.favSubjects}`);
    }
    PRAssignments(subject) {
        console.log(`${this.name} has submitted PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun spirit challenge on ${subject}`);
    }
};

class ProjectManager extends Instructor {
    constructor(proAttributes) {
        super(proAttributes);
        this.gradClassName = proAttributes.gradClassName;
        this.favInstructor = proAttributes.favInstructor;
    }
    standUp(channel) {
        console.log( `${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student,subject) {
        console.log(`${this.name} debugs ${student}'s code on ${subject}`);
    }
};



  const john = new Instructor({
    name: 'john',
    location: 'Bedrock',
    age: 30,
    gender: 'male',
    favLanguage: 'CSS',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });



  const josh = new Instructor({
    name: 'josh',
    location: 'Bedrock',
    age: 27,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Back-end',
    catchPhrase: `Don't forget the bois`
  });



  const ravan = new Instructor({
    name: 'ravan',
    location: 'Bedrock',
    age: 427,
    gender: 'male',
    favLanguage: 'HTML',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the gals`
  });



  const fred = new ProjectManager({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    gradClassName: `CS-2`,
    favInstructor: `Beige`
  });



  const ram = new ProjectManager({
    name: 'ram',
    location: 'Bedrock',
    age: 377,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    gradClassName: `CS-3`,
    favInstructor: `Josh`
  });



  const sita = new ProjectManager({
    name: 'sita',
    location: 'Bedrock',
    age: 24,
    gender: 'female',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    gradClassName: `CS-4`,
    favInstructor: `Dan`
  });



  const samar = new Student({
    name: 'samar',
    location: 'Bedrock',
    age: 22,
    gender: 'male',
    previousBackground: `Graduate`,
    className: `CS10`,
    favSubjects: `CSS`,
  });



  const snowy = new Student({
    name: 'snowy',
    location: 'Bedrock',
    age: 17,
    gender: 'male',
    previousBackground: `School`,
    className: `CS13`,
    favSubjects: `JavaScript`,
  });



  const gita = new Student({
    name: 'gita',
    location: 'Bedrock',
    age: 20,
    gender: 'female',
    previousBackground: `Time-pass`,
    className: `CS14`,
    favSubjects: `HTML`,
  });

//students methods test
  gita.listsSubjects();
  snowy.PRAssignments('JavaScript');
  samar.sprintChallenge('CSS');

//Project Managers methods test
  ram.standUp('Hired');
  fred.debugsCode('Snowy', 'JavaScript');

//Insttructors methods test
josh.demo('Html');
john.grade('CSS');
