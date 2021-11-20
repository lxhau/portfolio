import React, { useEffect, useState } from 'react'
import SchoolIcon from '@material-ui/icons/School';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


export default function TimeLineItem({ item, key }) {

    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ backdropFilter: "blur(0.2rem)", backgroundColor: 'rgba(0,0,20,0.4)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid blur(0.2rem) rgba(0,0,20,0.4)' }}
            date={item.date}
            iconStyle={{ background: 'rgb(254 216 27)', color: '#fed81b' }}>
            <SchoolIcon />
            <h3 className="vertical-timeline-element-title"> {item.title} </h3>
            <p>
                {item.description}
            </p>
        </VerticalTimelineElement>
    );
};