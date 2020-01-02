import React, { Component } from 'react';
import HistoryButton from '../components/HistoryButton';

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
                {this.props.occasions.map((occasion, i) => (
                    <HistoryButton key={i} occasion={occasion}/>
                ))}
                <button className="close-button" onClick={this.clear}>Clear</button>
                </div>
            </div>
         );
    }
}
 
export default History;