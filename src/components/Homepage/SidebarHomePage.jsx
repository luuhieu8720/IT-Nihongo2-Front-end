import { Link } from "react-router-dom";
import SignOut from "../../logics/SignOut";
import { useHistory } from "react-router";
import { ToastContainer, toast } from "react-toastify";

function SidebarHomePage() {
    const history = useHistory();
    const signOut = () => {
        toast.success("Successfully");
        setTimeout(() => {
            SignOut.signOut();
            history.push("/signin");
        }, 3000);
    }
    return (
        <div className="col-3">
            <div className="icon-bar rounded">
                <ToastContainer />
                <label className="text-side-bar pt-4">ETO</label>
                <div>
                
                    <Link to="/"><i className="fas fa-desktop fa-sm" style={{ color:'white' }}></i></Link>
                    <Link to="/"><i className="far fa-folder fa-sm" style={{ color:'white' }}></i></Link>
                    <Link to="/"><i className="far fa-user" style={{ color:'white' }}></i></Link>
                    <Link to="/"><i className="fas fa-cog" style={{ color:'white' }}></i></Link>
                </div>
                <a className="mt-sm-6"><i className="fas fa-sign-out-alt" style={{ color:'white' }} onClick={signOut}></i></a> 
            </div>
        </div>


    );
}
export default SidebarHomePage;