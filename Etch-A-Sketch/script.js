const body = document.querySelector("#main"); 

let size = Number(prompt("Enter grid size: ")); 
for(let i = 0; i < size; i++){
    for(let j = 0; j< size; j++){
        const gridboxes = document.createElement('div'); 
        gridboxes.style.display = "grid"; 
        /* let randomColor = Math.floor(Math.random()*16777215).toString(16);
        gridboxes.style.backgroundColor = randomColor;  */
        gridboxes.setAttribute('class', 'grid');
        body.appendChild(gridboxes);
    }   
}