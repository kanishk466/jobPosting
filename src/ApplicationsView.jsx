import React, { useState } from 'react';
import { Search, Filter, Download, ChevronDown, Star } from 'lucide-react';

const ApplicationsView = () => {
  const [selectedTab, setSelectedTab] = useState('all');
  
  // Sample application data
  const applications = [
    {
      id: 1,
      name: 'John Doe',
      avatar: 'JD',
      avatarColor: 'bg-blue-500',
      position: 'Senior React Developer',
      appliedDate: 'Mar 08, 2025',
      experience: '5 years',
      status: 'new',
      email: 'john.doe@example.com',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
      skills: ['React', 'JavaScript', 'Node.js', 'GraphQL', 'TypeScript'],
      rating: 4
    },
    {
      id: 2,
      name: 'Amy Smith',
      avatar: 'AS',
      avatarColor: 'bg-pink-500',
      position: 'UX/UI Designer',
      appliedDate: 'Mar 07, 2025',
      experience: '3 years',
      status: 'reviewing',
      email: 'amy.smith@example.com',
      phone: '+1 (555) 987-6543',
      location: 'New York, NY',
      skills: ['Figma', 'Adobe XD', 'UI Design', 'User Research', 'Prototyping'],
      rating: 3
    },
    {
      id: 3,
      name: 'Tom Johnson',
      avatar: 'TJ',
      avatarColor: 'bg-green-500',
      position: 'Backend Developer',
      appliedDate: 'Mar 06, 2025',
      experience: '4 years',
      status: 'shortlisted',
      email: 'tom.johnson@example.com',
      phone: '+1 (555) 456-7890',
      location: 'Austin, TX',
      skills: ['Node.js', 'Express', 'MongoDB', 'AWS', 'Docker'],
      rating: 5
    },
    {
      id: 4,
      name: 'Sarah Williams',
      avatar: 'SW',
      avatarColor: 'bg-purple-500',
      position: 'Product Manager',
      appliedDate: 'Mar 05, 2025',
      experience: '6 years',
      status: 'interview',
      email: 'sarah.williams@example.com',
      phone: '+1 (555) 789-0123',
      location: 'Remote',
      skills: ['Product Strategy', 'Agile', 'User Stories', 'Market Research', 'Roadmapping'],
      rating: 4
    }
  ];
  
  const statusLabels = {
    new: { text: 'New', color: 'bg-blue-100 text-blue-800' },
    reviewing: { text: 'Reviewing', color: 'bg-yellow-100 text-yellow-800' },
    shortlisted: { text: 'Shortlisted', color: 'bg-green-100 text-green-800' },
    interview: { text: 'Interview', color: 'bg-purple-100 text-purple-800' },
    rejected: { text: 'Rejected', color: 'bg-red-100 text-red-800' },
    hired: { text: 'Hired', color: 'bg-indigo-100 text-indigo-800' }
  };
  
  const filteredApplications = 
    selectedTab === 'all' 
      ? applications 
      : applications.filter(app => app.status === selectedTab);
  
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h1 className="text-2xl font-bold mb-4 md:mb-0">Applications</h1>
          
          <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input 
                type="text" 
                placeholder="Search applicants..." 
                className="bg-white border border-gray-300 rounded-lg py-2 pl-10 pr-4 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            
            <button className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-50">
              <Filter className="h-5 w-5" />
              <span>Filter</span>
            </button>
            
            <button className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-50">
              <Download className="h-5 w-5" />
              <span>Export</span>
            </button>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-xl overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex">
              <button
                onClick={() => setSelectedTab('all')}
                className={`px-4 py-4 text-sm font-medium ${
                  selectedTab === 'all'
                    ? 'border-b-2 border-indigo-500 text-indigo-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                All Applications
              </button>
              <button
                onClick={() => setSelectedTab('new')}
                className={`px-4 py-4 text-sm font-medium ${
                  selectedTab === 'new'
                    ? 'border-b-2 border-indigo-500 text-indigo-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                New
              </button>
              <button
                onClick={() => setSelectedTab('reviewing')}
                className={`px-4 py-4 text-sm font-medium ${
                  selectedTab === 'reviewing'
                    ? 'border-b-2 border-indigo-500 text-indigo-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Reviewing
              </button>
              <button
                onClick={() => setSelectedTab('shortlisted')}
                className={`px-4 py-4 text-sm font-medium ${
                  selectedTab === 'shortlisted'
                    ? 'border-b-2 border-indigo-500 text-indigo-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Shortlisted
              </button>
              <button
                onClick={() => setSelectedTab('interview')}
                className={`px-4 py-4 text-sm font-medium ${
                  selectedTab === 'interview'
                    ? 'border-b-2 border-indigo-500 text-indigo-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Interview
              </button>
            </nav>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Applicant
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Position
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Applied Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Experience
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rating
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredApplications.map((application) => (
                  <tr key={application.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className={`w-10 h-10 ${application.avatarColor} rounded-full flex items-center justify-center text-white font-bold`}>
                          {application.avatar}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{application.name}</div>
                          <div className="text-sm text-gray-500">{application.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{application.position}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{application.appliedDate}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {application.experience}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, index) => (
                          <Star 
                            key={index}
                            className={`w-4 h-4 ${index < application.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${statusLabels[application.status].color}`}>
                        {statusLabels[application.status].text}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-indigo-600 hover:text-indigo-900 mr-3">View</button>
                      <button className="text-gray-600 hover:text-gray-900">
                        <ChevronDown className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="flex-1 flex justify-between sm:hidden">
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Previous
              </button>
              <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Next
              </button>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to <span className="font-medium">4</span> of <span className="font-medium">4</span> results
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="sr-only">Previous</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-indigo-50 text-sm font-medium text-indigo-600 hover:bg-gray-50">
                    1
                  </button>
                  <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="sr-only">Next</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationsView;