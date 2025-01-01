export const deleteCategory = (id) =>
    fetch(`http://localhost:3005/categories/${id}`, {
        method: 'DELETE',
    });
