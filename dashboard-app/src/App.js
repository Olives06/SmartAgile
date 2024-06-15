import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import AdminLogin from './components/AdminLogin';
import EmpLogin from './components/EmpLogin';
import AboutUs from './components/AboutUs';
import EmployeeDashboard from './components/EmployeeDBComponent/EmployeeDashboard';
import GroupDashboard from './components/GroupDBComponent/GroupDashboard';
import SprintDashboard from './components/SprintDBComponents/SprintDashboard';
//import EmployeeProfiles from './components/EmployeeProfiles';
import Register from './components/register';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/loging" element={<AdminLogin />} />
      <Route path="/emplogin" element={<EmpLogin />} />
      <Route path="/register" element={<Register />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
      <Route path="/group/dashboard" element={<GroupDashboard />} />
      <Route path="/admin/sprint-dashboard" element={<SprintDashboard />} />
      {/*<Route path="/admin/employee-profiles" element={<EmployeeProfiles />} />*/}
    </Routes>
  );
}

export default App;
