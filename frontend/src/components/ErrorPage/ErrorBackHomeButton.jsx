import './ErrorBackHomeButton.css';
import { Link } from 'react-router-dom';
export default function ErrorButton(){
    return (
        <div className="error-upload-button">
            <Link to={`/`}>
                <span>
                    Back to home
                </span>
            </Link>
        </div>
    )
}