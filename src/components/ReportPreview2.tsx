import React, { useState } from 'react';
import { FiCalendar, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import Card from './Card';

interface TimelineItemProps {
  number: number;
  date: string;
  event: string;
  isAmendment?: boolean;
  amendmentDetails?: string;
  voteDetails?: {
    ayes: number;
    noes: number;
    abstain: number;
  };
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  number,
  date,
  event,
  isAmendment,
  amendmentDetails,
  voteDetails
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex gap-4 relative">
      <div className="flex flex-col items-center">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
          isAmendment ? 'bg-purple-100 text-purple-600' : 'bg-blue-100 text-blue-600'
        }`}>
          {number}
        </div>
        {number !== 5 && <div className="w-0.5 h-full bg-gray-200 mt-2"></div>}
      </div>
      
      <div className="flex-1 pb-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
          <FiCalendar className="w-4 h-4" />
          <span>{date}</span>
        </div>
        
        <div className="text-base font-medium text-gray-900 mb-2">{event}</div>
        
        {(amendmentDetails || voteDetails) && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 text-sm text-purple-600 hover:text-purple-700 transition-colors"
            aria-expanded={isExpanded}
          >
            {isExpanded ? (
              <>
                <FiChevronUp className="w-4 h-4" />
                Show less
              </>
            ) : (
              <>
                <FiChevronDown className="w-4 h-4" />
                Show more
              </>
            )}
          </button>
        )}
        
        {isExpanded && (
          <div className="mt-3 space-y-3 animate-in fade-in duration-200">
            {amendmentDetails && (
              <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
                <div className="font-medium text-gray-900 mb-1">Amendment Details</div>
                {amendmentDetails}
              </div>
            )}
            
            {voteDetails && (
              <div className="bg-gray-50 rounded-lg p-4 text-sm">
                <div className="font-medium text-gray-900 mb-2">Vote Results</div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-green-600 font-medium">{voteDetails.ayes}</div>
                    <div className="text-gray-500">Ayes</div>
                  </div>
                  <div>
                    <div className="text-red-600 font-medium">{voteDetails.noes}</div>
                    <div className="text-gray-500">Noes</div>
                  </div>
                  <div>
                    <div className="text-gray-600 font-medium">{voteDetails.abstain}</div>
                    <div className="text-gray-500">Abstain</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const ReportPreview2: React.FC = () => {
  const timelineItems: TimelineItemProps[] = [
    {
      number: 1,
      date: "Feb 20, 2025",
      event: "Bill introduced by Assembly Member Johnson",
    },
    {
      number: 2,
      date: "Mar 10, 2025",
      event: "Referred to Committee on Education",
    },
    {
      number: 3,
      date: "Apr 8, 2025",
      event: "Committee hearing and amendments",
      isAmendment: true,
      amendmentDetails: "Added provisions for employee classification protection and expanded implementation timeline to 2029-30 academic year.",
      voteDetails: {
        ayes: 7,
        noes: 2,
        abstain: 0
      }
    },
    {
      number: 4,
      date: "Apr 30, 2025",
      event: "Committee hearing canceled at author's request",
    },
    {
      number: 5,
      date: "TBD",
      event: "Pending floor vote",
    }
  ];

  return (
    <div className="report-preview-container">
      <div className="text-center mb-4">
        <span className="inline-block px-3 py-1 text-sm font-medium bg-purple-100 text-purple-800 rounded-full">Timeline View</span>
      </div>
      
      <Card variant="default" className="p-8">
        <h2 className="text-2xl font-bold mb-2">AB 1122: Dual Enrollment Programs</h2>
        <p className="text-gray-600 mb-8">Track the legislative journey from introduction to final vote</p>
        
        <div className="space-y-2">
          {timelineItems.map((item) => (
            <TimelineItem key={item.number} {...item} />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ReportPreview2;