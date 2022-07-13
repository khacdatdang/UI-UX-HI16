import React from 'react'
import logo from '../../asset/logo.png';
import avatar from '../../asset/avatar.png';
import Header from "../../component/header/header";
import Navbar from "../../component/navbar/navbar";
import KPICreation from '../../component/kpi/kpiCreation';

function CreateKPI() {
  return (
    <div>
        <Header logo={logo} avatar={avatar} />
        <div className="dash-main">
            <Navbar />
            <KPICreation />
        </div>
  </div>
  )
}

export default CreateKPI