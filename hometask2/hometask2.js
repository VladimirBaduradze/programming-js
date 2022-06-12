//Task 1
/*
    შექმენით ფუნქცია რომელსაც აქვს ერთი პარამეტრი . 
    ფუნქციას გადაეცით ობიექტი არგუმეტნად 
    
    let sampleObject = {
        isItarable : false,
        sampleArray : [12,63,21,34,98,57]
    }
    თუ მიღებული არგუმენტის isItarable მნიშვნელობა არის ჭეშმარიტი მაშინ დალოგეთ თითოეული ელემენტი
    თუ არ არის ჭეშმარიტი გამოიტანეთ წინადადება "provided array isn't itarable"

*/

let sampleObject = {
  isItarable: true,
  sampleArray: [12, 63, 21, 34, 98, 57],
};

function myFunction() {
  if (sampleObject.isItarable == false) {
    console.log("provided array isn't itarable");
  } else if (sampleObject.isItarable == true) {
    for (let i = 0; i < sampleObject.sampleArray.length; i++) {
      console.log(sampleObject.sampleArray[i]);
    }
  }
}

myFunction();

//Task 2
/*
    შექმენით ფუნქცია checkPythagoras რომელიც მიიღებს სამ პარამეტრს x,y,z .
    ფუნქციამ უნდა შეამოწმოს თუ აღნიშნული რიცხვების რომელიმე კომბინაცია მაინც
    აკმაყოფილებს პითაგორას თეორემის პირობას a^2 + b^2 = c^2;
    თუ კი ეს პირობა დაკმაყოფილდა ფუნქციამ უნდა დააბრუნოს true 
    წინააღმდეგ შემთხვევაში false
    
*/

function checkPythagoras(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    console.log("the equasion is false");
  } else if (a ** 2 + b ** 2 == c ** 2) {
    console.log("they are equal");
  } else {
    console.log("the equasion is false");
  }
}

checkPythagoras(3, 4, 5);

//Task 3
/*
    დაწერეთ ფუნქცია minMax რომელიც იღებს 1 მასივის ტიპის პარამეტრს 
    და დააბრუნებს მასივის ელემენტებს შორის მაქსიმალურს და მინიმალურს ელემენტს .
    მაგ : [2,14,25,75,11,6] თუ კი ამ მასივს გადავცემთ არგუმენტის სახით ფუნქციამ უნდა
    დააბრუნოს "Min value is 2 and Max value is 75"
*/

let myArray = [2, 14, 25, 75, 11, 6];
let sortedArray = myArray.sort((a, b) => a - b);
function minMax() {
  console.log(
    `Min value is ${sortedArray[0]} and Max value is ${
      sortedArray[sortedArray.length - 1]
    }`
  );
}

minMax(sortedArray);

//Task 4

/*
დაწერეთ ფუნქცია რომელმაც გადაცემული კუთხის მნიშვნელობით უნდა დააბრუნოს
თუ რა ტიპის კუთხეა . 
კუთხის სახეები:
Acute angle: An angle between 0 and 90 degrees.
Right angle: An 90 degree angle.
Obtuse angle: An angle between 90 and 180 degrees.
Straight angle: A 180 degree angle.

*/

function angleDegree(a) {
  if (typeof a !== "number") {
    console.log("not an angle");
  } else if (a == 0) {
    console.log("Angle is zero");
  } else if ((a > 0 && a < 90) || (a < 0 && a > -90)) {
    console.log("Acute angle: An angle between 0 and 90 degrees");
  } else if (a == 90 || a == -90) {
    console.log("Right angle: An 90 degree angle.");
  } else if ((a > 90 && a < 180) || (a < -90 && a > -180)) {
    console.log("Obtuse angle: An angle between 90 and 180 degrees.");
  } else if (a == 180 || a == -180) {
    console.log("Straight angle: A 180 degree angle.");
  } else if (a < -180) {
    console.log("Too large of an angle");
  } else {
    console.log("Too large of an angle");
  }
}
angleDegree(180);

/*Task 5
    დაწერეთ ფუნქცია checkStudentGrade რომელიც მიიღებს ობიექტების მასივს. 
    მაგალითად [{name: student1; grade : 91}, {name: student2; grade : 71}, {name: student3; grade : 45} ]
    ფუნქციამ სტუდენტის ქულის მიხედვით უნდა განსაზღვროს საფინალო შედეგი name 
    ქვემოთ არსებული ცხრილის მიხედვით და ელემენტის ობიექტში დაამატოს propertyს სახით
    მიღებული მასივი დააბრუნებინეთ ფუნქციას .

    0-50 = F
    51-60 = E
    61-70 = D
    71-80 = C
    81-100 = A

    საორიენტაციოდ შედეგი აღნიშNული მაგალითის მიხედვით უნდა იყოს
    [{name: student1; grade : 91 ; name : 'A'}, {name: student2; grade : 71,name : 'C'}, {name: student3; grade : 45, name : 'F'} ] */

let studentsArray = [
  { name: "student1", grade: 91 },
  { name: "student2", grade: 71 },
  { name: "student3", grade: 45 },
];

function checkStudentGrade() {
  for (let i = 0; i < studentsArray.length; i++) {
    if (
      studentsArray[i].grade < 0 ||
      typeof studentsArray[i].grade !== "number"
    ) {
      studentsArray[i].final = "Error!";
    } else if (studentsArray[i].grade >= 0 && studentsArray[i].grade <= 50) {
      studentsArray[i].final = "F";
    } else if (studentsArray[i].grade > 50 && studentsArray[i].grade <= 60) {
      studentsArray[i].final = "E";
    } else if (studentsArray[i].grade > 60 && studentsArray[i].grade <= 70) {
      studentsArray[i].final = "D";
    } else if (studentsArray[i].grade > 70 && studentsArray[i].grade <= 80) {
      studentsArray[i].final = "C";
    } else if (studentsArray[i].grade > 80 && studentsArray[i].grade <= 100) {
      studentsArray[i].final = "A";
    } else {
      studentsArray[i].final = "The number is too high!";
    }
  }
}
checkStudentGrade();
console.log(studentsArray);
