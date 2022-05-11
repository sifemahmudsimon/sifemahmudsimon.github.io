let cartlist = document.querySelector('ol');
let burger = document.querySelector('#burger');
let subway = document.querySelector('#subway');
let nachos = document.querySelector('#nachos');
let fries = document.querySelector('#french_fries');


burger = document.addEventListener('click', additem);
subway = document.addEventListener('click', additem);
nachos = document.addEventListener('click', additem);
fries = document.addEventListener('click', additem);


cartlist.addEventListener('click',removeitem);

function additem(event) {

    //target=event.target;

    if (event.target.hasAttribute('id')) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(`${event.target.parentNode.parentNode.firstElementChild.firstElementChild.innerHTML + " "}`));
        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerHTML = 'x';
        li.appendChild(link);
        cartlist.appendChild(li);
    }
}

function removeitem(event){
    if(event.target.hasAttribute('href'))
    {
        if (confirm(`Please Confirm to remove`))
        {
            let element=event.target.parentNode;
            element.remove();
        }     
              
    }
    
}

