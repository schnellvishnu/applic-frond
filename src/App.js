import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Components/Pages/LoginPages/Login';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import InspectionDashbord from './Components/Pages/Inspections/InspectionDashbord';
import Printer from './Components/Pages/PrinterJobs/Printer';
import PrinterView from './Components/Pages/PrinterJobs/PrinterView';
import Changepass from './Components/Pages/Changepassword/Changepass';
import ReportDash from './Components/Pages/Reports/ReportDash';
import Productionreportcheck from './Components/Pages/Reports/Productionreportcheck';
import ScannerLoginCheck from './Components/Pages/ScannerJobs/ScannerLoginCheck';
import websocket from './Components/websocket';
function App() {
  return (
    <Router>
     
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/inspectiondashboard" element={<InspectionDashbord />} />
      <Route path="/printer" element={<Printer/>} />
      <Route path="/printerpool/:operation/:uniqueID" element={<PrinterView />} />
      <Route path="/changepass" element={<Changepass />} />
      <Route path="/reportdash" element={<ReportDash />} />
      <Route path="/productionreport" element={<Productionreportcheck />} />
      <Route path="/scannerjobs" element={<ScannerLoginCheck />} />
      <Route path="/websocket" element={<websocket />} />
      </Routes>
      </Router>
  );
}

export default App;
