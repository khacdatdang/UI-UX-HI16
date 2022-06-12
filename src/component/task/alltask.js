import React from 'react'
import './style/dashbroad.scss';
import { useState } from 'react';

import StarIcon from '@mui/icons-material/Star';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import TaskList from '../../childcomponent/tasklist/tasklist';

function AllTask() {
    
  const [status, setStatus] = useState('star');
  return (
    <div className='dashbroad'>
            <div className='dashbroad-header'>
                {
                    (status === 'star') ? (
                        <button className='dashbroad-btn' onClick={() => setStatus('star')}>
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
                        <button className='dashbroad-btn' onClick={() => setStatus('calendar')}>
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
                        <button className='dashbroad-btn' onClick={() => setStatus('chat')}>
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
                        <button className='dashbroad-btn' onClick={() => setStatus('campaign')}>
                            <CampaignOutlinedIcon /> <p>Thông báo</p>
                        </button>
                    ):(
                        <button onClick={() => setStatus('campaign')}>
                            <CampaignOutlinedIcon /> <p>Thông báo</p>
                        </button>
                    )
                }
            </div>

            <TaskList/>
        </div>
  )
}

export default AllTask