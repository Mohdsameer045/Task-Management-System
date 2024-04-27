import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
//import Error_404 from "./components/404/Error_404";

import './App.css';
import Header from './components/header/Header';
import Signin from './components/registration/Signin';
import Signup from './components/registration/Signup';
import './styles/main.scss';
import Home from './pages/home/Home';
import TaskManager from './pages/taskmanagement/TaskManager';
import Dashboard from './pages/dashboard/Dashboard';
import Calender from './pages/calender/Calendar';
import RequireAuth from './utils/RequireAuth';
import TaskAnalytics from './pages/TaskAnalytics/TaskAnalytics';
import Tim from './pages/Timeline/Timeline';
import Show from './pages/show';
//import Feed from './pages/feedback';

function App() {
  const { auth } = useSelector((state) => ({ ...state }));

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/signin"
            element={!auth.currentUser ? <Signin /> : <Dashboard />}
          />
          <Route
            path="/signup"
            element={!auth.currentUser ? <Signup /> : <Dashboard />}
          />
          <Route
            path="/taskmanager"
            element={
              <RequireAuth>
                <TaskManager />
              </RequireAuth>
            }
          />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
            <Route path="/calender" element={<Calender/>} />   
            <Route path="/TaskAnalytics" element={<TaskAnalytics/>} /> 
            <Route path="/Timeline" element={<Tim/>} /> 
            <Route path="/Show" element={<Show/>} />
           
            
                </Routes>
      </Router>
    </div> 
  );
}

export default App;
