import './Sidebar.css';
import SidebarTitle from './SidebarTitle/SidebarTitle';
export function Sidebar(){
    
    return (
        <div className='upload-sidebar active'>
            <div>
                Resize Video
            </div>
            <div className='sidebar-controls'>
                <div>
                    Width(px)
                </div>
                <div>
                    <input min={20} max={4000} step={1} defaultValue={20} type="number"></input>
                </div>
            </div>
            <div className='sidebar-controls'>  
                <div>
                    Height(px)
                </div>
                <div>
                    <input min={20} max={4000} step={1} defaultValue={20} type="number"></input>
                </div>
            </div>
            <div className='sidebar-button'>
                <span>
                    Resize video files
                </span>
            </div>
        </div>
    )
}