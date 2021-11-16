import {Navigate} from 'react-router-dom';

const PrivateRoute = ({ children, isAuth }) => (
    isAuth ? children : <Navigate to='/login' />
);

export default PrivateRoute;
