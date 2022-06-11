/* 
    Task 1 : 
    ანა არის 28 წლის , ხოლო მისი ძმა ლევანი 21ის .

    გამოიყენეთ ცვლადები , რომელშიც შეინახავთ თითოეულის ასაკს და სახელს.
    განსაზღვრეთ ახალი სტრინგ ტიპის ცვლადი რომელიც შეინახასვს ტექსტს :
    'ანა ლევანზე 7 წლით უფროსია'
    სხვაობა დათვალეთ დინამიურად ცვლადების და არითმეტიკული ოპერატორების გამოყენებით
    დალოგეთ ზემოაღნიშნული ცვლადი . 
*/
let name1 = "ანა";
let name2 = "ლევან";
let anaAge = 28;
let levanAge = 21;
let ageDifference = anaAge - levanAge;

console.log(
  `${name1}` +
    " " +
    `${name2}` +
    "ზე" +
    " " +
    ageDifference +
    " " +
    "წლით უფროსია"
);

/*
    Task 2 : 
        გვაქვს სტუდენტების სახელების მასივი ['John','Sam','Ann','Will','Andrew','Joseph','Lorelai','Amelie','Den']
        დალოგეთ სიის ზუსტად შუაში მყოფი სახელი.

*/
let namesArray = [
  "John",
  "Sam",
  "Ann",
  "Will",
  "Andrew",
  "Joseph",
  "Lorelai",
  "Amelie",
  "Den",
];
let middleArrayDefinition = namesArray[(namesArray.length - 1) / 2];
console.log(middleArrayDefinition);

/*
    Task 3 : 
    Part 1 : შექმენით სტუდენტის ობიექტი , რომელსაც აქვს 5 property : firstName; lastName; age; subjects; roommate;
    firstname,lastname - string type
    age - number
    subject - object (array of strings)
    roommate - object (რომელსაც აქვს თავის მხრივ ორი property : fullname , age )

    მნიშვნელობები მიანიჭეთ ტიპების მიხედვით . subject- მასივი უნდა შედგებოდეს არანაკლებ 5 ელემენტისგან

    Part 2 : 
        for ციკლის გამოყენებით დალოგეთ თუ რა საგნებს სწავლობს სტუდენტი , subject arrayს ელემენტები.

        ასევე შექმენით ახალი ცვლადი fullName რომელშიც შეინახავთ სტუდენტის სრულ სახელ და გვარს.

        ეს fullName მნიშვნელობასთან ერთად დაამატეთ სტუდენტის ობიექტს. 
         
        დაამატეთ ცვლადი result რომლის მნიშვნელობაც იქნება წინადადება : 
            ' (სტუდენტის სახელი და გვარი) არის age წლის და მისი რუმმეითი არის : roommate fullname
        

*/

let studentCard = {
  firstName: "ვლადიმერ",
  lastName: "ბადურაძე",
  age: 27,
  subjects: ["math", "programming", "english", "french", "geography"],
  roommate: {
    fullname: "Very Special Roommate",
    age: 27,
  },
};

for (i = 0; i < studentCard.subjects.length; i++) {
  console.log(studentCard.subjects[i]);
}

let fullName = "ვლადიმერ ბადურაძე";
studentCard.fullName = "ვლადიმერ ბადურაძე";

let result = `${studentCard.firstName} ${studentCard.lastName} არის ${studentCard.age} წლის და მისი რუმმეითი არის: ${studentCard.roommate.fullname}`;

/*
    Task 4 : 
        გვაქვს  მასივი : ["Banana", "Orange", "Apple", "Mango",2,12]
        გამოიყენეთ while ციკლი და მანამ სანამ მასივის ელემენტის ტიპი არის სტრინგი
        დალოგეთ ეს ელემენტი.

*/

var myArray = ["Banana", "Orange", "Apple", 'Apple2', "Mango", 2, 12,];

for (i = 0; i < myArray.length; ) {
  while (typeof myArray[i] === "string") {
    console.log(myArray[i]);
    i++;
  }
  break;
}

// var myArray = ["Banana", "Orange", "Apple", 'Apple2', "Mango", 2, 12,];
// let i = 0;

// while (typeof myArray[i] == 'string') {
//   console.log (myArray[i]);
//   i++;
// }


// var myArray = ["Banana", "Orange", "Apple", "Mango", 2, 12, "atlas", "john"];
// function stringsOnly(array) {
//   return array.filter((item) => typeof item === "string");
// }

// console.log(stringsOnly(myArray));

/*
    Task 5 : 
    გვაქვს მასივი : [12,23,43,11,9,2,121,90]
    თუ მასივის ელემენტი მეტია 31ზე და თან არის ლუწი მაშინ დალოგეთ : 'Element is greater than provided value and is EVEN'
    თუ მასივის ელემენტი ნაკლებია 31ზე და თან არის კენტი მაშინ დალოგეთ : 'Element is less than provided value and is ODD'

*/

let newArray = [12,23,43,11,9,2,121,90];
let ourNumber = 31;
let sortedArray = newArray.sort((a, b) => a - b);

for (let i = 0; i < newArray.length; i++) {
  if (sortedArray[i] > ourNumber && sortedArray[i] % 2 == 0) {
    console.log(`${sortedArray[i]} is greater than ${ourNumber} and is EVEN`);
  } else if (sortedArray[i] < ourNumber && sortedArray[i] % 3 == 0) {
    console.log(`${sortedArray[i]} is less than ${ourNumber} and is ODD`);
  } 
}

// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// let i = 0;
// let text = "";

// for (; cars[i]; ) {
//   text += cars[i] + " ";
//   i++;
// }

// console.log(text);
