import {useContext} from 'react';
import {AuthContext} from '../App';

const Login = () => {
    const { setIsAuth } = useContext(AuthContext);

    const handleLogin = () => {
        setIsAuth(true);
        localStorage.setItem('TOKEN', 'some_key');
    };

    return (
        <>
            <h1>Login</h1>
            <button type='button' onClick={handleLogin}>Login</button>
        </>
    )
};

export default Login;
