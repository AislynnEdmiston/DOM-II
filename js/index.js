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
 
//  sign up click event 1
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

// nav mouseenter event 2

const nav = document.querySelectorAll('nav a');

nav.forEach(event => event.addEventListener('mouseenter', () => event.style.color = 'blue'));

// headers mouseover event 3

const headers = document.querySelectorAll('h2');
headers.forEach(event => event.addEventListener('mouseover', () => event.style.color = 'orange'));

// p mouseleave event 4

const para = document.querySelectorAll('p');
para.forEach(e => e.addEventListener('mouseleave', () => e.style.color = 'purple'));

//  h4 mousedown event 5

const h4 = document.querySelectorAll('h4');
h4.forEach(e => e.addEventListener('mousedown', () => e.style.color = 'green'));

// img dblclick event 6

const img = document.querySelectorAll('img');
console.log(img);
img.forEach(e => e.addEventListener('dblclick', () => e.style.border = '6px solid red'));

