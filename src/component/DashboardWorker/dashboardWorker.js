import PageTitle from '../tasklistworker/PageTitle';
import { FaTasks } from 'react-icons/fa';
import { MdOutlineSmsFailed } from 'react-icons/md';
import { BiTask, BiTaskX } from 'react-icons/bi';

function DashboardWorker() {
  return (
    <div className="container">
      <PageTitle>Dashboard</PageTitle>

      {/* Thong ke cong viec */}
      <div className="pt-4 mx-2 flex gap-4">
        <div className="w-72 h-36 bg-white rounded-xl bg-blue-400 text-white">
          <div className="flex flex-row h-full">
            <div class="basis-3/4">
              <div className="h-full flex flex-col justify-center items-center ">
                <p className="text-xl font-bold">Tổng công việc</p>
                <p className="text-4xl font-bold">100</p>
              </div>
            </div>
            <div class="basis-1/4">
              <div className="h-full flex flex-col justify-center items-center ">
                <FaTasks size={30} />
              </div>
            </div>
          </div>
        </div>

        <div className="w-72 h-36 bg-white rounded-xl bg-blue-400 text-white">
          <div className="flex flex-row h-full">
            <div class="basis-3/4">
              <div className="h-full flex flex-col justify-center items-center ">
                <p className="text-xl font-bold">Hoàn thành</p>
                <p className="text-4xl font-bold">90</p>
              </div>
            </div>
            <div class="basis-1/4">
              <div className="h-full flex flex-col justify-center items-center ">
                <BiTask size={35} />
              </div>
            </div>
          </div>
        </div>

        <div className="w-72 h-36 bg-white rounded-xl bg-blue-400 text-white">
          <div className="flex flex-row h-full">
            <div class="basis-3/4">
              <div className="h-full flex flex-col justify-center items-center ">
                <p className="text-xl font-bold">Chưa hoàn thành</p>
                <p className="text-4xl font-bold">8</p>
              </div>
            </div>
            <div class="basis-1/4">
              <div className="h-full flex flex-col justify-center items-center ">
                <BiTaskX size={35} />
              </div>
            </div>
          </div>
        </div>

        <div className="w-72 h-36 bg-white rounded-xl bg-blue-400 text-white">
          <div className="flex flex-row h-full ">
            <div class="basis-3/4">
              <div className="h-full flex flex-col justify-center items-center ">
                <p className="text-xl font-bold ">Quá hạn</p>
                <p className="text-4xl font-bold">2</p>
              </div>
            </div>
            <div class="basis-1/4 ">
              <div className="h-full flex flex-col justify-center items-center ">
                <MdOutlineSmsFailed size={35} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DashboardWorker;
