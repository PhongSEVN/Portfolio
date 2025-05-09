import { Link } from 'react-router-dom';
import './style.css';
function Error404() {
    return (
        <div className="error404">
            <h1 className='title'>404 - You are following the wrong path bro</h1>
            <h2 className='title'>Back to home</h2>
            <Link to="/" className='click'>Click here</Link>
        </div>
    );
}
export default Error404;