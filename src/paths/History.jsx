import React, { Component } from 'react';
import HistoryButton from '../components/HistoryButton';
import createGraph from './../GraphCreater';
import Graph from './Graph';
import AddDrink from './AddDrink';

class History extends Component {
    state = {  
        occasion: null,
        pos: 0,
        end: 0,
        start: 0,
        perMille: null
    }

    clear = () => {
        localStorage.clear()
    }

    pickOccaion = (index) => {
        const perMille = createGraph(this.props.occasions[index].drinks)
        this.setState({
            occasion: this.props.occasions[index],
            pos: perMille.start,
            end: perMille.end,
            start: perMille.start,
            perMille: perMille.perMille
        })
    }



    handleAdd = (index, drink) => {
        this.setState({
          adding: true,
          index: index,
          drink: drink
        })
    }

    handleDrink = () => {
        this.setState({
            adding: false
        })
    }

    setPos = (pos) => {
        this.setState({
          pos:pos
        })
      }

    render() {
        console.log() 
        return ( 
            <div className="page">
                {(this.state.occasion) ?
                <Graph currentTime={null} pos={this.state.pos} end={this.state.end} start={this.state.start} 
                setPos={this.setPos} perMille={this.state.perMille}
                handleAdd={this.handleAdd} drinks={this.state.occasion.drinks}/>
                :
                <React.Fragment>
                <h1>History</h1>
                <div className="history">
                {this.props.occasions.map((occasion, i) => (
                    <HistoryButton key={i} index={i} occasion={occasion} pickOccaion={this.pickOccaion}/>
                ))}
                <div className="history-button">
                    <button className="close-button" onClick={this.clear}>Clear</button>
                </div>
                </div>
                </React.Fragment>}
                {(this.state.adding) ? 
                <AddDrink handleAdd={this.handleDrink} handleEdit={this.handleDrink} handleRemove={this.handleDrink} drink={this.state.drink} index={this.state.index}></AddDrink>
                : null}
            </div>
         );
    }
}
 
export default History;