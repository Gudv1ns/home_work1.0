import React from 'react';
import { fetchTask } from '../../Api/Api.js';


const AdminPanel= (props) => {
    return (
        <div className= 'AdminPanel'>
            <button onClick= { () => props.getServerData(fetchTask()) }>Get Data</button>
        </div>
    );
};

export default AdminPanel;