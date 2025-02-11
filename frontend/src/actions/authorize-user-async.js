import { request } from '../utils';
import { setUser } from './set-user';

export const authorizeUserAsync = (login, password) => (dispatch) => {
    return request('/api/login', 'POST', { login, password })
        .then((response) => {
            if (response.error) {
                throw new Error(response.error);
            }

            dispatch(setUser(response.user));
            sessionStorage.setItem('userData', JSON.stringify(response.user));
        })
        .catch((error) => {
            throw new Error(error.message);
        });
};
