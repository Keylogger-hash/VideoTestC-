import './UploadButton.css';
import { useRef } from 'react';
import { useState } from 'react';
import ResizeOptions from '../../ResizeOptions/ResizeOptions';
import { useNavigate } from 'react-router-dom';
export interface IShowSidebar{
    showSidebar:Boolean,
    setShowSidebar: Boolean
}



export function UploadButton(){
    const [showSidebar,setShowSidebar] = useState<IShowSidebar|undefined>(undefined);
    let inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate()
    function handleClick(){
        if (inputRef.current !== null){
            inputRef.current.click();
            console.log('click')
        }

    }
    function showComponent(){
        console.log('upload')    
        if (inputRef.current !== null && inputRef.current.files !== null){
            const fileObject = inputRef.current.files[0]
            const fileUrl = URL.createObjectURL(inputRef.current.files[0]);
            console.log(fileUrl)
            
            navigate('/resize-options',{state:{fileUrl,fileObject}})
    
        }            
    }
    return (
        <div>
            <div onClick={handleClick} className="upload-button">
                <span >
                    Select files
                </span>
            </div>
            <div>
                <input accept=".mp4,.webm" multiple onChangeCapture={showComponent} ref={inputRef} type='file' className='upload-button-input'/>
            </div>

        </div>
    )

}