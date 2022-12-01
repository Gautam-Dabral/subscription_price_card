// when the button is clicked an alert is shown to the user 

let btn = document.querySelectorAll('button');
// return a node list containing all buttons in the document
btn[0].addEventListener('click', () => {
    alert('You clicked the sign up button!');
});