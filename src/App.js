import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Components/Pages/LoginPages/Login';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
// import InspectionDashbord from './Components/Pages/Inspections/InspectionDashbord';
import Inspection from './Components/Pages/Inspections/Inspection';
import PrinterJobs from './Components/Pages/PrinterJobs/PrinterJobs';
import PrinterView from './Components/Pages/PrinterJobs/PrinterView';
import Changepass from './Components/Pages/Changepassword/Changepass';
import ApplicationReports from './Components/Pages/Reports/ApplicationReports';
import Productionreport from './Components/Pages/Reports/Productionreport';
import Scanner from './Components/Pages/ScannerJobs/Scanner';
import websocket from './Components/websocket';
import AuditReport from './Components/Pages/Auditreport/Auditreport';
import ShippingReportPage from './Components/Pages/ShippingReport/ShippingReportPage';
import ApplicationHistory from './Components/Pages/History/ApplicationHistory';
import Rework from './Components/Pages/Rework/Rework';
import ManualUpload from './Components/Pages/ManualUpload/ManualUpload';
import Backup from './Components/Pages/Backup/Backup';
import ScannerRework from './Components/Pages/ScannerJobs/ScannerRework';
import Profile from './Components/Pages/Profile/Profile';
import Information from './Components/Pages/Information/Information';
import Demo from './Components/Pages/Demo';
function App() {
  return (
    <Router>
     
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/inspection" element={<Inspection />} />
      <Route path="/printer" element={<PrinterJobs/>} />
      <Route path="/printerpool/:operation/:uniqueID" element={<PrinterView />} />
      <Route path="/changepass" element={<Changepass />} />
      <Route path="/reportdash" element={<ApplicationReports />} />
      <Route path="/productionreport" element={<Productionreport />} />
      <Route path="/scanner" element={<Scanner />} />
      <Route path="/rework" element={<Rework/>} />
      <Route path="/auditreport" element={<AuditReport />} />
      <Route path="/history" element={<ApplicationHistory />} />
      <Route path="/manualupload" element={<ManualUpload />} />
      <Route path="/backup" element={<Backup/>} />
      <Route path="/shippingreport" element={<ShippingReportPage />} />
      <Route path="/websocket" element={<websocket />} />
      <Route path="/scannerrework/:serialno/:uniqueID" element={<ScannerRework />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/information" element={<Information />} />
      <Route path="/demo" element={<Demo />} />
      </Routes>
      </Router>
  );
}

export default App;
