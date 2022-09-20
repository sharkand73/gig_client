import React, {useState, useEffect} from "react";

const Asterisk = () => {
    const [flashOn, setFlashOn] = useState(true);

    useEffect(() => {
        let timer = setTimeout(() => setFlashOn(!flashOn), 500);
        return ()=>clearTimeout(timer);
    }
    , [flashOn]);

    return (
        flashOn ? <span>*</span> : <span>&nbsp;</span>
    )
}

export default Asterisk;