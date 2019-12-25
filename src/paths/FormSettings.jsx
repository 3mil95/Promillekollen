import React, { Component } from 'react';

class FormSettings extends Component {
    state = {  }

    map = {
        "man": 1,
        "woman": 2,
        1:"man",
        2:"woman"
    }

    componentDidMount() {
        const gender = this.map[localStorage.getItem('userGender')]
        const weight = localStorage.getItem('userWeight')
        const length = localStorage.getItem('userLength')
        this.setState({
            gender:gender,
            weight:weight,
            length:length
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('userWeight', this.state.weight)
        localStorage.setItem('userLength', this.state.length)
        localStorage.setItem('userGender', this.map[this.state.gender])
    } 
    
    handleChange = (e) => {
        if (e.target.name === "gender")
            this.setState({gender: e.target.value});
        if (e.target.name === "weight")
            this.setState({weight: e.target.value});
        if (e.target.name === "length")
            this.setState({length: e.target.value});
    }

    render() { 
        return ( 
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
            <label>{`${this.map[this.state.gender]}`}</label><br/><input min="1" max="2" value={this.state.gender} type="range" name="gender"/><br/>
            <label>{`${this.state.weight} kg`}</label><br/><input min="40" max="220" value={this.state.amount} type="range" name="weight"/><br/>
            <label>{`${this.state.length} cl`}</label><br/><input min="55" max="220" value={this.state.strength} type="range" name="length"/><br/>
            <input type="submit" value="Klar"/>
        </form>
        );
    }
}
 
export default FormSettings;