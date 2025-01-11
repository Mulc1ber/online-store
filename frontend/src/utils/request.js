export function request(url, method, data) {
    return fetch(url, {
        method: method || 'GET',
        headers: {
            'content-type': 'application/json', //;charset=UTF-8
        },
        body: data ? JSON.stringify(data) : undefined,
    }).then((res) => res.json());
}
