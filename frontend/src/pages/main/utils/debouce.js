export const debounce = (fn, delay) => {
    let timeoutId;

    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(fn, delay, ...args);
        // аналогична коду ниже:
        // setTimeout(() => fn(), delay);
    };
};
