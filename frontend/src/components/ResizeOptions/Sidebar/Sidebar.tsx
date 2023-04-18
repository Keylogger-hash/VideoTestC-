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
                    40
                </div>
            </div>
            <div className='sidebar-controls'>  
                <div>
                    Height(px)
                </div>
                <div>
                    40
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