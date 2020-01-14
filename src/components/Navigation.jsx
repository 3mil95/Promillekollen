import React, { Component } from 'react';
import Promille from '../icons/Promille';
import Historik from '../icons/Historik';
import Installningar from '../icons/Installningar';

class Navigation extends Component {
    state = {  }

    handlePage = (page) => {
        this.props.handlePage(page)
        this.props.history.push(`/${page}`)
    }

    render() { 
        const page = this.props.location.pathname
        return (  
            <div className="nav">
                <button onClick={() => this.handlePage("Graph")} className={(page === "/Graph") ? "open" : "close"}>
                    <Promille/>  
                Promille</button>
                <button onClick={() => this.handlePage("History")} className={(page === "/History") ? "open" : "close"}>
                    <Historik/>
                Historik</button>
                <button onClick={() => this.handlePage("Settings")} className={(page === "/Settings") ? "open" : "close"}>
                    <Installningar/>
                Settings</button>
            </div>
        );
    }
}
 
export default Navigation;