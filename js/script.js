/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate
const studentNames= document.getElementsByClassName('student-item cf');
const page = document.querySelector('.page');
const header = document.querySelector('.page-header');
const totalStudents = studentNames.length;
const pages = Math.ceil(studentNames.length/10);


// Create a function to hide all of the items in the list excpet for the ten you want to show
// // Tip: Keep in mind that with a list of 54 studetns, the last page will only display four


const showTenStudents= (page, studentNames) => {
    let max = (page+1) * 10;
    let min = max - 10;
    for (let i=0; i < studentNames.length; i ++) {
        if (i >= min && i < max){
            studentNames[i].style.display = 'block';
        } else {
            studentNames[i].style.display = 'none';
        }
    }
}
showTenStudents(0,studentNames);

// // Create and append the pagination links - Creating a function that can do this is a good approach
const pagination = (pageNumber) => {
    const newDiv = document.createElement('div');
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
pagination(pageNumber);

// // Add functionality to the pagination bnumuttons so that they show and hide the correct items
// // Tip: If you created a function above to show/hide list items, it could be helpful here
// newDiv.addEventListener('click', () => {
//      if (showTenStudents == 'none'){
//      newDiv.textContent = 'Hide list';
//      a.className.style.display = 'block';
//     } else {
//         newDiv.textContent = 'Show list';
//         a.className.style.display = 'none';
//     }
//  }
