import MainPage from '../components/MainPage';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Login from '../components/Login';
import NotFound from '../components/NotFound';
import PrivateRoute from './PrivateRoute';
import {useContext} from 'react';
import {AuthContext} from '../App';
import PublicRoute from './PublicRouter';

const MainRouter = () => {
    const { isAuth } = useContext(AuthContext);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={
                    <PublicRoute isAuth={isAuth}>
                        <Login />
                    </PublicRoute>
                    }
                />
                <Route path="/main" element={
                    <PrivateRoute isAuth={isAuth}>
                      <MainPage />
                    </PrivateRoute>
                    }
                />
                <Route path="/" element={<Navigate to="/main" />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainRouter;
