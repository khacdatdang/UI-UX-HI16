import React from 'react'
import './group.scss';
import { useState } from 'react';

import StarIcon from '@mui/icons-material/Star';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import TaskList from '../../childcomponent/tasklist/tasklist';
import ListGroup from './groups';

function AllGroup(){

    const [status, setStatus] = useState('star');
    return (
        <div className="group">
            <div className='group-header'>
                {
                    (status === 'star') ? (
                        <button className='group-btn' onClick={() => setStatus('star')}>
                            <StarIcon /> <p>Tiêu điểm</p>
                        </button>
                    ):(
                        <button onClick={() => setStatus('star')}>
                            <StarIcon /> <p>Tiêu điểm</p>
                        </button>
                    )
                }
                {
                    (status === 'calendar') ? (
                        <button className='group-btn' onClick={() => setStatus('calendar')}>
                            <CalendarMonthIcon /> <p>Lịch biểu</p>
                        </button>
                    ):(
                        <button onClick={() => setStatus('calendar')}>
                            <CalendarMonthIcon /> <p>Lịch biểu</p>
                        </button>
                    )
                }
                {
                    (status === 'chat') ? (
                        <button className='group-btn' onClick={() => setStatus('chat')}>
                            <ChatOutlinedIcon /> <p>Trao đổi</p>
                        </button>
                    ):(
                        <button onClick={() => setStatus('chat')}>
                            <ChatOutlinedIcon /> <p>Trao đổi</p>
                        </button>
                    )
                }
                {
                    (status === 'campaign') ? (
                        <button className='group-btn' onClick={() => setStatus('campaign')}>
                            <CampaignOutlinedIcon /> <p>Thông báo</p>
                        </button>
                    ):(
                        <button onClick={() => setStatus('campaign')}>
                            <CampaignOutlinedIcon /> <p>Thông báo</p>
                        </button>
                    )
                }
            </div>
            <div className='group-main'>
                <ListGroup />
            </div>
        </div>
    );
}

export default AllGroup;