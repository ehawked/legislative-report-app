import React from 'react';
import Card from './Card';
import { Building2, Users, DollarSign, TrendingUp } from 'lucide-react';

const ReportPreview4: React.FC = () => {
  const stakeholders = [
    {
      name: "California Chamber of Commerce",
      type: "Business",
      position: "Support",
      influence: 85,
      funding: "$2.3M",
      icon: Building2,
      color: "green"
    },
    {
      name: "CFT - California Federation of Teachers",
      type: "Labor Union",
      position: "Oppose",
      influence: 78,
      funding: "$1.8M",
      icon: Users,
      color: "red"
    },
    {
      name: "Campaign for College Opportunity",
      type: "Advocacy",
      position: "Support",
      influence: 72,
      funding: "$950K",
      icon: TrendingUp,
      color: "green"
    },
    {
      name: "California State PTA",
      type: "Parent Organization",
      position: "Support",
      influence: 68,
      funding: "$1.2M",
      icon: Users,
      color: "green"
    },
    {
      name: "Rural Counties Association",
      type: "Government",
      position: "Neutral",
      influence: 45,
      funding: "$650K",
      icon: Building2,
      color: "gray"
    }
  ];

  const getPositionColor = (position: string) => {
    switch (position) {
      case 'Support': return 'text-green-600 bg-green-50';
      case 'Oppose': return 'text-red-600 bg-red-50';
      case 'Neutral': return 'text-gray-600 bg-gray-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getInfluenceColor = (influence: number) => {
    if (influence >= 80) return 'bg-red-500';
    if (influence >= 70) return 'bg-orange-500';
    if (influence >= 60) return 'bg-yellow-500';
    return 'bg-gray-400';
  };

  return (
    <div className="report-preview-container px-4">
      <div className="text-center mb-4">
        <span className="inline-block px-3 py-1 text-sm font-medium bg-purple-100 text-purple-800 rounded-full">Stakeholder Network & Influence Map</span>
      </div>

      <Card variant="default" className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">AB 1122: Key Stakeholder Analysis</h2>
        
        {/* Network Overview */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Card variant="outline" className="p-4 text-center">
            <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-2">
              <TrendingUp size={24} />
            </div>
            <div className="text-2xl font-bold text-green-600 mb-1">23</div>
            <div className="text-sm text-gray-600">Supporting Organizations</div>
          </Card>
          
          <Card variant="outline" className="p-4 text-center">
            <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-2">
              <Users size={24} />
            </div>
            <div className="text-2xl font-bold text-red-600 mb-1">1</div>
            <div className="text-sm text-gray-600">Opposing Organizations</div>
          </Card>
          
          <Card variant="outline" className="p-4 text-center">
            <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mx-auto mb-2">
              <DollarSign size={24} />
            </div>
            <div className="text-2xl font-bold text-purple-600 mb-1">$8.2M</div>
            <div className="text-sm text-gray-600">Total Lobbying Power</div>
          </Card>
        </div>

        {/* Stakeholder List */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Stakeholders by Influence</h3>
          
          {stakeholders.map((stakeholder, index) => {
            const IconComponent = stakeholder.icon;
            return (
              <Card key={index} variant="outline" className="p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className={`w-10 h-10 rounded-full bg-${stakeholder.color === 'green' ? 'green' : stakeholder.color === 'red' ? 'red' : 'gray'}-100 text-${stakeholder.color === 'green' ? 'green' : stakeholder.color === 'red' ? 'red' : 'gray'}-600 flex items-center justify-center`}>
                      <IconComponent size={20} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="font-semibold text-gray-800">{stakeholder.name}</h4>
                        <span className={`px-2 py-1 text-xs rounded-full ${getPositionColor(stakeholder.position)}`}>
                          {stakeholder.position}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>{stakeholder.type}</span>
                        <span>•</span>
                        <span>Lobbying: {stakeholder.funding}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-sm text-gray-500 mb-1">Influence Score</div>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${getInfluenceColor(stakeholder.influence)}`}
                          style={{ width: `${stakeholder.influence}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-700">{stakeholder.influence}</span>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Coalition Analysis */}
        <div className="mt-8 pt-6 border-t">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Coalition Strength Analysis</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card variant="outline" className="p-4">
              <h4 className="font-semibold text-green-600 mb-3">Pro-Bill Coalition</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Combined Influence:</span>
                  <span className="font-medium">92/100</span>
                </div>
                <div className="flex justify-between">
                  <span>Lobbying Resources:</span>
                  <span className="font-medium">$7.4M</span>
                </div>
                <div className="flex justify-between">
                  <span>Geographic Reach:</span>
                  <span className="font-medium">Statewide</span>
                </div>
                <div className="flex justify-between">
                  <span>Key Strength:</span>
                  <span className="font-medium">Business + Education</span>
                </div>
              </div>
            </Card>
            
            <Card variant="outline" className="p-4">
              <h4 className="font-semibold text-red-600 mb-3">Opposition Coalition</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Combined Influence:</span>
                  <span className="font-medium">78/100</span>
                </div>
                <div className="flex justify-between">
                  <span>Lobbying Resources:</span>
                  <span className="font-medium">$1.8M</span>
                </div>
                <div className="flex justify-between">
                  <span>Geographic Reach:</span>
                  <span className="font-medium">Statewide</span>
                </div>
                <div className="flex justify-between">
                  <span>Key Concern:</span>
                  <span className="font-medium">Faculty Workload</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ReportPreview4;