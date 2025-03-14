import React ,{useState , useEffect} from "react";
import JobPostForm from "./JobPostForm";
import ApplicationsView from "./ApplicationsView";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route ,Navigate } from "react-router-dom";
import JobManagementTable from "./JobManagementTable";
import UserJobListing from "./UserJobListing";
import AuthForm from "./AuthForm";


const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);


  
  // Check if user is logged in on app load
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);


  return (
   

    <BrowserRouter>
    {/* Show Navbar only when user is authenticated */}
    {isAuthenticated && <Navbar setIsAuthenticated={setIsAuthenticated} /> }

    <Routes>
      {/* Public Route (Login & Signup) */}
      <Route path="/" element={<AuthForm setIsAuthenticated={setIsAuthenticated} />} />

      {/* Private Routes (Only for logged-in users) */}
      {isAuthenticated ? (
        <>
          <Route path="/jobPost" element={<JobPostForm />} />
          <Route path="/jobs" element={<JobManagementTable />} />
          <Route path="/jobListing" element={<UserJobListing />} />
        </>
      ) : (
        // Redirect to login if user tries to access private routes
        <>
          <Route path="/jobPost" element={<Navigate to="/" />} />
          <Route path="/jobs" element={<Navigate to="/" />} />
          <Route path="/jobListing" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  </BrowserRouter>
  );
};

export default App;
