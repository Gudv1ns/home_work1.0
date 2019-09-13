import React,{Component} from 'react';
import AdminPanel from '../../Components/AdminPanel/AdminPanel';
import DataList from '../../Components/DataList/DataList';

class App extends Component {

    constructor(props) {
        super(props);
        this.state= {
            serverData: [],
        };
    }

    getServerData = (serverData) => {
        serverData.then((serverData) => {
            return serverData.json();
        })
        .then((data) => {
            this.setState( {
                serverData: [data, this.state.serverData]
            } );
        });
    }

    render() {
        return (
            <div>
                <AdminPanel 
                    getServerData= { this.getServerData }
                />
                <DataList
                    dataList= { this.state.serverData }
                />
            </div>
        );
    };
};

export default App;