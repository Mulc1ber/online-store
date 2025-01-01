export const updateCategory = ({ id, label, name }) =>
    fetch(`http://localhost:3005/categories/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify({
            label,
            name,
        }),
    }).then((loadedCategory) => loadedCategory.json());
