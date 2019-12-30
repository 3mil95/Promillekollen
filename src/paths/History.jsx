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
                <p>2019-1-3</p>
                <p>2019-1-3</p>
                <p>2019-1-3</p>
                <p>2019-1-3</p>
                <p>2019-1-3</p>
                <p>2019-1-3</p>
                <p>2019-1-3</p>
                <p>2019-1-3</p>
                <p>2019-1-3</p>
                <p>2019-1-3</p>
                <p>2019-1-3</p>
                <p>2019-1-3</p>
                <p>2019-1-3</p>
                <p>2019-1-3</p>
                <p>2019-1-3</p>
                <p>2019-1-3</p>
                <p>2019-1-3</p>
                <p>2019-1-3</p>
                <p>2019-1-3</p>
                <p>2019-1-3</p>
                <p>2019-1-3</p>
                <button onClick={this.clear}>Clear</button>
                </div>
            </div>
         );
    }
}
 
export default History;