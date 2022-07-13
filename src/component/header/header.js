import React from 'react';
import PublicIcon from '@mui/icons-material/Public';
import ReportIcon from '@mui/icons-material/Report';

// import scss
import './style/header.scss';
import MenuSelect from '../../childcomponent/select/select';
import AvatarSelect from '../../childcomponent/avatar';



function Header(props) {
    return(
        <div className="header">
            <div className="header-logo">
                <img src={props.logo} alt="website-logo" />
            </div>
            <div className="header-menu">
              <MenuSelect value={<b>OFFICE</b>} link={"/"} />
              <MenuSelect value={<b>WORK</b>} link={"/alltask"} />
              {/* <MenuSelect value={<b>CRM</b>} />
              <MenuSelect value={<b>HRM</b>} /> */}
              <MenuSelect value={<b>KPI</b>} link={"/kpi"} />
              {/* <MenuSelect value={<b>ADMIN</b>} />
              <MenuSelect value={<b>HELP</b>} /> */}
            </div>
            <div className="header-navbar">
              <div className="header-navbar-report">
                <ReportIcon sx={{fontSize: 35}} />
              </div>
              <div className="header-navbar-alert">
                <PublicIcon sx={{fontSize: 35}} />
              </div>
              <AvatarSelect value={
                <img 
                  src={props.avatar} 
                  alt="avatar"
                  style={{width: "30px", height: "30px", borderRadius: "100%",}} 
                />
              } />
            </div>
        </div>
    );
}
export default Header;