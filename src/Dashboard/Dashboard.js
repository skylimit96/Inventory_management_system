import './Dashboard.css';
import useCurrentDate from '../utils/currentDate';

function Dashboard() {
    const date = useCurrentDate();
    return(
        <>
        <div className='dashboard'>
            <div className='dashboard-header'>
                <div className='welcome-p'>
                    <h4>Hello, {}</h4>
                    <p className='welcome-text'>Welcome to your business inventory management dashboard</p>
                </div>
                <div className='date'>
                    <p>{ useCurrentDate() }</p>
                </div>
            </div>
            
            <div className='dashboard-cards'>
                <div className='card'>
                    card 1
                </div>
                <div className='card'>
                    card 2
                </div>
                <div className='card'>
                    card 3
                </div>
            </div>
        </div>
        </>
    );
}

export default Dashboard;