import React, { Component } from 'react';

class AddDrink extends Component {
    state = { 
        type: "",
        strength: 4.5,
        amount: 33,
        index: 0
    }

    types = [
        {name:"Öl", strength:5, amount: 40},
        {name:"Vin", strength:12, amount: 15},
        {name:"Drink", strength:40, amount: 4},
        {name:"Cider", strength:5, amount: 33},
        {name:"Sprit", strength:40, amount: 4}
    ]

    componentDidMount() {
        this.handleType(0)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAdd(this.state.amount, this.state.strength);
    } 

    handleClose = () => {
        this.props.handleAdd(null, null);
    }

    handleChange = (e) => {
        if (e.target.name === "amount")
            this.setState({amount: e.target.value});
        if (e.target.name === "strength")
            this.setState({strength: e.target.value});
    }

    handleType = (dir) => {
        const index = this.state.index + dir
        this.setState({
            index: index,
            amount: this.types[index].amount,
            strength: this.types[index].strength
        })
    }

    render() { 
        const index = this.state.index
        return ( 
            <div className='modal'>
                <button onClick={this.handleClose}>x</button>
                <div>
                    {(index !== 0) ? <button onClick={() => this.handleType(-1)}>-</button> : null}
                    <label>{this.types[index].name}</label>
                    {(index !== this.types.length-1) ? <button onClick={() => this.handleType(1)}>+</button> : null}
                </div>
                <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                    <label>{`${this.state.amount} cl`}</label><br/><input min="1" max="100" value={this.state.amount} type="range" name="amount"/><br/>
                    <label>{`${this.state.strength}%`}</label><br/><input min="1" max="100" value={this.state.strength} step='0.1' type="range" name="strength"/><br/>
                    <input type="submit" value="Klar"/>
                </form>
            </div>
        );
    }
}
 
export default AddDrink;