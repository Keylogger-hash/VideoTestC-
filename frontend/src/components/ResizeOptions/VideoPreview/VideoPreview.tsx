import './VideoPreview.css';
import { Ref,useRef } from 'react';
export default function VideoPreview(){
    let sourceRef = useRef<HTMLSourceElement>(null);
    let inputRef = useRef<HTMLInputElement>(null);
    let videoRef = useRef<HTMLVideoElement>(null);
    function onChange(){
        console.log(sourceRef)
        console.log(inputRef)
        if (inputRef.current!==null && sourceRef.current!==null){
            if( sourceRef.current.src!==null && videoRef.current!==null && inputRef.current.files){

                console.log(inputRef.current.files)
                const fileUrl = URL.createObjectURL(inputRef.current.files[0]);
                console.log(fileUrl)
                videoRef.current.src = fileUrl;
            }
        } else{
            alert('Error')
        }
    }
    return (
        <div className="video-preview">
            <input ref={inputRef} onChangeCapture={onChange} type="file" multiple accept=".mp4"></input>
            <video width="400px" ref={videoRef} controls>
                <source  ref={sourceRef}></source>
            </video>
        </div>
    )
}