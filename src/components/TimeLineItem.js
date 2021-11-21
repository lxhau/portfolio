import React, { useEffect, useState } from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import StarIcon from '@material-ui/icons/Star';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';

export default function TimeLineItem({ item, key }) {
    switch (item.type) {
        case "learn":
            return (
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ backdropFilter: "blur(0.2rem)", backgroundColor: 'rgba(0,0,20,0.4)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid blur(0.2rem) rgba(0,0,20,0.4)' }}
                    date={item.date}
                    iconStyle={{ background: 'rgba(0,0,20,0.4)', color: '#fed81b' }}>
                    <SchoolIcon />
                    <h3 className="vertical-timeline-element-title"> {item.title} </h3>
                    <p>
                        {item.description}
                    </p>
                </VerticalTimelineElement>
            );
            case 'work': 
            return (
                <VerticalTimelineElement 
                    className="vertical-timeline-element--work"
                    contentStyle={{ backdropFilter: "blur(0.2rem)", backgroundColor: 'rgba(0,0,20,0.4)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid blur(0.2rem) rgba(0,0,20,0.4)' }}
                    date={item.date}
                    iconStyle={{ background: 'rgba(0,0,20,0.4)', color: '#fed81b' }}>
                    <WorkIcon />
                    <h3 className="vertical-timeline-element-title"> {item.title} </h3>
                    <p>
                        {item.description}
                    </p>
                </VerticalTimelineElement>
            );
            default : return (
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<StarIcon />}
                />
            )
    }

};