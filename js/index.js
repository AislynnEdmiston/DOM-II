// Your code goes here

//Event Listeners
/*  
 mouseover
 keydown
 pointer
 drag / drop
 load
 focus
 resize
 scroll
 select
 dblclick */

//  sign up
const signUpBtn = document.querySelectorAll(".btn");

function signUp(){
    prompt("Please enter your name here:", "Name");
    if (confirm){
        alert("Thank you for signing up!");
    }
};

signUpBtn.forEach(function(element){
    element.addEventListener("click", signUp);
});

// nav

const nav = document.querySelectorAll('nav a');

nav.forEach(event => event.addEventListener('mouseenter', () => event.style.color = 'blue'));