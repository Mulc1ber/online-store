export const addCategory = ({ label, name }) =>
    fetch('http://localhost:3005/categories', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify({ label, name }),
    }).then((createdCategory) => createdCategory.json());
