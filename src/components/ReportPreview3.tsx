import React from 'react';
import Card from './Card';
import { ThumbsUp, ThumbsDown, CircleDot } from 'lucide-react';

interface ArgumentSideProps {
  title: string;
  points: string[];
  stakeholders: string[];
  impact: string;
  sentiment: 'positive' | 'negative';
}

const ArgumentSide: React.FC<ArgumentSideProps> = ({ title, points, stakeholders, impact, sentiment }) => {
  const isPositive = sentiment === 'positive';
  const bgColor = isPositive ? 'bg-green-50/25' : 'bg-red-50/25';
  const textColor = isPositive ? 'text-green-700' : 'text-red-700';
  const borderColor = 'border-gray-200';
  const Icon = isPositive ? ThumbsUp : ThumbsDown;

  return (
    <div className={`flex-1 p-8 ${bgColor}`}>
      <div className={`flex items-center gap-3 mb-8 ${textColor}`}>
        <Icon className="w-6 h-6" strokeWidth={2.5} />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      
      <div className={`border-t ${borderColor} pt-6 mb-8 min-h-[260px]`}>
        <h4 className="text-lg font-bold mb-4">Key Arguments</h4>
        <ul className="space-y-4">
          {points.map((point, index) => (
            <li key={index} className="flex items-start gap-4">
              <CircleDot className={`w-5 h-5 mt-1 shrink-0 ${isPositive ? 'text-green-600/95' : 'text-red-600/95'}`} />
              <span className="text-base leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className={`border-t ${borderColor} pt-6 mb-8 min-h-[180px]`}>
        <h4 className="text-lg font-bold mb-4">Key Stakeholders</h4>
        <ul className="space-y-3">
          {stakeholders.map((stakeholder, index) => (
            <li key={index} className="text-base flex items-center gap-3">
              <span className={`w-2 h-2 rounded-full ${isPositive ? 'bg-green-600/95' : 'bg-red-600/95'}`} />
              {stakeholder}
            </li>
          ))}
        </ul>
      </div>
      
      <div className={`border-t ${borderColor} pt-6 min-h-[120px]`}>
        <h4 className="text-lg font-bold mb-4">Projected Impact</h4>
        <p className="text-base leading-relaxed">{impact}</p>
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
      <div className="text-center mb-6">
        <span className="inline-block px-4 py-1.5 text-sm font-medium bg-purple-100 text-purple-800 rounded-full">
          Arguments Analysis
        </span>
      </div>
      
      <Card variant="default" className="overflow-hidden">
        <div className="p-8 bg-white border-b border-gray-200">
          <h2 className="text-2xl font-bold mb-3">AB 1122: Dual Enrollment Programs</h2>
          <p className="text-gray-600 text-lg">Analysis of supporting and opposing positions</p>
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