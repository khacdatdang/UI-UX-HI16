import IconMenu from "../../childcomponent/menu";
import avatar from '../../asset/avatar.png';

// import scss
import './navbar.scss';
import CustomizedInputBase from "../../childcomponent/search";
import MenuWork from "../../childcomponent/menuwork";
function Navbar() {
    return(
        <div className="navbar">
            <div className="navbar-infor">
                <img src={avatar} alt="" />
                <div className="navbar-infor-text">
                    <p style={{fontWeight: "bold"}}>Giám Đốc </p>
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