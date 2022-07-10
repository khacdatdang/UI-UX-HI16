import logo from '../../asset/logo.png';
import avatar from '../../asset/avatar.png';
import Header from "../../childcomponent/gsv/header/header";
import AllGroup from "../../component/group/group";
import Navbar from '../../childcomponent/gsv/navbar/navbar';


function GSV() {

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
export default GSV;