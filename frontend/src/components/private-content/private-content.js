import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Error } from '../error/error';
import { selectUserRole } from '../../selectors';
import { ERROR, PRIVATE_PATH, PROP_TYPE } from '../../constants';
import { checkAccess } from '../../utils';

export const PrivateContent = ({
    children,
    access,
    serverError = null,
    hasProductsInCart = null,
    orderProducts = null,
    currentPage,
}) => {
    const userRole = useSelector(selectUserRole);
    let accessError;
    let cartError;

    switch (currentPage) {
        case PRIVATE_PATH.ADMIN:
            accessError = checkAccess(access, userRole) ? null : ERROR.ACCESS_DENIED;
            break;

        case PRIVATE_PATH.CHECKOUT:
            accessError = checkAccess(access, userRole) ? null : ERROR.ACCESS_DENIED;
            cartError =
                hasProductsInCart && hasProductsInCart?.length > 0 ? null : ERROR.CART_IS_EMPTY;
            break;

        case PRIVATE_PATH.ORDER:
            accessError = checkAccess(access, userRole) ? null : ERROR.ACCESS_DENIED;
            cartError = orderProducts && orderProducts?.length > 0 ? null : ERROR.ORDER_NOT_FOUND;
            break;

        case PRIVATE_PATH.ACCOUNT:
            accessError = checkAccess(access, userRole) ? null : ERROR.ACCESS_DENIED;
            break;

        default:
            break;
    }

    const error = serverError || accessError || cartError;

    return error ? <Error error={error} /> : children;
};

PrivateContent.propTypes = {
    children: PropTypes.node.isRequired,
    access: PropTypes.arrayOf(PROP_TYPE.ROLE_ID).isRequired,
    serverError: PROP_TYPE.ERROR,
    hasProductsInCart: PropTypes.arrayOf(PROP_TYPE.PRODUCTS),
    orderProducts: PropTypes.arrayOf(PROP_TYPE.ORDER_PRODUCTS),
    currentPage: PropTypes.string.isRequired,
};
