import avatar from '../../../asset/avatar.png';

// import scss
import './navbar.scss';
import CustomizedInputBase from "../../search";
import MenuWork from "../../gsv/menuwork";
function Navbar() {
    return(
        <div className="navbar">
            <div className="navbar-infor">
                <img src={avatar} alt="" />
                <div className="navbar-infor-text">
                    <p style={{fontWeight: "bold"}}>Giám Sát Viên</p>
                    <p style={{fontSize: 12 + "px"}}>Chưa Chấm Công</p>
                </div>
            </div>
            <div className="navbar-div">
                <CustomizedInputBase />
            </div>
            <div className="navbar-work">
                <MenuWork />
            </div>
        </div>
    );
}
export default Navbar;