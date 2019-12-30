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

    handleSubmit = () => {
        this.props.handleAdd(this.state.amount, this.state.strength);
    } 

    onSubmit = (e) => {
        e.preventDefault();
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
                <div className="modal-page">
                    <button className="close-button" onClick={this.handleClose}>Avbryt</button>
                    <form onChange={this.handleChange} onSubmit={this.onSubmit} className='forms'>
                        <div>
                            {(index !== 0) ? <button onClick={() => this.handleType(-1)}>-</button> : null}
                            <label>{this.types[index].name}</label>
                            {(index !== this.types.length-1) ? <button onClick={() => this.handleType(1)}>+</button> : null}
                        </div>
                        <label>{`${this.state.amount} cl`}</label><br/>
                        <div class="slidecontainer">
                            <input min="1" max="100" value={this.state.amount} className="slider" type="range" name="amount"/>
                        </div><br/>
                        <label>{`${this.state.strength}%`}</label><br/>
                        <div class="slidecontainer">
                            <input min="1" max="100" value={this.state.strength} className="slider" step='0.1' type="range" name="strength"/><br/>
                        </div>
                    </form>
                    <button onClick={this.handleSubmit} className="confirm-button">Klar</button>
                </div>
            </div>
        );
    }
}
 
export default AddDrink;