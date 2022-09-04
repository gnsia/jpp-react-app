import { useState } from 'react';
import './Contents.css';
import './Tags.css';
import Photos from './Photos.jsx';

function Contents({ DATA }) {

    const tags = {};
    DATA.forEach(data => {
        data.className.forEach(item => {
            if(!Object.keys(tags).includes(item)) {
                tags[item] = false;
            }
        })
    })

    const [ photos, setPhotos ] = useState(DATA);
    const [toggle, setToggle] = useState(tags);

    const toggleSwitch = function(e) {
        if(!toggle[e.target.id]) {
            setToggle(prevState => ({
                ...prevState,
                [e.target.id]: true,
            }));
        } else {
            setToggle(prevState => ({
                ...prevState,
                [e.target.id]: false,
            }));
        }
        
        hideAndShow(e.target.id);
    };

    const hideAndShow = (item) => {
        console.log(Object.values(toggle).every(t => t === false));
        console.log(toggle);
        const copyPhotos = photos;
        
        copyPhotos.forEach(photo => {
            if(!photo.className.includes(item)) {
                photo.isShow = false;           
            }

            if(photo.className.includes(item)) {
                photo.isShow = true;
            }
        })
        setPhotos(copyPhotos);
    }

    const renderTags = () => {
        const result = [];
        for(let key in toggle) {
            const className = toggle[key]? 'selected' : '';
            const button = <button id={key} className={className} onClick={toggleSwitch} key={key}>{key}</button>;
            result.push(button);
        }
        return result;
    }

    return (
        <div>
            <div>
                {renderTags()}
            </div>
            <br/>
            <div>
                <Photos DATA={photos}/>
            </div>
        </div>
    )
}

export default Contents;