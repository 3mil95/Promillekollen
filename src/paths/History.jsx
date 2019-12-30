import React, { Component } from 'react';

class History extends Component {
    state = {  }

    clear = () => {
        localStorage.clear()
    }

    render() { 
        return ( 
            <div className="page">
                <h1>History</h1>
                <div className="history">
                <p>TODO</p>
                <button onClick={this.clear}>Clear</button>
                </div>
            </div>
         );
    }
}
 
export default History;