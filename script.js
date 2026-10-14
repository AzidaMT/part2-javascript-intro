
function runTask6() {
  console.log("=== Task 6: Variables and Data Types ===");
  const fullName = "Azida Kunanbayeva"; 
  let age = 19;                      
  const isStudent = true;              
  let favouriteColour = "Lavender";    

  console.log("Value:", fullName, "| Type:", typeof fullName);
  console.log("Value:", age, "| Type:", typeof age);
  console.log("Value:", isStudent, "| Type:", typeof isStudent);
  console.log("Value:", favouriteColour, "| Type:", typeof favouriteColour);

 
  age = 20;
  favouriteColour = "Sage Green";
  console.log("Reassigned age:", age);
  console.log("Reassigned favouriteColour:", favouriteColour);

  
}


function runTask7() {
  console.log("=== Task 7: Input and a Greeting ===");
  const enteredName = prompt("Please enter your name:");
  
  if (enteredName) {
    alert(`Welcome to Camp Horizon portal, ${enteredName}!`);
  }

  const myName = "Azida Kunanbayeva";
  const myGroup = "MT-2501";
  
 
  const combinedGreeting = `Lead Developer: ${myName} (Group: ${myGroup})`;
  console.log(combinedGreeting);
}


function runTask8() {
  console.log("=== Task 8: Sum and Arithmetic ===");
  const rawInput1 = prompt("Enter first number (e.g. 12):", "12");
  const rawInput2 = prompt("Enter second number (e.g. 5):", "5");

  const num1 = Number(rawInput1);
  const num2 = Number(rawInput2);

  const sum = num1 + num2;
  const diff = num1 - num2;
  const product = num1 * num2;
  const quotient = num1 / num2;
  const remainder = num1 % num2;

  console.log(`Sum (${num1} + ${num2}):`, sum);
  console.log(`Difference (${num1} - ${num2}):`, diff);
  console.log(`Product (${num1} * ${num2}):`, product);
  console.log(`Quotient (${num1} / ${num2}):`, quotient);
  console.log(`Remainder (${num1} % ${num2}):`, remainder);


  console.log(`String concatenation: "${rawInput1}" + "${rawInput2}" = "${rawInput1 + rawInput2}"`);
  console.log(`Numeric addition via Number(): ${num1} + ${num2} = ${sum}`);
}


function runTask9() {
  console.log("=== Task 9: String Operations ===");
  const fullName = "Azida Kunanbayeva";


  console.log("Original String:", fullName);
  console.log("String Length (.length):", fullName.length);
  console.log("Uppercase (.toUpperCase()):", fullName.toUpperCase());
  console.log("Lowercase (.toLowerCase()):", fullName.toLowerCase());
  console.log("First 3 characters (.slice(0, 3)):", fullName.slice(0, 3));

  const strA = "Camp Horizon offers";
  const strB = "immersive outdoor tracks.";
  console.log("Combined Sentence:", strA + " " + strB);
}


function runTask10() {
  console.log("=== Task 10: Increment & Assignment Operators ===");
  let counter = 10;
  console.log("Initial value:", counter);

  counter++;
  console.log("After counter++ (increment by 1):", counter); // 11

  counter--;
  console.log("After counter-- (decrement by 1):", counter); // 10

  counter += 5;
  console.log("After counter += 5 (add 5):", counter); // 15

  counter -= 3;
  console.log("After counter -= 3 (subtract 3):", counter); // 12

  counter *= 2;
  console.log("After counter *= 2 (multiply by 2):", counter); // 24

  counter /= 4;
  console.log("After counter /= 4 (divide by 4):", counter); // 6
}


function runTask11() {
  console.log("=== Task 11: Dog Age Formula ===");


  function calculateDogToHumanAge(dogAge) {
    return (dogAge - 2) * 4 + 21;
  }

  const ageTest1 = 2;
  const humanAge1 = calculateDogToHumanAge(ageTest1);
  console.log(`A dog aged ${ageTest1} years old equals ${humanAge1} human years.`);

  const ageTest2 = 5;
  const humanAge2 = calculateDogToHumanAge(ageTest2);
  console.log(`A dog aged ${ageTest2} years old equals ${humanAge2} human years.`);
}

function runTask12() {
  console.log("=== Task 12: Functions Demonstration ===");


  function greetUser(name) {
    console.log(`Greetings, camper ${name}!`);
  }


  function calculateSum(a, b) {
    return a + b;
  }


  function calculateRectangleArea(width, height) {
    return width * height;
  }

  greetUser("Azida");
  greetUser("Aisulu");


  console.log("calculateSum(12, 8) =", calculateSum(12, 8));
  console.log("calculateSum(45, 55) =", calculateSum(45, 55));


  console.log("calculateRectangleArea(10, 5) =", calculateRectangleArea(10, 5));
  console.log("calculateRectangleArea(7.5, 4) =", calculateRectangleArea(7.5, 4));
}


window.addEventListener("DOMContentLoaded", () => {
  runTask6();
  runTask9();
  runTask10();
  runTask11();
  runTask12();
});