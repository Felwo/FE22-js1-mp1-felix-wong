/*Första del*/
const body = document.body;
let rowCounter = 4;

for (let i = 0; i <= rowCounter; i++) {
    let headers = document.createElement('p');
    body.appendChild(headers);
    headers.innerText = `Rad ${i + 1}`;
    headers.style.textAlign = 'center';
    headers.style.color = 'blue';
    headers.style.backgroundColor = `hsl(${20 + i * 20}, 100%, 50%)`;
    headers.style.fontSize = (i * 5 + 10) + 'px';
}

/*Andra Del*/
const box = document.createElement('section');
body.appendChild(box);
box.style.border = '2px solid black';
box.style.display = 'flex';
box.style.justifyContent = 'space-evenly';

const list1 = document.createElement('ul');
const list2 = document.createElement('ul');
const list3 = document.createElement('ul');

for (let i = 0; i <= 9; i++) {
    const listItem = document.createElement('li');
    box.appendChild(list1);
    list1.appendChild(listItem);    
    listItem.innerText = i;
    list1.style.backgroundColor = 'teal';
    listItem.style.listStyle = 'none';
    listItem.style.width = '60px'
    list1.style.padding = '10px';
    listItem.style.textAlign = 'left';
    if(i % 2 === 0){
        listItem.style.backgroundColor = 'black';
        listItem.style.color = 'white';
    }
    else{
        listItem.style.backgroundColor = 'white'
    }
    i === 4 ? listItem.style.backgroundColor = 'transparent': null;
}

for (let i = 9; i >= 0; i--) {
    const listItem = document.createElement('li');
    box.appendChild(list2);
    list2.appendChild(listItem);    
    listItem.innerText = i;
    list2.style.backgroundColor = 'teal';
    listItem.style.listStyle = 'none';
    listItem.style.width = '60px'
    list2.style.padding = '10px';
    listItem.style.textAlign = 'center';
    if(i % 2 === 0){
        listItem.style.backgroundColor = 'black';
        listItem.style.color = 'white';
    }
    else{
        listItem.style.backgroundColor = 'white'
    }
    i === 8 ? listItem.style.backgroundColor = 'transparent': null;
}

const numbers = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];
for (let i = 0; i <= 9; i++) {
    const listItem = document.createElement('li');
    box.appendChild(list3);
    list3.appendChild(listItem);    
    listItem.innerText = numbers[i];
    list3.style.backgroundColor = 'teal';
    listItem.style.listStyle = 'none';
    listItem.style.width = '60px'
    list3.style.padding = '10px';
    listItem.style.textAlign = 'right';
    if(i % 2 === 0){
        listItem.style.backgroundColor = 'black';
        listItem.style.color = 'white';
    }
    else{
        listItem.style.backgroundColor = 'white'
    }
    i === 5 ? listItem.style.backgroundColor = 'transparent': null;
}
