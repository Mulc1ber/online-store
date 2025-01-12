export const sanitizeOrderDate = (date) => {
    const newDate = new Date(date);
    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    };
    return newDate.toLocaleDateString('ru-RU', options);
};
