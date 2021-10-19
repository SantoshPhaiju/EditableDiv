// This is the JavaScript file in this project

let divElem = document.createElement('div');
let val = localStorage.getItem('text');
let text;
if(val == null){
 text = document.createTextNode('Click here to edit the content.');
}
else{
 text = document.createTextNode(val);
}
divElem.setAttribute('id', 'elem');
divElem.setAttribute('class', 'elem');
divElem.setAttribute('style', 'border: 2px solid blue; margin: 33px; padding: 23px; width: 234px;');


divElem.appendChild(text);
divElem.addEventListener('click', function(){
    let noTextAreas = document.getElementsByClassName('textarea').length;
    if(noTextAreas == 0){
    let html = divElem.innerHTML;
    divElem.innerHTML = `<textarea name="textarea" id="textarea" class="textarea" cols="29" rows="5">${html}</textarea>`;
    }
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur', function(){
        divElem.innerHTML = textarea.value;
        localStorage.setItem('text', textarea.value);
    })
})

let container = document.querySelector('.container');
let first = document.querySelector('#first');

container.insertBefore(divElem, first);

console.log(divElem, container, first);


