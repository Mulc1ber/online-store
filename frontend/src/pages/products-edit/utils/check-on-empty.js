export const checkOnEmpty = (data) => {
    const values = Object.values(data);

    return values.some((value) => (value === '' ? true : false));
};
