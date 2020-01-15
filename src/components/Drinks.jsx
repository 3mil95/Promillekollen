import React, { Component } from 'react';

class Drinks extends Component {
    state = {  }

    imgMap = {
        'Öl':"icons/ol.svg",
        "Vin":"icons/vin.svg",
        "Drink":"icons/drink.svg",
        "Cider":"icons/cider.svg",
        "Sprit":"icons/sprit.svg"
    }

    render() { 
        //console.log("pd", this.props.drinks)
        if (!this.props.drinks) {
            return null
        }
        return ( 
            <div className="drinks">
                <div className="drink-scroll">
                    {this.props.drinks.map((drink, i) => (
                        <button key={i} className="drink" onClick={() => this.props.handleEdit(i, drink)}>
                            <img src={this.imgMap[drink.type]} height='50px' alt="hej"/>
                            {Math.floor((drink.time/60)%24)}:{(drink.time%60 < 10) ? `0${drink.time%60}` :  drink.time%60}
                        </button>
                    ))}
                </div>
            </div>
        );
    }
}
 
export default Drinks;