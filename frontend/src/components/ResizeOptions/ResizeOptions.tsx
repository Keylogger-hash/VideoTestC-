
import './ResizeOptions.css';
import { Sidebar } from './Sidebar/Sidebar';
import VideoPreview from './VideoPreview/VideoPreview';


export default function ResizeOptions(){
    return (
        <div className='resize-container'>
            <VideoPreview ></VideoPreview>
            <Sidebar></Sidebar>
        </div>
    )
}