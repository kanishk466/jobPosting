import React from 'react'
import JobPostForm from './JobPostForm'
import ApplicationsView from './ApplicationsView'
import Navbar from './Navbar'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import JobManagementTable from './JobManagementTable'
import UserJobListing from './UserJobListing'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path="/" element={<JobPostForm />} />
      <Route path="/jobs" element={<JobManagementTable />} />
      <Route path="/jobListing" element={<UserJobListing />} />



    </Routes>
    </BrowserRouter>

  )
}

export default App