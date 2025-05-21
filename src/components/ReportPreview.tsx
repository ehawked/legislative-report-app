import React, { useState } from 'react';
import { Sortable } from 'react-sortablejs';

interface ReportPreviewProps {
  billNumber: string;
}

const ReportPreview: React.FC<ReportPreviewProps> = ({ billNumber }) => {
  const [cardOrder, setCardOrder] = useState([
    'billOverview',
    'keyProvisions',
    'fiscalImpact',
    'stakeholderPositions',
    'politicalAnalysis',
    'strategicRecommendations'
  ]);

  const handleCardOrderChange = (newOrder: string[]) => {
    setCardOrder(newOrder);
  };

  const cards = {
    billOverview: (
      <div className="report-card" data-id="billOverview">
        <div className="report-icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2>Bill Overview</h2>
        <ul className="report-list">
          <li>Introduced by Senator Christopher Cabaldon on January 28, 2025</li>
          <li>Establishes an alternative process for California Community College district territory transfers</li>
          <li>Specifically targets transfers between districts in counties with multiple CCC districts</li>
          <li>Current status: In Progress (Set for hearing May 23, 2025)</li>
        </ul>
      </div>
    ),
    keyProvisions: (
      <div className="report-card" data-id="keyProvisions">
        <div className="report-icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
        <h2>Key Provisions</h2>
        <ul className="report-list">
          <li>Authorizes the Board of Governors to approve territory transfers without the standard petition process</li>
          <li>Applies to districts in counties divided among three or more CCC districts where majority of residents are in other counties</li>
          <li>Ensures employee classification and rights are protected during transfers</li>
          <li>Allows territory transfers to be approved without election</li>
        </ul>
      </div>
    ),
    fiscalImpact: (
      <div className="report-card" data-id="fiscalImpact">
        <div className="report-icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2>Fiscal Impact</h2>
        <p>Projected economic impact:</p>
        <ul className="report-list">
          <li>Minor state-level Proposition 98 General Fund costs</li>
          <li>Chancellor's Office one-time costs of $33,000 to $53,000 for petition review</li>
          <li>Significant potential local costs:</li>
          <ul className="report-list ml-4">
            <li>Employment benefit liabilities (long-term)</li>
            <li>Technology and systems integration (one-time)</li>
            <li>Facilities and infrastructure adjustments</li>
          </ul>
        </ul>
      </div>
    ),
    stakeholderPositions: (
      <div className="report-card" data-id="stakeholderPositions">
        <div className="report-icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h2>Stakeholder Positions</h2>
        <div className="stakeholder-section">
          <h3>Support:</h3>
          <ul className="report-list">
            <li>City of West Sacramento</li>
            <li>City of Woodland</li>
            <li>County of Yolo</li>
            <li className="text-gray-600 italic">+6 more organizations</li>
          </ul>
        </div>
        <div className="stakeholder-section">
          <h3>Opposition:</h3>
          <ul className="report-list">
            <li>Cabrillo Community College District</li>
            <li>CFT - a Union of Educators & Classified Professionals</li>
            <li>Community College League of California</li>
          </ul>
        </div>
      </div>
    ),
    politicalAnalysis: (
      <div className="report-card" data-id="politicalAnalysis">
        <div className="report-icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h2>Political Analysis</h2>
        <ul className="report-list">
          <li>Strong committee support with 5-2 vote in Senate Education Committee</li>
          <li>7-0 vote to place on suspense file in Senate Appropriations Committee</li>
          <li>Primary intent is to streamline transfer of Woodland College from Yuba Community College District to Los Rios Community College District</li>
          <li>Reduces Yuba CCD to one college (Yuba College)</li>
          <li>Expands Los Rios CCD from four to five colleges</li>
        </ul>
      </div>
    ),
    strategicRecommendations: (
      <div className="report-card" data-id="strategicRecommendations">
        <div className="report-icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <h2>Strategic Recommendations</h2>
        <ul className="report-list">
          <li>Focus advocacy on educational access improvements for Yolo County residents</li>
          <li>Emphasize local community and government support in communications</li>
          <li>Address concerns about employee protections during transfer process</li>
          <li>Prepare for potential amendments regarding fiscal impact analysis requirements</li>
        </ul>
      </div>
    )
  };

  return (
    <div className="report-preview-container">
      <div className="text-center mb-4">
        <span className="inline-block px-3 py-1 text-sm font-medium bg-purple-100 text-purple-800 rounded-full">Sample Report Preview</span>
      </div>
      
      <div className="report-header">
        <h1>California SB 226: Community colleges: territory transfers between districts</h1>
        <p className="text-gray-600">Comprehensive Legislative Analysis</p>
      </div>
      
      <Sortable
        tag="div"
        options={{
          animation: 150,
          handle: '.report-card',
          ghostClass: 'opacity-50'
        }}
        onChange={(order) => handleCardOrderChange(order)}
      >
        <div className="report-grid">
          {cardOrder.map((cardKey) => (
            <React.Fragment key={cardKey}>
              {cards[cardKey as keyof typeof cards]}
            </React.Fragment>
          ))}
        </div>
      </Sortable>
    </div>
  );
};

export default ReportPreview;