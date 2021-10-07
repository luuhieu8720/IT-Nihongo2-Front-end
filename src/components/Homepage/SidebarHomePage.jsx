import { Link } from "react-router-dom";

function SidebarHomePage() {
    return (
        <div className="col-3">
            <div class="icon-bar rounded">
                <label className="text-side-bar pt-4">ETO</label>
                <div>
                    <Link to=""><i class="fas fa-desktop fa-sm" style={{ color:'white' }}></i></Link>
                    <Link to=""><i className="far fa-folder fa-sm" style={{ color:'white' }}></i></Link>
                    <Link to=""><i className="far fa-user" style={{ color:'white' }}></i></Link>
                    <Link to=""><i className="fas fa-cog" style={{ color:'white' }}></i></Link>
                </div>
                <Link href="#" className="mt-sm-6"><i className="fas fa-sign-out-alt" style={{ color:'white' }}></i></Link>
            </div>
        </div>

    );
}
export default SidebarHomePage;