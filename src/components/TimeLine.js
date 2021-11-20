import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimeLineItem from './TimeLineItem';
import historyData from '../static/HistoryClassData'

export default function () {
    return (
        <VerticalTimeline>
            <TimeLineItem item={historyData[0]} key={0} />
            <TimeLineItem item={historyData[1]} key={1} />
            <TimeLineItem item={historyData[2]} key={2} />
        </VerticalTimeline>
    );
}

