import logo from '../../asset/logo.png';
import avatar from '../../asset/avatar.png';
import Header from "../../component/header/header";
import Navbar from "../../component/navbar/navbar";
import AllGroup from "../../component/group/group";


function Group() {

    return(
        <div>
            <Header logo={logo} avatar={avatar} />
            <div className="dash-main">
                <Navbar />
                <AllGroup />
            </div>
        </div>
    )
}
export default Group;