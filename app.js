        // Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

// let age = 21
// if(age <+ 21){
//     console.log("you can not enter the club!");
// }else{
//     console.log("Welcome!");
// }
// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"

/*****if/ else if / else**** */

// Check if the person is elegible for a birthday card from the King! (100)

// let age = 65

// // if less than 100    -> "Not elegible"
// if(age < 100){
//     console.log("Not elegible")
// }
// // else if exactly 100 -> "Here is your birthday card from the King!"
// else if(age === 100){
//     console.log("Here is your birthday card from the King!")
// }
// // else                -> "Not elegible, you have already gotten one"
// else{
//     console.log("Not elegible, you have already gotten one")
// }

// console.log(4 === 3)  // false
// console.log(5 > 2)    // true
// console.log(12 > 12)  //false
// console.log(3 < 0)    //false
// console.log(3 >= 3)   // true
// console.log(11 <= 11) //true
// console.log(3 <= 2)   //false

//Array - ordered lists of items
// let featuredPosts = ["Check out my Netflix clone", //0
// "Here's the code for my project", //1
// "I've just relaunched my portfolio" //2
// ]
// console.log( featuredPosts.length )

// Array - ordered list of items - coposite / complex data type

// Create an array that describes yourself. Use the three primitive data types you've learned
// It should contain your name (string), your age (number), and whether you like pizza (boolean)
// let mySelf = ["Aneeba", 25, true]
// console.log(mySelf[0])
// console.log(mySelf[1])
// console.log(mySelf[2])
// Push the newMessage to the messages array, and then log out the array

// let messages = [
//         "Hey, how's it going?",        
//         "I'm great, thank you! How about you?",
//         "All good. Been working on my portfolio lately."
//     ]
    
//     let newMessage = "Same here!"
//     messages.push(newMessage)
//     console.log(messages)
    
//     // How can you remove the last item in an array? Try to google it!
//     messages.pop()
//     console.log(messages)

// Count to ten!

// We need to specify...

// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?
//for loop example
//    START           FINISH       STEP SIZE
// for ( let count = 1;  count < 18;  count += 2 )  {
    
//         console.log(count)
    
//     }

// Create a for loop that counts from 10 to 100 in steps of 10
// Use console.log to log out the numbers
// for(let i = 10; i < 101; i += 10){
//         console.log(i)
// }

// let messages = [
//         "Hey, how's it going?",        
//         "I'm great, thank you! How about you?",
//         "All good. Been working on my portfolio lately.",
//         "Same here!",
//         "Great to hear!"
//     ]
    // DRY - Don't repeat yourself
//     console.log(messages[0])
//     console.log(messages[1])
//     console.log(messages[2])
//     console.log(messages[3])

// for (let i = 0; i < messages.length; i ++){
//         console.log(messages[i])
// }

// let cards = [7, 3, 9]

// Create a for loop that logs out all the cards in the array
// Use cards.length to specify how long the loop should run

// for(let i = 0; i < cards.length; i ++){
//         console.log(cards[i])
// } 

// let sentence = ["Hello", "my", "name", "is", "Aneeba"] 
// let greetingEl = document.getElementById("greeting-el")

// // Render the sentence in the greetingEl paragraph using a for loop and .textContent
// for(let i = 0; i < sentence.length; i++){
//         greetingEl.textContent += sentence[i] + " ";
// }

// let player1Time = 102;
// let player2Time = 107;


// function getFastestRaceTime() {
//         if(player1Time < player2Time){
//                 return player1Time;
//         }else if(player2Time < player1Time){
//                 return player2Time
//         }else{
//                 return player1Time
//         }
// }

// Write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out
// function FastestRace() {
//         return player1Time + player2Time
// }

// let totalTime = FastestRace()
// console.log(totalTime);

/* 

What does Math.random() do?

Your answer: it generates a random number between 0 and 1 (not inclusive of 1)

*/

// let randomNumber = Math.random() * 6

// let flooredNumber = Math.floor(3.45632)

// console.log(flooredNumber)


/* 

What does Math.floor() do to positive numbers?

Your answer: 

*/

// let randomNumber = Math.floor( Math.random() * 6 + 1 )

// console.log(randomNumber)

// Create a function, rollDice(), that returns a random number between 1 and 6

// function rollDice() {
//         let randomNumber = Math.floor( Math.random() * 6 ) + 1;
//         return randomNumber;
// }

// console.log(rollDice());

// let hasCompletedCourse = true
// let givesCertificate = true

// if (hasCompletedCourse === true) {
//     if (givesCertificate === true) {
//         generateCertificate()
//     }
// }

// function generateCertificate() {
//     console.log("Generating certificate....")
//}

// let hasCompletedCourse = false
// let givesCertificate = true

// if (hasCompletedCourse === true && givesCertificate === true) {
//     generateCertificate()
// }

// function generateCertificate() {
//     console.log("Generating certificate....")
// }

// let hasSolvedChallenge = false
// let hasHintsLeft = false

// // Create an if statement that checks that both variables are false.
// // If so, run the showSolution() function
// if (hasSolvedChallenge === false && hasHintsLeft === false) {
//         showSolution()
//          }
// function showSolution() {
//     console.log("Showing the solution....")
// }

// Create two boolean variables, likesDocumentaries and likesStartups
// Use an OR statement (||) to call recommendMovie() if either of those variables are true
// let likesDocumentaries = true;
// let likesStartups = false;

// if(likesDocumentaries === true || likesStartups === true){
//         recommendMovie();
// }


// function recommendMovie() {
//         console.log("Hey, check out this new film we think you will like!")
// }

// Objects - store data in-depth - composite / complex data type
// key-value pairs

// let course = {
//     title: "learn css grid for free",
//     lessons: "16 lessons",
//     creator: "Aneeba moezz",
//     level: "intermediate",
//     length: "1 hour",
//     tags: ["html", "css"]
// }

// console.log(course.length)

// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation


// let castle = {
//         title: "Live like a king in my castle",
//         price: 190,
//         isSuperHost: true,
//         images: ["img/castle1.png", "img/caste2.png"]
//     }
    
//     console.log(castle.price)
//     console.log(castle.isSuperHost)

/*******object and function******/
/*
let mySelf = {
    name: "Aneeba",
    age: 25,
    country: "Pakistan"
}

function logData() {
    console.log(mySelf.name  + " is " + mySelf.age + " years old and lives in " + mySelf.country)
}
logData();*/

/******if / else if / else*******/

/*let age = 17;

if(age < 6) {
    console.log("free");
}else if(age < 18){
    console.log("child discount")
}else if(age < 27) {
    console.log("student discount")
}else if(age < 67){
    console.log("full price")
}else{
    console.log("senior citizen discount")
}*/

/*******loops and array*********/

/*let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

let country = document.getElementById("countries")

for (let i = 0; i < largeCountries.length; i++){
    console.log(("- " + largeCountries[i]));
}*/

/***Use push() & pop() and their counterparts unshift() & shift() */

//let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// 
// Google how to use unshift() and shift()

// largeCountries.pop() // remove end pakistan
// largeCountries.push("Pakistan") // add pakistan
// largeCountries.shift() //remove start
// largeCountries.unshift("china") // add start
// //console.lod ["China", "India", "USA", "Indonesia", "Pakistan"] largest country in the world
// console.log(largeCountries);

/*******&& operator*********/

/*let dayOfMonth = 13
let weekday = "Friday"

if (dayOfMonth === 13/*true*/ //&& weekday === "Friday"/*true*/){//&& operator are execute when both conditions are same 
    //console.log("😱")
//}
/********Create a function that returns a random item from the array*/

/*let hands = ["rock", "paper", "scissor"]

function getHand() {
    let randomindex = Math.floor(Math.random() * 3)
    return hands[randomindex];
}

console.log(getHand());*/