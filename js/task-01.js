const categoriesList = document.querySelector('ul#categories');
const categoryItems = categoriesList.querySelectorAll('li.item');

// Number of categories
console.log(`Number of categories: ${categoryItems.length}`);

// Loop through each category item
categoryItems.forEach(categoryItem => {
  const categoryHeader = categoryItem.querySelector('h2').textContent;
  const categoryElements = categoryItem.querySelectorAll('li').length;

  console.log(`Category: ${categoryHeader}`);
  console.log(`Elements: ${categoryElements}`);
});