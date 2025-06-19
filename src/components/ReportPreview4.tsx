import React from 'react';

const ReportPreview4: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6">
        <h2 className="text-2xl font-bold mb-2">Legislative Report</h2>
        <div className="flex justify-between items-center">
          <span className="text-green-100">Bill Analysis & Impact Assessment</span>
          <span className="bg-white/20 px-3 py-1 rounded-full text-sm">SB 789</span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Bill Information</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Bill Number:</span>
                <span className="font-medium">SB 789</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status:</span>
                <span className="text-green-600 font-medium">Active</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Committee:</span>
                <span className="font-medium">Health</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Impact Score</h3>
            <div className="flex items-center space-x-2">
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <span className="text-sm font-medium text-green-600">High</span>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-4">
          <h3 className="font-semibold text-gray-800 mb-3">Key Provisions</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Healthcare accessibility improvements for rural communities
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Telemedicine expansion and regulatory framework
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Insurance coverage requirements for digital health services
            </li>
          </ul>
        </div>
        
        <div className="mt-6 pt-4 border-t">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Generated on March 15, 2024</span>
            <div className="flex space-x-2">
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Healthcare</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Technology</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportPreview4;