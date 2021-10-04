import { Link } from "react-router-dom";

function HomePage() {


    return (
        <div>
            <div className="col-3">
                <div class="icon-bar">
                    <Link class="active" href="#"><i class="fa fa-home"></i></Link>
                    <Link href="#"><i class="fa fa-search"></i></Link>
                    <Link href="#"><i class="fa fa-envelope"></i></Link>
                    <Link href="#"><i class="fa fa-globe"></i></Link>
                    <Link href="#"><i class="fa fa-trash"></i></Link>
                </div>
            </div>
            <div className="col-5">

            </div>
            <div className="col-4">

            </div>
        </div>
    );
}
export default HomePage;