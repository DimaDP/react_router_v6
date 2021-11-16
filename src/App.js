import './App.css';
import MainRouter from './routes/MainRouter';
import {createContext, useState} from 'react';

export const AuthContext = createContext(null);

function App() {
    const [isAuth, setIsAuth] = useState(false);
  return (
      <AuthContext.Provider value={{ isAuth, setIsAuth }}>
          <div className="App">
              <h1>You are {isAuth ? 'Logged in' : 'logged out'} </h1>
              <MainRouter />
          </div>
      </AuthContext.Provider>
  );
}

export default App;
