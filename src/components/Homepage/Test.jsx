import PopupComponent from "./PopupComponent";
import { useState } from "react";

function Test(){
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <div>
            <main>
                <h1>Popups</h1>
                <button onClick={() => setButtonPopup(true)}>Open popup</button>
            </main>
            <PopupComponent trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h3>My popup</h3>
            </PopupComponent>
        </div>
    );
}

export default Test;