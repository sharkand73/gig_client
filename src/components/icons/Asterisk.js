import React, {useState} from "react";

const Asterisk = () => {
    const [flashOn, setFlashOn] = useState(true);
    setInterval(() => setFlashOn(!flashOn), 500);
    return (
        flashOn ? <span>*</span> : <span>&nbsp;</span>
    )
}

export default Asterisk;