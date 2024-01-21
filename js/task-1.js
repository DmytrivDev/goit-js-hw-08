const categoriesList = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(element => {
    const catName = element.querySelector('h2').textContent;
    const subCategoryCount = element.querySelectorAll('li').length;

    console.log(`Category: ${catName}`);
    console.log(`Elements: ${subCategoryCount}`);
});