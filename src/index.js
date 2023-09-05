// const element = `<h1 class=header>
// This thing had better work...
// </h1>`

const element = document.createElement('h1');
element.innerText = 'yaddy yaddy yaddy'
//element.textContent = 'something something'

const mother = document.getElementById('root');

// mother.appendChild(element); 


const object = {
    personName :"Fortunate",
    Age: 31,
    id:1,
    amount: 3000,
    male: true
}

const ul = document.createElement('ul');

for(let key in object){
    let li = document.createElement('li');
    li.textContent = `${key}: ${object[key]}`;
    ul.appendChild(li);
}

mother.appendChild(ul);

//mother.appendChild(JSON.stringify(object));

console.log(object);