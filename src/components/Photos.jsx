import './Photos.css';
import Tags from './Tags.jsx';

const photographys = [
    {
        fileName: 'demo01',
        tempFolder: '8ckCbZJ',
        className: ['landscape', 'paris'],
    },
    {
        fileName: 'demo02',
        tempFolder: 'y0CjZyz',
        className: ['building', 'pattern'],
    },
    {
        fileName: 'demo03',
        tempFolder: 'f0hH0KF',
        className: ['building', 'pattern'],
    },
    {
        fileName: 'demo04',
        tempFolder: 's2CLbxx',
        className: ['building', 'pattern'],
    },
    {
        fileName: 'demo05',
        tempFolder: 'YNvZSP3',
        className: ['building', 'pattern'],
    },
    {
        fileName: 'demo06',
        tempFolder: 'r6SvT2k',
        className: ['building', 'london'],
    },
    {
        fileName: 'demo07',
        tempFolder: 'xMGngCW',
        className: ['park'],
    },
    {
        fileName: 'demo08',
        tempFolder: 'KKcZcmC',
        className: ['landscape', 'dover'],
    },
    {
        fileName: 'demo09',
        tempFolder: 'yVTwRbY',
        className: ['city', 'paris'],
    },
    {
        fileName: 'demo10',
        tempFolder: 'VpC63wt',
        className: ['city', 'paris'],
    },
    {
        fileName: 'demo11',
        tempFolder: '85hhHnd',
        className: ['city', 'paris'],
    },
    {
        fileName: 'demo12',
        tempFolder: 'qdXZwCD',
        className: ['city', 'paris'],
    },
    {
        fileName: 'demo13',
        tempFolder: '6nZjRc3',
        className: ['city', 'paris'],
    },
]
const tagList = [];

function Photos() {

    const imgs = [];
    photographys.forEach((photography) => {
        const src = "https://i.ibb.co/"+photography.tempFolder+"/"+photography.fileName+".png";
        let className = "";
        photography.className.forEach((item) => {
            className += item + " ";
            if(!tagList.includes(item)) {
                tagList.push(item);
            }
        });
        const img = <img src={src} alt={photography.fileName} border="5" className={className} key={photography.tempFolder}/>;
        imgs.push(img);
    });

    
    return (
        <div>
            <div>
                {tagList.map(item => (
                    <Tags item={item} key={item}/>
                ))}
            </div>
            <br/>
            <div>
                {imgs}
            </div>
        </div>
    )
}

export default Photos;