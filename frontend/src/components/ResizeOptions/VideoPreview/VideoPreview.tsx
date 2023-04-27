import './VideoPreview.css';
import { Ref,useRef } from 'react';
import { useLocation } from 'react-router-dom';

interface  IVideoState{
    videoUrl:string 
}
export default function VideoPreview(){
    let sourceRef = useRef<HTMLSourceElement>(null);
    let videoRef = useRef<HTMLVideoElement>(null);
    let location = useLocation()
    console.log("File:",location.state.fileUrl)
    let videoUrl = location.state.fileUrl
    let videoObject = location.state.fileObject
    console.log("VideoUrl:",location.state.fileUrl)
    console.log("VideoObject:",videoObject)

    return (
        <div className="video-preview" >
            <video width="400px" ref={videoRef} controls>
                <source src={videoUrl} ref={sourceRef} ></source>
            </video>
        </div>
    )
}