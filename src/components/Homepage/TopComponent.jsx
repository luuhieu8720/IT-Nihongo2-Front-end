import { Image } from "react-bootstrap";

function TopComponent() {
    return (
        <div className="row mt-4 ms-8" style={{ marginBottom: "-2%" }}>
            <div className="col-sm-6">
                <div className="text-tutor mt-4">Easy</div>
                    <div className="ms-6 text-tutor" style={{ marginTop: "-4%" }}>Tutor</div>
                    <div className="ms-7 text-tutor" style={{ marginTop: "-4%" }}>Online</div>
            </div>
                 <Image className="col-sm-6" style={{ marginTop: "-3%" }} src="Image/homepage-1.png" alt="Image Text" />
        </div>

    );
}
export default TopComponent;