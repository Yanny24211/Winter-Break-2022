const container = document.querySelector('#container');

const content = document.createElement('p'); 
content.style.color = 'red';
content.textContent = "Hey I'm red!";
container.appendChild(content);

const head3 = document.createElement('h3'); 
head3.style.color = 'blue'; 
head3.textContent = "I'm a blue h3!"; 
container.appendChild(head3); 

const div0 = document.createElement('div'); 
div0.classList.add('first-div')
div0.style.border = '2px solid black'; 
div0.style.backgroundColor = 'pink'; 
container.appendChild(div0);
const container2 = document.querySelector('.first-div'); 

const head1 = document.createElement('h1'); 
head1.textContent = "I'm in a div"; 
container2.appendChild(head1); 

const paragraph2 = document.createElement('p'); 
paragraph2.textContent = "ME TOO!"; 
container2.appendChild(paragraph2); 

const btn = document.querySelector("#btn"); 
btn.onclick = () => alert("Hello World"); 
/* (Method 1 for Event Listening Elements) */

const btn2 = document.querySelector("#btn2"); 
btn2.addEventListener('click', () =>{
    alert("Hello World"); 
    const html = document.querySelector("html"); 
    let randomColor = Math.floor(Math.random()*16777215).toString(16); 
    html.style.backgroundColor = randomColor;
}); 
/* (Method 2 for Event Listening Elements) */