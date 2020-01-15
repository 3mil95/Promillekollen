import React, { Component } from 'react';

class HistoryButton extends Component {
    state = {  }

    getTextClass = (value) => {
        if (value > 0.6) {
            return "#993344"
        } else {
            return "#4CAF50"
        }
    }

    render() { 
        const {occasion, index, max} = this.props
        return (  
            <button className={`history-button`} style={{color: `${this.getTextClass(max)}`}} onClick={() => this.props.pickOccaion(index)}>
                <p>{`${occasion.year}-${occasion.month+1}-${occasion.date}  ${Math.round(max * 1000) / 1000}‰`}</p>
                <p style={{color: `#888888`}}>></p>
            </button>
        );
    }
}
 
export default HistoryButton;