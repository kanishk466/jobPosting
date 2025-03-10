// import React, { useState } from 'react';
// import { X } from 'lucide-react';

// const JobPostForm = () => {
//   const [formData, setFormData] = useState({
//     title: '',
//     department: '',
//     location: '',
//     type: 'Full-time',
//     experience: '',
//     salary: '',
//     description: '',
//     requirements: '',
//     benefits: ''
//   });
  
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };
  
//   return (
//     <div className="bg-gray-100 min-h-screen p-6">
//       <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
//         <div className="bg-indigo-700 p-6 flex justify-between items-center">
//           <h1 className="text-2xl font-bold text-white">Post New Job</h1>
//           <button className="text-white hover:text-indigo-200">
//             <X className="w-6 h-6" />
//           </button>
//         </div>
        
//         <form className="p-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//             <div>
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
//                 Job Title*
//               </label>
//               <input
//                 className="appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-200"
//                 id="title"
//                 name="title"
//                 type="text"
//                 placeholder="e.g. Senior React Developer"
//                 value={formData.title}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
            
//             <div>
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="department">
//                 Department*
//               </label>
//               <select
//                 className="appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-200"
//                 id="department"
//                 name="department"
//                 value={formData.department}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Select Department</option>
//                 <option value="Engineering">Engineering</option>
//                 <option value="Design">Design</option>
//                 <option value="Product">Product</option>
//                 <option value="Marketing">Marketing</option>
//                 <option value="Sales">Sales</option>
//                 <option value="HR">HR</option>
//                 <option value="Finance">Finance</option>
//               </select>
//             </div>
            
//             <div>
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
//                 Location*
//               </label>
//               <input
//                 className="appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-200"
//                 id="location"
//                 name="location"
//                 type="text"
//                 placeholder="e.g. Remote, New York, San Francisco"
//                 value={formData.location}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
            
//             <div>
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
//                 Job Type*
//               </label>
//               <select
//                 className="appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-200"
//                 id="type"
//                 name="type"
//                 value={formData.type}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="Full-time">Full-time</option>
//                 <option value="Part-time">Part-time</option>
//                 <option value="Contract">Contract</option>
//                 <option value="Internship">Internship</option>
//                 <option value="Freelance">Freelance</option>
//               </select>
//             </div>
            
//             <div>
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="experience">
//                 Experience Required
//               </label>
//               <input
//                 className="appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-200"
//                 id="experience"
//                 name="experience"
//                 type="text"
//                 placeholder="e.g. 3-5 years"
//                 value={formData.experience}
//                 onChange={handleChange}
//               />
//             </div>
            
//             <div>
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="salary">
//                 Salary Range
//               </label>
//               <input
//                 className="appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-200"
//                 id="salary"
//                 name="salary"
//                 type="text"
//                 placeholder="e.g. $80,000 - $120,000"
//                 value={formData.salary}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>
          
//           <div className="mb-6">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
//               Job Description*
//             </label>
//             <textarea
//               className="appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-200"
//               id="description"
//               name="description"
//               rows="6"
//               placeholder="Describe the role, responsibilities, and objectives..."
//               value={formData.description}
//               onChange={handleChange}
//               required
//             ></textarea>
//           </div>
          
//           <div className="mb-6">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="requirements">
//               Requirements*
//             </label>
//             <textarea
//               className="appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-200"
//               id="requirements"
//               name="requirements"
//               rows="4"
//               placeholder="List the skills, qualifications, and experience required..."
//               value={formData.requirements}
//               onChange={handleChange}
//               required
//             ></textarea>
//           </div>
          
//           <div className="mb-6">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="benefits">
//               Benefits & Perks
//             </label>
//             <textarea
//               className="appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-200"
//               id="benefits"
//               name="benefits"
//               rows="4"
//               placeholder="List company benefits, perks, and other offerings..."
//               value={formData.benefits}
//               onChange={handleChange}
//             ></textarea>
//           </div>
          
//           <div className="flex justify-end space-x-4">
//             <button
//               type="button"
//               className="py-2 px-4 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             >
//               Post Job
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default JobPostForm;



import React, { useState } from 'react';
import { X, CheckCircle, AlertTriangle } from 'lucide-react';
import axios from 'axios';

const JobPostForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    department: '',
    location: '',
    type: 'Full-time',
    experience: '',
    salary: '',
    description: '',
    requirements: '',
    benefits: ''
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      await axios.post('https://job-backend-spwb.onrender.com/api/jobs', formData);
      setMessage({ type: 'success', text: 'Job has been posted successfully!' });

      // Reset form
      setFormData({
        title: '',
        department: '',
        location: '',
        type: 'Full-time',
        experience: '',
        salary: '',
        description: '',
        requirements: '',
        benefits: ''
      });
    } catch (error) {
      setMessage({ type: 'error', text: 'Error posting job. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="bg-indigo-700 p-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Post New Job</h1>
          <button className="text-white hover:text-indigo-200">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Success / Error Message */}
        {message.text && (
          <div
            className={`flex items-center p-4 rounded-md shadow-md my-4 mx-6 ${
              message.type === 'success' ? 'bg-green-100 border-green-500 text-green-700' : 'bg-red-100 border-red-500 text-red-700'
            } border-l-4`}
          >
            {message.type === 'success' ? (
              <CheckCircle className="w-6 h-6 mr-2 text-green-600" />
            ) : (
              <AlertTriangle className="w-6 h-6 mr-2 text-red-600" />
            )}
            <span>{message.text}</span>
          </div>
        )}

        <form className="p-6" onSubmit={handleSubmit}>
          {/* Input fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Job Title*</label>
              <input className="border rounded w-full py-3 px-4" name="title" type="text" value={formData.title} onChange={handleChange} required />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Department*</label>
              <select className="border rounded w-full py-3 px-4" name="department" value={formData.department} onChange={handleChange} required>
                <option value="">Select Department</option>
                <option value="Engineering">Engineering</option>
                <option value="Design">Design</option>
                <option value="Product">Product</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Location*</label>
              <input className="border rounded w-full py-3 px-4" name="location" type="text" value={formData.location} onChange={handleChange} required />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Job Type*</label>
              <select className="border rounded w-full py-3 px-4" name="type" value={formData.type} onChange={handleChange} required>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Experience Required</label>
              <input className="border rounded w-full py-3 px-4" name="experience" type="text" value={formData.experience} onChange={handleChange} />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Salary Range</label>
              <input className="border rounded w-full py-3 px-4" name="salary" type="text" value={formData.salary} onChange={handleChange} />
            </div>
          </div>

          {/* Textareas */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Job Description*</label>
            <textarea className="border rounded w-full py-3 px-4" name="description" rows="4" value={formData.description} onChange={handleChange} required></textarea>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Requirements*</label>
            <textarea className="border rounded w-full py-3 px-4" name="requirements" rows="4" value={formData.requirements} onChange={handleChange} required></textarea>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Benefits & Perks</label>
            <textarea className="border rounded w-full py-3 px-4" name="benefits" rows="4" value={formData.benefits} onChange={handleChange}></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4">
            <button type="button" className="py-2 px-4 bg-gray-200 rounded-lg hover:bg-gray-300">Cancel</button>
            <button type="submit" className="py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700" disabled={loading}>
              {loading ? 'Posting...' : 'Post Job'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobPostForm;
