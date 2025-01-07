const Category = require('../models/Category');

// add
function addCategory(category) {
    return Category.create(category);
}

// edit
async function editCategory(id, category) {
    const newCategory = await Category.findByIdAndUpdate(id, category, {
        returnDocument: 'after',
    });

    return newCategory;
}

// delete
function deleteCategory(id) {
    return Category.deleteOne({ _id: id });
}

// get list for admin panel
function getCategories() {
    return Category.find();
}

module.exports = {
    addCategory,
    editCategory,
    deleteCategory,
    getCategories,
};
