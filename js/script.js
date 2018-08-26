/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate
const studentNames= document.getElementsByClassName('student-item cf');
const studentItems = studentNames.children;
const page = document.querySelector('.page');
const header = document.querySelector('.page-header');
const pages = Math.ceil(studentNames.length/10);
const newDiv = document.createElement('div');
const a = document.createElement('a');
// Create a function to hide all of the items in the list excpet for the ten you want to show
// // Tip: Keep in mind that with a list of 54 studetns, the last page will only display four


const showTenStudents= (page, students) => {
    let max = (page+1) * 10;
    let min = max - 10;
    for (let i=0; i < students.length; i ++) {
        if (i >= min && i < max){
            students[i].style.display = 'block';
        } else {
            students[i].style.display = 'none';
        }
    }
}

showTenStudents(0,studentNames);

// // Create and append the pagination links - Creating a function that can do this is a good approach
const pagination = () => {
    newDiv.className = ('pagination');
    const ul = document.createElement('ul');
    page.appendChild(newDiv);
    newDiv.appendChild(ul);
    for (let i = 1; i <= pages; i++) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        ul.appendChild(li);
        li.appendChild(a);
        a.textContent = i;  
        a.href = "#"; 
    } 
}
pagination();

// // Add functionality to the pagination bnumuttons so that they show and hide the correct items
// // Tip: If you created a function above to show/hide list items, it could be helpful here
let pageNumber = 1;
newDiv.addEventListener('click', (e) => {
    let pageNumber = document.getElementsByTagName('a').textContent;
    
    // for (i=0; i<pageNumber.length; i++) {
    //     e.target.className = 'active';
    //     pageNumber[i].className = '';
    // }

    if (e.target.tagName = 'a') {
        e.target.className = 'active';
        pageNumber = e.target.textContent;
        showTenStudents(pageNumber, studentNames);
    } 
    
    // } else {

    // }
}); 
    // const pageNumberClicked = event.target;
    
    
        
    // }
    // if (pageNumberClicked) {
    //    pageNumber.className = 'active';
    //     showTenStudents (i, studentNames);
    // }
    // else {
    //     pageNumber.className = '';
    // }
     