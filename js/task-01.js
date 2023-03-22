 
// Nuber of categories

const numberOfCategories = categories.children.length;
const logMessage = `Number of categories: ${numberOfCategories}`;
console.log(logMessage);
    
 
// Name + number of elements in categorie

const categoriesItems = document.querySelectorAll(`.item`);
categoriesItems.forEach((element)=>{
    const categorieName = element.firstElementChild.textContent;
    const numberOfElements = element.firstElementChild.nextElementSibling.children.length;
    const logElementProp = `Category: ${categorieName}, Elements: ${numberOfElements}`;
    console.log(logElementProp);
});


 
