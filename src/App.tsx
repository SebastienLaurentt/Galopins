import { Route, Routes } from 'react-router';

import MainPage from "./sections/MainPage";
import Login from './sections/Login';
import Account from './sections/Account';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/account" element={<Account/>} />
      </Routes>
      
    </div>
  )
}

export default App;
