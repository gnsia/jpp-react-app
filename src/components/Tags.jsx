import { useState } from 'react';
import './Tags.css';


function Tags({ item }) {
    const [toggle, setToggle] = useState(false);

    const toggleSwitch = function(e) {
        setToggle((prev) => !prev);
    };

    let selected = toggle ? 'selected' : '';

    const tag = <button id={item} className={selected} onClick={toggleSwitch}>{item}</button>;
   
    return (
        <>
            {tag}
        </>
    )
}

export default Tags;