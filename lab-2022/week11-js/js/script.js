//open Chrome inspector panel and go to the "console' tab"

// this method will print anything to the console in your brower  
//we've been using this - but why? 
console.log("hi");

// create a variable
const myName = "Dawn"; // this is a string.
const age = 200; // this is a number
console.log(name, age); // log out variable values (check the console)

// something more interesting
console.log(`my name is ${myName} and I am ${age} years old`); 
// note the use of backticks instead of quotes here

// let's generate a random age for me
// the random() method will generate a decimal between 0 and 1
const randomNumber = Math.round(Math.random() * 100); 
console.log(`Actually, I am ${randomNumber} years old`); 
// refresh the page and see the number update every time our program runs!

//let's look at functions
// a function allows us to segment code and only run it when we want
// every function uses the "function" keyword follwed by a custom name you create followed by () and an { }
// put your walled off code between the  { }
function mySpecialFunction() {
    console.log("you only see my when i am run");
  }

  // now we need to run the function.
// Just use the function name with () like: mySpecialFunction()
// We can put this anywhere. We can even add it to our html on a button

// uncomment the below line of code to run our function
mySpecialFunction();

// great job! play around with this code for a little and then more on to the next example