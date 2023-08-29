import * as React from 'react';
import './OutlinedHorizontalTimeline.css'; // Import your custom CSS file

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function OutlinedHorizontalTimeline() {
  return (
    <Timeline className="horizontal-timeline">
      <TimelineItem className="horizontal-timeline-item">
        <TimelineContent>
            <TimelineSeparator className="horizontal-timeline">
                <TimelineDot variant="outlined" />
                <TimelineConnector style={{ width:'100px', height: '3px' }} />
            </TimelineSeparator>
        </TimelineContent>
      </TimelineItem>  
      <TimelineItem className="horizontal-timeline-item">
        <TimelineContent>
            <TimelineSeparator className="horizontal-timeline">
                <TimelineDot variant="outlined" />
                <TimelineConnector style={{ width:'100px', height: '3px' }} />
            </TimelineSeparator>
        </TimelineContent>
      </TimelineItem> 
    </Timeline>
  );
}
