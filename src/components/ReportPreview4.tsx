import React from 'react';
import Card from './Card';

const ReportPreview4: React.FC = () => {
  return (
    <div className="report-preview-container px-4">
      <div className="text-center mb-4">
        <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full">Impact Score</span>
      </div>

      <Card variant="default" className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">AB 1122: Dual Enrollment Programs - Impact Assessment</h2>
        
        {/* Overall Impact Score */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white mb-4">
            <span className="text-2xl font-bold">8.5</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">High Impact Legislation</h3>
          <p className="text-gray-600">This bill has significant potential to improve educational outcomes statewide</p>
        </div>

        {/* Impact Categories */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card variant="outline" className="p-4">
            <h4 className="font-semibold text-gray-800 mb-3">Educational Impact</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Student Access</span>
                <div className="flex items-center space-x-2">
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                  <span className="text-sm font-medium text-green-600">9.0</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">College Readiness</span>
                <div className="flex items-center space-x-2">
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  <span className="text-sm font-medium text-green-600">8.5</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Equity Improvement</span>
                <div className="flex items-center space-x-2">
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                  <span className="text-sm font-medium text-blue-600">8.0</span>
                </div>
              </div>
            </div>
          </Card>

          <Card variant="outline" className="p-4">
            <h4 className="font-semibold text-gray-800 mb-3">Implementation Impact</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Fiscal Burden</span>
                <div className="flex items-center space-x-2">
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <span className="text-sm font-medium text-yellow-600">6.0</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Administrative Complexity</span>
                <div className="flex items-center space-x-2">
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                  <span className="text-sm font-medium text-orange-600">7.0</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Timeline Feasibility</span>
                <div className="flex items-center space-x-2">
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <span className="text-sm font-medium text-green-600">7.5</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Key Impact Areas */}
        <div className="border-t pt-6">
          <h4 className="font-semibold text-gray-800 mb-4">Projected Outcomes</h4>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-1">35%</div>
              <div className="text-sm text-gray-600">Increase in dual enrollment participation</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-1">150K</div>
              <div className="text-sm text-gray-600">Additional students served annually</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 mb-1">$2.8M</div>
              <div className="text-sm text-gray-600">Annual implementation cost</div>
            </div>
          </div>
        </div>

        {/* Risk Assessment */}
        <div className="mt-6 pt-4 border-t">
          <h4 className="font-semibold text-gray-800 mb-3">Risk Assessment</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <span className="text-sm font-medium text-yellow-800">Faculty Workload Concerns</span>
              <span className="px-2 py-1 bg-yellow-200 text-yellow-800 text-xs rounded-full">Medium Risk</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="text-sm font-medium text-green-800">Strong Stakeholder Support</span>
              <span className="px-2 py-1 bg-green-200 text-green-800 text-xs rounded-full">Low Risk</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <span className="text-sm font-medium text-blue-800">Rural Implementation Challenges</span>
              <span className="px-2 py-1 bg-blue-200 text-blue-800 text-xs rounded-full">Medium Risk</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ReportPreview4;