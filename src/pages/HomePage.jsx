import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div>
            <div className="col-3">
                <div class="icon-bar rounded">
                    <label className="text-side-bar">ETO</label>
                    <div>
                        <Link className="" href="#"><i class="fa fa-desktop"></i></Link>
                        <Link href="#"><i className="fa fa-folder-o"></i></Link>
                        <Link href="#"><i className="fa fa-user-o"></i></Link>
                        <Link href="#"><i className="fa fa-cog"></i></Link>
                    </div>
                    <Link href="#" className="mt-sm-6"><i className="fa fa-sign-out"></i></Link>
                </div>
            </div>
            <div className="col-5">
                <div className="col-6">
                    <div className="position-abs mt-5 ms-6">
                        <h4 className="text-tutor">Easy</h4>
                    </div>
                    <div className="position-abs mt-6 ms-7">
                        <h4 className="text-tutor">Tutor</h4>
                    </div>
                    <div className="position-abs mt-7 ms-8">
                        <h4 className="text-tutor">Online</h4>
                    </div>
                    <div className="post-tutor">
                        <h4 className="font-weight-bold">Title</h4>
                    </div>
                </div>
                <div className="col-6">
                </div>
            </div>
            <div className="col-4">

            </div>
        </div>
    );
}
export default HomePage;