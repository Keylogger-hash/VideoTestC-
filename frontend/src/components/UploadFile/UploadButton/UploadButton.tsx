import './UploadButton.css';
import { useRef } from 'react';
import { useState } from 'react';
import ResizeOptions from '../../ResizeOptions/ResizeOptions';
export interface IShowSidebar{
    showSidebar:Boolean,
    setShowSidebar: Boolean
}


export function UploadButton(){
    const [showSidebar,setShowSidebar] = useState<IShowSidebar|undefined>(undefined);
    let inputRef = useRef<HTMLInputElement>(null);
    function handleClick(){
        if (inputRef.current !== null){
            inputRef.current.click();
        }
    }
    function showComponent(){
        
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