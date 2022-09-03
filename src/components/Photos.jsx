function Photos() {

    const photographys = [
        {
            fileName: 'demo01',
            tempFolder: '8ckCbZJ',
            className: ['landscape', 'paris'],
        },
        {
            fileName: 'demo02',
            tempFolder: 'y0CjZyz',
            className: ['building'],
        },
        {
            fileName: 'demo03',
            tempFolder: 'f0hH0KF',
            className: ['building'],
        },
        {
            fileName: 'demo04',
            tempFolder: 's2CLbxx',
            className: ['building'],
        },
        {
            fileName: 'demo05',
            tempFolder: 'YNvZSP3',
            className: ['building'],
        },
        {
            fileName: 'demo06',
            tempFolder: 'r6SvT2k',
            className: ['building'],
        },
        {
            fileName: 'demo07',
            tempFolder: 'xMGngCW',
            className: ['building'],
        },
        {
            fileName: 'demo08',
            tempFolder: 'KKcZcmC',
            className: ['building'],
        },
        {
            fileName: 'demo09',
            tempFolder: 'yVTwRbY',
            className: ['building'],
        },
        {
            fileName: 'demo10',
            tempFolder: 'VpC63wt',
            className: ['building'],
        },
        {
            fileName: 'demo11',
            tempFolder: '85hhHnd',
            className: ['building'],
        },
        {
            fileName: 'demo12',
            tempFolder: 'qdXZwCD',
            className: ['building'],
        },
        {
            fileName: 'demo13',
            tempFolder: '6nZjRc3',
            className: ['building'],
        },
        

    ]
    const imgs = [];
    photographys.forEach((photography) => {
        const src = "https://i.ibb.co/"+photography.tempFolder+"/"+photography.fileName+".png";
        let className = "";
        photography.className.forEach((item) => {
            className += item + " ";
        });
        const img = <img src={src} alt={photography.fileName} border="5" className={className}/>;
        imgs.push(img);
    });

    return (
        <div>
            {imgs}
        </div>
    )
}

export default Photos;