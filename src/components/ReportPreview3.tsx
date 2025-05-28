import React from 'react';
import Card from './Card';
import { ThumbsUp, ThumbsDown, CircleDot } from 'lucide-react';

interface ArgumentSideData {
  title: string;
  points: string[];
  stakeholders: string[];
  impact: string;
  sentiment: 'positive' | 'negative';
}

const useSideStyles = (sentiment: 'positive' | 'negative') => {
  const isPos = sentiment === 'positive';
  return {
    bg: isPos ? 'bg-green-50/25' : 'bg-red-50/25',
    text: isPos ? 'text-green-700' : 'text-red-700',
    dot: isPos ? 'text-green-600/95' : 'text-red-600/95',
    circle: isPos ? 'bg-green-600/95' : 'bg-red-600/95',
    Icon: isPos ? ThumbsUp : ThumbsDown,
  };
};

const ReportPreview3: React.FC = () => {
  // — Data for both sides —
  const support: ArgumentSideData = {
    title: 'Support Position',
    points: [
      'Increases access to higher education for underserved communities',
      'Reduces financial barriers to college enrollment',
      'Strengthens workforce development pipeline',
      'Improves college readiness rates',
      'Creates clear pathways to degrees and certificates',
    ],
    stakeholders: [
      'California Chamber of Commerce',
      'California State PTA',
      'Campaign for College Opportunity',
      'Education Trust – West',
      'Career Ladders Project',
      'California High School District Coalition',
      'Alameda County Office of Education',
    ],
    impact:
      'Projected to increase dual enrollment participation by 35% within first two years of implementation',
    sentiment: 'positive',
  };

  const oppose: ArgumentSideData = {
    title: 'Opposition Position',
    points: [
      'Concerns about increased faculty workload',
      'Questions about program funding sustainability',
      'Governance structure challenges',
      'Implementation timeline concerns',
      'Resource allocation issues for smaller districts',
    ],
    stakeholders: [
      'CFT – California Federation of Teachers',
      'Some Rural District Administrators',
      'Faculty Association Representatives',
    ],
    impact:
      'Estimates additional costs of $2.8M annually for program administration and support',
    sentiment: 'negative',
  };

  // — Flattened summary rows for the top grid —
  const summaryRows = [
    ...support.stakeholders.map((org) => ({ org, pos: 'Support' as const })),
    ...oppose.stakeholders.map((org) => ({ org, pos: 'Oppose' as const })),
  ];

  // — Section definitions for the detail grid —
  const sections = [
    {
      key: 'args',
      title: 'Key Arguments',
      minH: 'min-h-[260px]',
      render: (d: ArgumentSideData) => (
        <ul className="space-y-4">
          {d.points.map((pt, i) => (
            <li key={i} className="flex items-start gap-4">
              <CircleDot
                className={`w-5 h-5 mt-1 shrink-0 ${useSideStyles(d.sentiment).dot}`}
                strokeWidth={2.5}
              />
              <span className="text-base leading-relaxed">{pt}</span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      key: 'stake',
      title: 'Key Stakeholders',
      minH: 'min-h-[180px]',
      render: (d: ArgumentSideData) => (
        <ul className="space-y-3">
          {d.stakeholders.map((st, i) => (
            <li key={i} className="flex items-center gap-3 text-base">
              <span
                className={`w-2 h-2 rounded-full ${useSideStyles(d.sentiment).circle}`}
              />
              {st}
            </li>
          ))}
        </ul>
      ),
    },
    {
      key: 'impact',
      title: 'Projected Impact',
      minH: 'min-h-[120px]',
      render: (d: ArgumentSideData) => (
        <p className="text-base leading-relaxed">{d.impact}</p>
      ),
    },
  ];

  return (
    <div className="report-preview-container px-4">
      {/* ——— Main title, centered ——— */}
      <h1 className="text-3xl font-bold text-center my-8">
        AB 1122: Dual Enrollment Programs
      </h1>

      {/* ——— 3-column summary grid ——— */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {summaryRows.map(({ org, pos }, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded"
          >
            <span className="text-sm text-gray-700 truncate">{org}</span>
            <span
              className={`inline-block px-2 py-0.5 text-xs font-medium rounded-full ${
                pos === 'Support'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {pos}
            </span>
          </div>
        ))}
      </div>

      {/* ——— Detailed 2×4 grid inside a Card ——— */}
      <Card variant="default" className="overflow-hidden">
        <div className="grid grid-cols-2 divide-x divide-gray-200">
          {/* Row 1: side headers */}
          {[support, oppose].map((side) => {
            const { bg, text, Icon } = useSideStyles(side.sentiment);
            return (
              <div key={side.sentiment} className={`p-8 ${bg}`}>
                <div className={`flex items-center justify-center gap-3 ${text}`}>
                  <Icon className="w-6 h-6" strokeWidth={2.5} />
                  <h3 className="text-xl font-bold">{side.title}</h3>
                </div>
              </div>
            );
          })}

          {/* Rows 2–4: each section for both sides */}
          {sections.map((sec) =>
            [support, oppose].map((side) => (
              <div
                key={side.sentiment + sec.key}
                className={`p-8 border-t border-gray-200 pt-6 ${sec.minH}`}
              >
                <h4 className="text-lg font-bold mb-4">{sec.title}</h4>
                {sec.render(side)}
              </div>
            ))
          )}
        </div>
      </Card>
    </div>
  );
};

export default ReportPreview3;
