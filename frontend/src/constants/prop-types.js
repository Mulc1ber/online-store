import PropTypes from 'prop-types';
import { ROLE } from './role';

const ROLE_ID = PropTypes.oneOf(Object.values(ROLE));

export const PROP_TYPE = {
    ROLE_ID,
    ROLE: PropTypes.shape({
        id: ROLE_ID,
        name: PropTypes.string.isRequired,
    }),
    ERROR: PropTypes.oneOfType([PropTypes.string, PropTypes.exact(null)]),
    PRODUCTS: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        category: PropTypes.shape({
            label: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }).isRequired,
        imageUrl: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        specifications: PropTypes.string.isRequired,
        shipping: PropTypes.string.isRequired,
        stock: PropTypes.number.isRequired,
    }),
    CATEGORIES: PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }),
};
