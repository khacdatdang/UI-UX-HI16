import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { amber } from '@mui/material/colors';

export default function Worker() {
  const colorCheckin = amber[400];
  return (
    <div
      className="w-screen h-screen flex justify-center drop-shadow-xl"
      style={{ backgroundColor: 'EEEAFB' }}
    >
      <div className="basis-4/12 bg-lime-100 rounded-r-3xl">
        <div className="flex flex-col h-full">
          <div className="basis-8/12">
            <div className="grid grid-rows-5 grid-flow-col gap-4 h-full justify-items-center">
              <div className="row-span-3 self-end">
                <Avatar
                  sx={{ width: 300, height: 300 }}
                  src="../../../public/avatar.png"
                />
              </div>
              <div className="row-span-1 self-end">
                <p className="text-3xl font-bold">Nguyễn Văn A</p>
              </div>
              <div className="row-span-1">
                <p className="text-xl font-bold">Công nhân</p>
              </div>
            </div>
          </div>
          <div class="basis-4/12 border-t-4 border-purple-300 border-dashed">
            <div className="flex flex-col h-full">
              <div class="basis-3/4">
                <div className="flex flex-col gap-4 justify-center h-full">
                  <Button
                    variant="contained"
                    startIcon={<AddTaskIcon fontSize="large" />}
                    className="w-3/4 self-center"
                  >
                    <p className="text-xl font-bold">Điểm danh</p>
                  </Button>
                  <Button
                    variant="contained"
                    color="success"
                    startIcon={<FormatListBulletedIcon fontSize="large" />}
                    className="w-3/4 self-center"
                  >
                    <p className="text-xl font-bold">Công việc</p>
                  </Button>
                </div>
              </div>
              <div class="basis-1/4 self-center">
                <Button
                  variant="outlined"
                  color="error"
                  startIcon={<LogoutIcon />}
                >
                  Đăng xuất
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="basis-8/12">02</div>
    </div>
  );
}
