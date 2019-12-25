import React, { Component } from 'react';

class AddDrink extends Component {
    state = { 
        strength: 4.5,
        amount: 33
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAdd(this.state.amount, this.state.strength);
    } 

    handleChange = (e) => {
        if (e.target.name === "amount")
            this.setState({amount: e.target.value});
        if (e.target.name === "strength")
            this.setState({strength: e.target.value});
    }

    render() { 
        return ( 
            <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                <label>{`${this.state.amount} cl`}</label><br/><input min="1" max="100" value={this.state.amount} type="range" name="amount"/><br/>
                <label>{`${this.state.strength}%`}</label><br/><input min="1" max="100" value={this.state.strength} step='0.1' type="range" name="strength"/><br/>
                <input type="submit" value="Klar"/>
            </form>
        );
    }
}
 
export default AddDrink;