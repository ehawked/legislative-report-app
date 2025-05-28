import React from 'react';
import Card from './Card';
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi';

interface ArgumentSideProps {
  title: string;
  points: string[];
  stakeholders: string[];
  impact: string;
  sentiment: 'positive' | 'negative';
}

const ArgumentSide: React.FC<ArgumentSideProps> = ({ title, points, stakeholders, impact, sentiment }) => {
  const bgColor = sentiment === 'positive' ? 'bg-emerald-50' : 'bg-rose-50';
  const textColor = sentiment === 'positive' ? 'text-emerald-700' : 'text-rose-700';
  const borderColor = sentiment === 'positive' ? 'border-emerald-200' : 'border-rose-200';
  const icon = sentiment === 'positive' ? <FiThumbsUp className="w-5 h-5" /> : <FiThumbsDown className="w-5 h-5" />;

  return (
    <div className={`flex-1 p-6 ${bgColor}`}>
      <div className={`flex items-center gap-2 mb-4 ${textColor}`}>
        {icon}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      
      <div className={`border-t ${borderColor} pt-4 mb-4`}>
        <h4 className="font-medium mb-2">Key Arguments</h4>
        <ul className="space-y-2">
          {points.map((point, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${sentiment === 'positive' ? 'bg-emerald-500' : 'bg-rose-500'}`} />
              <span className="text-sm">{point}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className={`border-t ${borderColor} pt-4 mb-4`}>
        <h4 className="font-medium mb-2">Key Stakeholders</h4>
        <ul className="space-y-1">
          {stakeholders.map((stakeholder, index) => (
            <li key={index} className="text-sm">{stakeholder}</li>
          ))}
        </ul>
      </div>
      
      <div className={`border-t ${borderColor} pt-4`}>
        <h4 className="font-medium mb-2">Projected Impact</h4>
        <p className="text-sm">{impact}</p>
      </div>
    </div>
  );
};

const ReportPreview3: React.FC = () => {
  const supportData: ArgumentSideProps = {
    title: "Support Position",
    points: [
      "Increases access to higher education for underserved communities",
      "Reduces financial barriers to college enrollment",
      "Strengthens workforce development pipeline",
      "Improves college readiness rates",
      "Creates clear pathways to degrees and certificates"
    ],
    stakeholders: [
      "California Chamber of Commerce",
      "State PTA",
      "Campaign for College Opportunity",
      "Community College League"
    ],
    impact: "Projected to increase dual enrollment participation by 35% within first two years of implementation",
    sentiment: "positive"
  };

  const opposeData: ArgumentSideProps = {
    title: "Opposition Position",
    points: [
      "Concerns about increased faculty workload",
      "Questions about program funding sustainability",
      "Governance structure challenges",
      "Implementation timeline concerns",
      "Resource allocation issues for smaller districts"
    ],
    stakeholders: [
      "CFT - Union of Educators",
      "Some Rural District Administrators",
      "Faculty Association Representatives"
    ],
    impact: "Estimates additional costs of $2.8M annually for program administration and support",
    sentiment: "negative"
  };

  return (
    <div className="report-preview-container">
      <div className="text-center mb-4">
        <span className="inline-block px-3 py-1 text-sm font-medium bg-purple-100 text-purple-800 rounded-full">
          Arguments Analysis
        </span>
      </div>
      
      <Card variant="default" className="p-0 overflow-hidden">
        <div className="p-6 bg-white border-b border-gray-200">
          <h2 className="text-2xl font-bold mb-2">AB 1122: Dual Enrollment Programs</h2>
          <p className="text-gray-600">Analysis of supporting and opposing positions</p>
        </div>
        
        <div className="flex divide-x divide-gray-200">
          <ArgumentSide {...supportData} />
          <ArgumentSide {...opposeData} />
        </div>
      </Card>
    </div>
  );
};

export default ReportPreview3;