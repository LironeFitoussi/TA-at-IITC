import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <h1>Welcome to the Home component!</h1>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <Link to='/admin'>Admin Dashboard</Link>
                <Link to='/developer'>Developer Dashboard</Link>
                <Link to='/highRanked'>High Ranked</Link>
            </div>
            {/* Add your content here */}
        </div>
    );
};

export default Home;