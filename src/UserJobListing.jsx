import React, { useEffect, useState } from "react";
import axios from "axios";
import { CheckCircle, XCircle } from "lucide-react";

const UserJobListing = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [userData, setUserData] = useState({ name: "", email: "", resume: "" });

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await axios.get("https://job-backend-spwb.onrender.com/api/jobs");
      setJobs(res.data.data);
      setLoading(false);
    } catch (error) {
      setMessage({ type: "error", text: "Error fetching jobs!" });
      setLoading(false);
    }
  };

  const handleApply = async (e) => {
    e.preventDefault();
    if (!selectedJob) return;

    try {
      await axios.post(`https://job-backend-spwb.onrender.com/api/jobs/${selectedJob._id}/apply`, userData);
      setMessage({ type: "success", text: "Application submitted successfully!" });
      setShowApplyModal(false);
      setUserData({ name: "", email: "", resume: "" });
    } catch (error) {
      setMessage({ type: "error", text: "Error submitting application!" });
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Available Jobs</h1>

        {/* Success / Error Message */}
        {message.text && (
          <div
            className={`flex items-center p-4 rounded-md shadow-md mb-4 ${
              message.type === "success"
                ? "bg-green-100 border-green-500 text-green-700"
                : "bg-red-100 border-red-500 text-red-700"
            } border-l-4`}
          >
            {message.type === "success" ? <CheckCircle className="w-5 h-5 mr-2" /> : <XCircle className="w-5 h-5 mr-2" />}
            <span>{message.text}</span>
          </div>
        )}

        {loading ? (
          <p className="text-center text-gray-600">Loading jobs...</p>
        ) : jobs.length === 0 ? (
          <p className="text-center text-gray-600">No jobs available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobs.map((job) => (
              <div key={job._id} className="bg-white p-4 rounded-lg shadow-md border">
                <h2 className="text-lg font-bold">{job.title}</h2>
                <p className="text-gray-600">{job.department}</p>
                <p className="text-gray-600">{job.location}</p>
                <p className="text-gray-600">{job.type}</p>
                <p className="text-gray-600">{job.salary || "N/A"}</p>
           
              </div>
            ))}
          </div>
        )}

      
      </div>
    </div>
  );
};

export default UserJobListing;
