import React, { Component } from 'react';

class HistoryButton extends Component {
    state = {  }
    render() { 
        return (  
            <button className="history-button" onClick={() => this.props.pickOccaion(this.props.index)}>
                <p>{`${this.props.occasion.year}-${this.props.occasion.month+1}-${this.props.occasion.date}`}</p>
                <p>0.05</p>
            </button>
        );
    }
}
 
export default HistoryButton;