import {useContext} from 'react';
import {AuthContext} from '../App';

const MainPage = () => {
    const { setIsAuth } = useContext(AuthContext);

    const handleLogout = () => {
        setIsAuth(false);
        localStorage.removeItem('TOKEN');
    };

    return (
        <>
            <h1>Main Page</h1>
            <button type='button' onClick={handleLogout}>Logout</button>
        </>
    )
};

export default MainPage;
