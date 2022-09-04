

const Photos = ({ DATA }) => {
    let imgs = [];
    DATA.forEach((photo) => {
        const src = "https://i.ibb.co/"+photo.tempFolder+"/"+photo.fileName+".png";
        let className = "";
        photo.className.forEach((item) => {
            className += item + " ";
            
        });
        if(photo.isShow) {
            const img = <img src={src} alt={photo.fileName} border="5" className={className} key={photo.tempFolder}/>;
            imgs.push(img);
        }
    });
    return (
        <>
            {imgs}
        </>
    )
}
export default Photos;