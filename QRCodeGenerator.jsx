import { useState } from "react"

export const QRCodeGenerator = () => {
    const [img, setImg]=useState("");
    const [qrdata, setQrdata]=useState("https://github.com/Raj2k01");
    const [qrsize, setQrsize]=useState("150");

    async function generateQR(){
        const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x${qrsize}&data=${encodeURIComponent(qrdata)}`;
        setImg(url);
    }
    function downloadQR(){
        fetch(img).then((Response)=>Response.blob()).then((blob)=>{
            const link=document.createElement("a");
            link.href=URL.createObjectURL(blob);
            link.download="QRCode.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link); 
        });
    }
    
    return (
    <div className="app-container">
        <h1>QR CODE GENERATOR</h1>
        <img src={img} alt="" className="qr-image" />
        <div>
            <label htmlFor="datatype" className="input-label">
                Enter the data:  
            </label>
            <input type="text" value={qrdata} id="datatype" placeholder="Enter the data for QRcode" onChange={(e)=>setQrdata(e.target.value)}/>
            <label htmlFor="sizeInput" className="input-label">Image size in Pixels(eg.300)</label>
            <input type="text" value={qrsize} id="size-input" placeholder="Enter the image size" onChange={(e)=>setQrsize(e.target.value)}/>
            <button className="generate-button" onClick={generateQR}>Generate QR</button>
            <button className="download-button">Download QR</button>
        </div>
    </div>
    )
}
