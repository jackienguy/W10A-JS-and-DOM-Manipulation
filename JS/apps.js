// quetySelector
document.querySelector('h1').style.textDecoration = 'underline';

// querySelectorAll
var allPTags = document.querySelectorAll('p');
for (var i = 0; i < allPTags.length; i++) {
    allPTags[i].style.fontStyle = 'italic';
}

// getElementByID
document.getElementById('specialParagraph').style.fontWeight = 'bold';
document.getElementById('specialParagraph').innerText = 'I like to think I am special';

// getElementByClassName
var headerTwo = document.getElementsByClassName('headingTwo');
for (var i = 0; i < headerTwo.length; i++) {
    headerTwo[i].innerHTML = "This is section #"+[i+1];
    headerTwo[i].style.color = 'blue';
}

// getElementsByTagName
function changeText() {
    document.getElementsByTagName('p')[1].innerHTML = "I changed!";
}

// createElement
var newDiv = document.createElement('div');
var newButton = document.createElement('button');
newButton.innerHTML = 'Click';

newDiv.appendChild(newButton);

document.body.appendChild(newDiv);

// classList add, remove, toggle
var list = document.querySelector('div ul');
list.classList.add('colors');

document.getElementById('divID1').classList.remove('anotherClass');

function bkgdColorChange() {
    var change = document.getElementById('divID2');
    change.classList.toggle('.toggle');
}








