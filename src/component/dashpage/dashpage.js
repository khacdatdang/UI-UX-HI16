import React from "react";
import { Doughnut } from "react-chartjs-2";
import {Chart, ArcElement} from 'chart.js';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

import './dashpage.scss';
import AppA from "./UncontrolledBoard";

import { useState } from "react";
import ReactDOM from "react-dom";
import Board, { moveCard } from "@lourenci/react-kanban";
import "@lourenci/react-kanban/dist/styles.css";
// Use your own styles to override the default styles
// import "./styles.css";

const board = {
  columns: [
    {
      id: 1,
      title: "Đã Hoàn Thành",
      backgroundColor: "#fff",
      cards: [
        {
          id: 1,
          title: "Dự án A1",
          description: "Xây dựng hệ thống cầu tuyến A1"
        },
        {
          id: 2,
          title: "Dự án A1",
          description: "Xây dựng đường liên thông A1->A2"
        }
      ]
    },
    {
      id: 2,
      title: "Đang Thi Công",
      cards: [
        {
          id: 9,
          title: "Dự án A2",
          description: "Xây dựng hệ thống cầu A2"
        }
      ]
    },
    {
      id: 3,
      title: "Chưa Thi Công",
      cards: [
        {
          id: 10,
          title: "Dự án A2",
          description: "Xây dựng tuyến đường trên cao liên thông A2->A1"
        },
        {
          id: 11,
          title: "Dự án A3",
          description: "Xây dựng hệ thống cầu A3"
        }
      ]
    },
    {
      id: 4,
      title: "Bị Đình Trệ",
      cards: [
        {
          id: 12,
          title: "Dự án A4",
          description: "Chưa đủ nguồn vốn để thi công"
        }
      ]
    }
  ]
};

function ControlledBoard() {
  // You need to control the state yourself.
  const [controlledBoard, setBoard] = useState(board);

  function handleCardMove(_card, source, destination) {
    const updatedBoard = moveCard(controlledBoard, source, destination);
    setBoard(updatedBoard);
  }

  return (
    <Board onCardDragEnd={handleCardMove} disableColumnDrag>
      {controlledBoard}
    </Board>
  );
}

function UncontrolledBoard() {
  return (
    <Board
      allowRemoveLane
      allowRenameColumn
      allowRemoveCard
      onLaneRemove={console.log}
      onCardRemove={console.log}
      onLaneRename={console.log}
      initialBoard={board}
      allowAddCard={{ on: "top" }}
      onNewCardConfirm={(draftCard) => ({
        id: new Date().getTime(),
        ...draftCard
      })}
      onCardNew={console.log}
    />
  );
}


Chart.register(ArcElement);



function DashPage() {
    return(
        <div className="dashpage">
            <div className="dashpage-header">
                <div>
                    <b>Tổng quan</b>
                </div>
                <div onClick={() => {}}>
                    <RemoveOutlinedIcon sx={{fontWeight: "bold"}} />
                </div>
            </div>
            <hr />
            <div className="chart">
                <div className="chart-img">
                    <div className="chart-img-img">
                    <Doughnut
                        width={"50%"}
                        data={{
                            labels: [
                                "Đồ gia dụng",
                                "Dụng cụ học tập",
                                "Đồ ăn, đồ uống",
                                "Thực phẩm",
                            ],
                            datasets: [
                            {
                                label: "Population (millions)",
                                data: [200,200,200,209],
                                backgroundColor: [
                                    "#3e95cd",
                                    "#8e5ea2",
                                    "#cc33ff",
                                    "#993333",
                                ],
                                hoverOffset: 4,
                            }
                            ]
                        }}
                        style={
                            {
                                width: "50%",
                            }
                        }
                    />
                    </div>
                    <div className="chart-infor">
                        <div className="chart-infor-div">
                            <div style={{background: "#3e95cd", width: 30 + "px", height: 30 + "px"}}></div>
                            <p>Chưa làm</p>
                            <p>50 (25%)</p>
                        </div>
                        <div className="chart-infor-div">
                            <div style={{background: "#8e5ea2", width: 30 + "px", height: 30 + "px"}}></div>
                            <p>Đang làm</p>
                            <p>30 (15%)</p>
                        </div>
                        <div className="chart-infor-div">
                            <div style={{background: "#cc33ff", width: 30 + "px", height: 30 + "px"}}></div>
                            <p>Hoàn thành</p>
                            <p>100 (50%)</p>
                        </div>
                        <div className="chart-infor-div">
                            <div style={{background: "#993333", width: 30 + "px", height: 30 + "px"}}></div>
                            <p>Khác</p>
                            <p>20 (10%)</p>
                        </div>
                    </div>
                </div>
                <div className="chart-analyst">
                    <div style={{color: "#3e95cd"}}>
                        <p>HT ĐÚNG HẠN</p>
                        <p style={{fontWeight: "bold"}}>12</p>
                        <p>50% công việc</p>
                    </div>
                    <div style={{color: "#8e5ea2"}}>
                        <p>HT QUÁ HẠN</p>
                        <p style={{fontWeight: "bold"}}>12</p>
                        <p>10% công việc</p>
                    </div>
                    <div style={{color: "#cc33ff"}}>
                        <p>HT TRƯỚC HẠN</p>
                        <p style={{fontWeight: "bold"}}>12</p>
                        <p>40% công việc</p>
                    </div>
                    <div style={{color: "#993333"}}>
                        <p>BỊ ĐÌNH TRỆ</p>
                        <p style={{fontWeight: "bold"}}>12</p>
                        <p>25% công việc</p>
                    </div>
                </div>
            </div>
            <UncontrolledBoard />
        </div>
    );
}
export default DashPage;