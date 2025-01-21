import React from 'react';
import Card from '../Card';
import TimelineItem from '../TimelineItem';

const MilitaryService = ({ isVisible }) => (
  <section id="military_service">
    <Card title="Military Service" id="military_service" isVisible={isVisible}>
      <div className="relative pl-4 border-l-2 border-green-500">
        <TimelineItem 
          title="Intelligence NCO /  Nahal Brigade Intelligence"
          date="2017 – 2020"
        >
          <h4 className="text-gray-600 mb-2">Responsibility for manufacture and creation of visual aids, writing operational commands,experience with Office programs, analyzing surface within military systems, and training new soldiers in the unit by introducing them to the different systems and managing the professional work.</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Basic GIS course</li>
            <li>Activation and analysis of aerial photo course</li>
            <li>Giving service to unit and external soldiers and users</li>
          </ul>
        </TimelineItem>
      </div>
    </Card>
  </section>
);

export default MilitaryService;