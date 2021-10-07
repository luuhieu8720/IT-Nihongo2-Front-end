import { Link } from "react-router-dom";

function SideBar() {
    return (
        <div className="col-3">
            <div class="icon-bar rounded">
                <label className="text-side-bar pt-4">ETO</label>
                <div>
                    <Link to=""><i class="fas fa-desktop fa-sm"></i></Link>
                    <Link to=""><i className="far fa-folder fa-sm"></i></Link>
                    <Link to=""><i className="far fa-user"></i></Link>
                    <Link to=""><i className="fas fa-cog"></i></Link>
                </div>
                <Link href="#" className="mt-sm-6"><i className="fas fa-sign-out-alt"></i></Link>
            </div>
        </div>

    );
}
export default SideBar;