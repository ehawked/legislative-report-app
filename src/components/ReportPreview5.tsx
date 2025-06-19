import React from 'react';
import Card from './Card';
import { Users, FileText, Lightbulb, Settings } from 'lucide-react';

const ReportPreview5: React.FC = () => {
  return (
    <div className="report-preview-container px-4">
      <div className="text-center mb-4">
        <span className="inline-block px-3 py-1 text-sm font-medium bg-green-100 text-green-800 rounded-full">Bill Summary: Who, What, Why, How</span>
      </div>

      <Card variant="default" className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">AB 1122: Dual Enrollment Programs - Core Analysis</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Who Section */}
          <Card variant="outline" className="p-5 flex flex-col items-start">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
              <Users size={20} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Who</h3>
            <div className="text-gray-700 text-sm space-y-2">
              <div><strong>Sponsor:</strong> Assembly Member Isaac Bryan</div>
              <div><strong>Beneficiaries:</strong> High school students, community colleges, underserved communities</div>
              <div><strong>Affected Parties:</strong> Local Education Agencies (LEAs), faculty unions, state budget</div>
            </div>
          </Card>

          {/* What Section */}
          <Card variant="outline" className="p-5 flex flex-col items-start">
            <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-3">
              <FileText size={20} />
            </div>
            <h3 className="text-xl font-semibold mb-3">What</h3>
            <div className="text-gray-700 text-sm space-y-2">
              <div><strong>Core Provision:</strong> Mandates LEAs without dual enrollment to establish programs by 2029-30</div>
              <div><strong>Goal:</strong> Increase access to college-level courses for high school students</div>
              <div><strong>Scope:</strong> Applies to California public school districts</div>
            </div>
          </Card>

          {/* Why Section */}
          <Card variant="outline" className="p-5 flex flex-col items-start">
            <div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center mb-3">
              <Lightbulb size={20} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Why</h3>
            <div className="text-gray-700 text-sm space-y-2">
              <div><strong>Problem:</strong> Low dual enrollment rates in CA compared to national average</div>
              <div><strong>Equity:</strong> Addresses racial/ethnic disparities in higher education access</div>
              <div><strong>Readiness:</strong> Improves college readiness and reduces time to degree</div>
            </div>
          </Card>

          {/* How Section */}
          <Card variant="outline" className="p-5 flex flex-col items-start">
            <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mb-3">
              <Settings size={20} />
            </div>
            <h3 className="text-xl font-semibold mb-3">How</h3>
            <div className="text-gray-700 text-sm space-y-2">
              <div><strong>Mechanism:</strong> Requires partnerships through CCAP or early/middle college high schools</div>
              <div><strong>Funding:</strong> Provides state reimbursement for mandated costs</div>
              <div><strong>Enforcement:</strong> Strengthens requirements from "encourage" to "require"</div>
            </div>
          </Card>
        </div>
      </Card>
    </div>
  );
};

export default ReportPreview5;