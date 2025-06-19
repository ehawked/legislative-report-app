import React from 'react';
import Card from './Card';

const ReportPreview4: React.FC = () => {
  return (
    <div className="report-preview-container px-4">
      <div className="text-center mb-4">
        <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full">Stakeholder Network & Influence Map</span>
      </div>

      <Card variant="default" className="p-8 relative min-h-[500px] flex items-center justify-center">
        <h2 className="text-2xl font-bold mb-8 text-center absolute top-8 left-1/2 -translate-x-1/2 w-full">AB 1122: Dual Enrollment Programs - Influence Map</h2>

        {/* Central Bill Node */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-32 h-32 bg-purple-600 rounded-full flex items-center justify-center text-white text-center font-bold text-lg shadow-lg">
            <div>
              <div className="text-sm">AB 1122</div>
              <div className="text-xs">The Bill</div>
            </div>
          </div>
        </div>

        {/* Stakeholder Groups - positioned around the central node */}
        {/* Group 1: Strong Support (Top-Left) */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-64">
          <Card variant="outline" className="p-4 border-green-500 border-2 bg-green-50">
            <h3 className="font-semibold text-green-700 mb-2 flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              Strong Support
            </h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• CA Chamber of Commerce</li>
              <li>• CA State PTA</li>
              <li>• Campaign for College Opportunity</li>
              <li>• Education Trust – West</li>
            </ul>
            <div className="mt-2 text-xs text-green-600 font-medium">
              Influence Level: High
            </div>
          </Card>
        </div>

        {/* Group 2: Key Opposition (Top-Right) */}
        <div className="absolute top-1/4 right-1/4 translate-x-1/2 -translate-y-1/2 w-64">
          <Card variant="outline" className="p-4 border-red-500 border-2 bg-red-50">
            <h3 className="font-semibold text-red-700 mb-2 flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
              Key Opposition
            </h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• CFT – Federation of Teachers</li>
              <li>• Rural District Administrators</li>
              <li>• Faculty Association Reps</li>
            </ul>
            <div className="mt-2 text-xs text-red-600 font-medium">
              Influence Level: Medium
            </div>
          </Card>
        </div>

        {/* Group 3: Neutral/Monitoring (Bottom-Left) */}
        <div className="absolute bottom-1/4 left-1/4 -translate-x-1/2 translate-y-1/2 w-64">
          <Card variant="outline" className="p-4 border-gray-400 border-2 bg-gray-50">
            <h3 className="font-semibold text-gray-600 mb-2 flex items-center">
              <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
              Neutral/Monitoring
            </h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• CA School Boards Association</li>
              <li>• Higher Ed Policy Center</li>
              <li>• Municipal Associations</li>
            </ul>
            <div className="mt-2 text-xs text-gray-600 font-medium">
              Influence Level: Medium
            </div>
          </Card>
        </div>

        {/* Group 4: Emerging Influence (Bottom-Right) */}
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-64">
          <Card variant="outline" className="p-4 border-yellow-500 border-2 bg-yellow-50">
            <h3 className="font-semibold text-yellow-700 mb-2 flex items-center">
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
              Emerging Influence
            </h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Student Advocacy Groups</li>
              <li>• Tech Industry Alliance</li>
              <li>• Workforce Development Orgs</li>
            </ul>
            <div className="mt-2 text-xs text-yellow-600 font-medium">
              Influence Level: Growing
            </div>
          </Card>
        </div>

        {/* Connection Lines (Visual Enhancement) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
          {/* Lines from center to each stakeholder group */}
          <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />
          <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />
          <line x1="50%" y1="50%" x2="25%" y2="75%" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />
          <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />
        </svg>

        {/* Legend - positioned at the bottom center */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 text-sm bg-white p-3 rounded-md shadow-sm border border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span>Strong Support</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span>Opposition</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-400"></div>
            <span>Neutral</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <span>Emerging</span>
          </div>
        </div>

        {/* Influence Metrics Box */}
        <div className="absolute top-4 right-4 bg-white p-3 rounded-md shadow-sm border border-gray-200 text-sm">
          <h4 className="font-semibold mb-2">Network Metrics</h4>
          <div className="space-y-1">
            <div>Total Stakeholders: <span className="font-medium">15</span></div>
            <div>Support Ratio: <span className="font-medium text-green-600">23:1</span></div>
            <div>Key Influencers: <span className="font-medium">4</span></div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ReportPreview4;