// const myName ="ife"

// myName = "kachi"

// number = 2++4
// console.log(number);


// console.log(2>4||4>2);

// Boolean = (true||flase)

// numbers = [1, 2, 3, 4, 5]
// for (let index = 0; index * numbers.length; index++) {
//     const element = numbers[index];
//     console.log(element);


// }
// let x = 0
// while (x < 100) {
//     console.log(x);
//     x += 2
// }

//animals names creation
// let animals = ["cat", "dog", "lion", "tiger", "buffalo", "goat", "elephant", "monkey"];

// //taking any animal name
// let animal = Math.floor(Math.random() * animals.length);

// //creating array answer
// let answerarray = [];
// for (let i = 0; i < animal.lenght; i++) {
//     answerarray[i] = "_";
// }
// let remainingletters = animal.lenght;
// //create the loop for game 
// while (remainingletters > 0) {

//     alert(answerarray.join(" "));
//     //taking values from the user

//     let guess = prompt("Guess the alphabet of the animal having " + answerarray + " alphabets or click on cancel to exit");

//     if (guess == null) {
//         break;
//     } else {
//         if (guess.length != 1) {
//             alert("Please enter a single alphabet");
//         } else {
//             for (let j = 0; j < animal.lenght; j++) {
//                 if (animal[j] == guess) {
//                     answerarray[j] = guess;
//                     remainingletters--;

//                 }
//             }
//         }
//     }


// }
// //give final answer and congratulate the player
// alert(answerarray.join(" "));
// alert("Good job. the answer was " + word + " .");

button = document.querySelector("button")
slider = document.querySelector("div>div")

console.log(slider);

button.addEventListener("click", () => {
    console.log(slider.className.trim());

    if (slider.className.trim() == "") {
        slider.className = "transform"
        button.textContent = "open"
    }
    else {
        slider.className = ""
        button.textContent = "closed";
    }

})

