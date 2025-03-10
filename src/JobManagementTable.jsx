import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pencil, Trash2, XCircle, CheckCircle } from "lucide-react";

const JobManagementTable = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

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

  const handleDelete = async () => {
    if (!selectedJob) return;

    try {
      await axios.delete(`https://job-backend-spwb.onrender.com/api/jobs/${selectedJob._id}`);
      setJobs(jobs.filter((job) => job._id !== selectedJob._id));
      setMessage({ type: "success", text: "Job deleted successfully!" });
      setShowDeleteModal(false);
    } catch (error) {
      setMessage({ type: "error", text: "Error deleting job!" });
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    if (!selectedJob) return;

    try {
      await axios.put(`https://job-backend-spwb.onrender.com/api/jobs/${selectedJob._id}`, selectedJob);
      setJobs(jobs.map((job) => (job._id === selectedJob._id ? selectedJob : job)));
      setMessage({ type: "success", text: "Job updated successfully!" });
      setShowEditModal(false);
    } catch (error) {
      setMessage({ type: "error", text: "Error updating job!" });
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Manage Jobs</h1>

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
          <p className="text-center text-gray-600">No jobs found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
              <thead className="bg-gray-200">
                <tr>
                  <th className="py-3 px-6 text-left">Title</th>
                  <th className="py-3 px-6 text-left">Department</th>
                  <th className="py-3 px-6 text-left">Location</th>
                  <th className="py-3 px-6 text-left">Type</th>
                  <th className="py-3 px-6 text-left">Salary</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job) => (
                  <tr key={job._id} className="border-t border-gray-300">
                    <td className="py-3 px-6">{job.title}</td>
                    <td className="py-3 px-6">{job.department}</td>
                    <td className="py-3 px-6">{job.location}</td>
                    <td className="py-3 px-6">{job.type}</td>
                    <td className="py-3 px-6">{job.salary || "N/A"}</td>
                    <td className="py-3 px-6 flex justify-center space-x-4">
                      <button className="text-blue-600 hover:text-blue-800" onClick={() => {
                        setSelectedJob(job);
                        setShowEditModal(true);
                      }}>
                        <Pencil className="w-5 h-5" />
                      </button>
                      <button className="text-red-600 hover:text-red-800" onClick={() => {
                        setSelectedJob(job);
                        setShowDeleteModal(true);
                      }}>
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {showDeleteModal && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-md shadow-md">
              <h2 className="text-lg font-bold">Confirm Delete</h2>
              <p>Are you sure you want to delete this job?</p>
              <div className="flex justify-end space-x-4 mt-4">
                <button onClick={() => setShowDeleteModal(false)} className="px-4 py-2 bg-gray-300 rounded-md">Cancel</button>
                <button onClick={handleDelete} className="px-4 py-2 bg-red-500 text-white rounded-md">Delete</button>
              </div>
            </div>
          </div>
        )}

        {/* Edit Job Modal */}
        {showEditModal && selectedJob && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-md shadow-md w-96">
              <h2 className="text-lg font-bold">Edit Job</h2>
              <form onSubmit={handleEdit} className="space-y-4">
                <input type="text" placeholder="Job Title" className="w-full p-2 border rounded-md" value={selectedJob.title} onChange={(e) => setSelectedJob({ ...selectedJob, title: e.target.value })} />
                <input type="text" placeholder="Department" className="w-full p-2 border rounded-md" value={selectedJob.department} onChange={(e) => setSelectedJob({ ...selectedJob, department: e.target.value })} />
                <input type="text" placeholder="Location" className="w-full p-2 border rounded-md" value={selectedJob.location} onChange={(e) => setSelectedJob({ ...selectedJob, location: e.target.value })} />
                <input type="text" placeholder="Type" className="w-full p-2 border rounded-md" value={selectedJob.type} onChange={(e) => setSelectedJob({ ...selectedJob, type: e.target.value })} />
                <input type="text" placeholder="Salary" className="w-full p-2 border rounded-md" value={selectedJob.salary} onChange={(e) => setSelectedJob({ ...selectedJob, salary: e.target.value })} />
                <div className="flex justify-end space-x-4">
                  <button onClick={() => setShowEditModal(false)} className="px-4 py-2 bg-gray-300 rounded-md">Cancel</button>
                  <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Update</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobManagementTable;
