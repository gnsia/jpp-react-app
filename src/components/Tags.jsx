import { useState } from 'react';
import './Tags.css';


function Tags({ item, hideAndShow }) {
    const [toggle, setToggle] = useState(false);

    const toggleSwitch = function(e) {
        setToggle((prev) => {
            return !prev;
        });
        hideAndShow(e.target.id);
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