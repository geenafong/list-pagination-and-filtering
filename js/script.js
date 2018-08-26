/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate
//variable with all 54 students included
const studentNames= document.getElementsByClassName('student-item cf');
//variables that recognizes the page/page header
const page = document.querySelector('.page');
const header = document.querySelector('.page-header');
//variable that segments students by 10
const pages = Math.ceil(studentNames.length/10);
//creates the variables to be used for pagination
const newDiv = document.createElement('div');
const a = document.createElement('a');

// Create a function to hide all of the items in the list excpet for the ten you want to show
// // Tip: Keep in mind that with a list of 54 studetns, the last page will only display four

//function using the parameters page and students
const showTenStudents= (page, students) => {
//variable to set the min and max amount of pages 
    let max = (page+1) * 10;
    let min = max - 10;
//loop to only allow 10 students on the page 
    for (let i=0; i < students.length; i ++) {
        if (i >= min && i < max){
//shows the 10 students
            students[i].style.display = 'block';
//blocks all other students
        } else {
            students[i].style.display = 'none';
        }
    }
}

//function that shows the first page of student names
showTenStudents(0,studentNames);

// // Create and append the pagination links - Creating a function that can do this is a good approach
const pagination = () => {
//creates a new class in order to add the page numbers, this is the new div
    newDiv.className = ('pagination');
//appends the ul and new div on page
    const ul = document.createElement('ul');
    page.appendChild(newDiv);
    newDiv.appendChild(ul);
//loop that adds the appropriate amount of anchor tags based on the number of pages
    for (let i = 1; i <= pages; i++) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        ul.appendChild(li);
        li.appendChild(a);
//sets the anchor tag's text content equal to the page number
        a.textContent = i;  
        a.href = "#"; 
    } 
}
pagination();

// // Add functionality to the pagination bnumuttons so that they show and hide the correct items
// // Tip: If you created a function above to show/hide list items, it could be helpful here

newDiv.addEventListener('click', (e) => {
// creates a variable that brings up all anchor tags and its page number
    let pageNumber = document.getElementsByTagName('a').textContent;
//makes the anchor tags active when clicked by using an event listener
    if (e.target.tagName = 'a') {
        e.target.className = 'active';
        pageNumber = e.target.textContent;
        showTenStudents(pageNumber, studentNames);
    } 
}); 
    

 // for (i=0; i<pageNumber.length; i++) {
    //     e.target.className = 'active';
    //     pageNumber[i].className = '';
    // }