import React from 'react';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { grey, teal } from '@mui/material/colors';
import AppList from '../../component/tasklistworker/AppList';
import Avatar from '@mui/material/Avatar';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { AiOutlineDashboard } from 'react-icons/ai';

export default function WorkerTaskList() {
  const [open, setOpen] = React.useState(false);
  const colorTeal = teal[500];

  const handleLogOutOpen = () => {
    setOpen(true);
  };

  const handleLogOutClose = () => {
    setOpen(false);
  };

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
                  sx={{ width: 300, height: 300, bgcolor: grey[100] }}
                  src="/avatarworkerv2.png"
                  variant="rounded"
                />
              </div>
              <div className="row-span-1 self-end">
                <p className="text-3xl font-bold">Nguyễn Văn A</p>
              </div>
              <div className="row-span-1">
                <p className="text-xl font-bold italic">Công nhân</p>
              </div>
            </div>
          </div>
          <div class="basis-4/12 border-t-4 border-purple-300 border-dashed">
            <div className="flex flex-col h-full">
              <div class="basis-3/4">
                <div className="flex flex-col gap-4 justify-center h-full">
                  <Button
                    variant="contained"
                    startIcon={<AiOutlineDashboard fontSize="large" />}
                    className="w-3/4 self-center"
                    sx={{ bgcolor: colorTeal }}
                  >
                    <a href="/worker/dashboard" className="text-xl font-bold">Dashboard</a>
                  </Button>
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
                    <a href="/worker/tasklist" className="text-xl font-bold">Công việc</a>
                  </Button>
                </div>
              </div>
              <div class="basis-1/4 self-center">
                <Button
                  variant="outlined"
                  color="error"
                  startIcon={<LogoutIcon />}
                  onClick={handleLogOutOpen}
                >
                  Đăng xuất
                </Button>
                <Dialog
                  open={open}
                  onClose={handleLogOutClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {'Logout ?'}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Are you sure, do you want to logout?
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleLogOutClose}>No</Button>
                    <Button onClick={handleLogOutClose} autoFocus>
                      Yes
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="basis-8/12 flex justify-center pt-10 h-screen w-full">
        <AppList />
      </div>
    </div>
  );
}
