import React, { Component } from 'react';
import './App.css';
import Graph from './paths/Graph';
import AddDrink from './paths/AddDrink';
import FormSettings from './paths/FormSettings';
import History from './paths/History';
import createGraph from './GraphCreater';

class App extends Component {
  state = { 
    occasions: [],
    adding: false,
    page: "Graph",
    currentTime: 0,
    currentDrinks: [],
    perMille: [],
    pos: 0
  }

  componentDidMount() {
    this.initLocalStorage()
    const occasions = JSON.parse(localStorage.getItem('occasions'))
    const time = this.getCurrentTime(occasions)
    
    this.setState({
      occasions: occasions,
      currentTime: time,
      currentDrinks: this.getCurrentDrinks(occasions),
      perMille: createGraph(this.getCurrentDrinks(occasions)).perMille,
      end: createGraph(this.getCurrentDrinks(occasions)).end,
      start: createGraph(this.getCurrentDrinks(occasions)).start,
      pos: time
    })
    setInterval(() => {
      this.setState({
        currentTime: this.getCurrentTime(this.state.occasions)
      })
    }, 60 * 1000);
    console.log(this.state.occasions)
  }

  initLocalStorage = () => {
    //localStorage.clear()
    if (!localStorage.getItem('userWeight')) {
      localStorage.setItem('userWeight', '80')
    }
    if (!localStorage.getItem('userLength')) {
      localStorage.setItem('userLength', '190')
    }
    if (!localStorage.getItem('userGender')) {
      localStorage.setItem('userGender', 'man')
    }
    if (!localStorage.getItem('occasions')) {
      localStorage.setItem('occasions', JSON.stringify([]))
    }
  }

  addDrink = (amount, strength) => {
    if (!amount) {
      this.setState({adding: false})
      return
    }
    const date = new Date()
    const occasions = this.state.occasions
    let index = this.getCurrentOccasion(occasions)
    if (index === null) {
      const newOccasions = {year: date.getFullYear(),month: date.getMonth(), date:date.getDate(),drinks:[]}
      occasions.push(newOccasions)
      index = occasions.length -1
    }
    console.log(occasions);
    
    const time = this.getCurrentTime(occasions)
    console.log(time);
    
    if (!time) {
      return
    }    
    const newDrink = {time:time, amount:parseInt(amount), strength:parseInt(strength)}
    occasions[index].drinks.push(newDrink)
    this.setState({
      adding: false,
      occasions:occasions,
      currentTime: this.getCurrentTime(occasions),
      currentDrinks: this.getCurrentDrinks(occasions),
      perMille: createGraph(this.getCurrentDrinks(occasions)).perMille,
      end: createGraph(this.getCurrentDrinks(occasions)).end,
      start: createGraph(this.getCurrentDrinks(occasions)).start,
      pos: this.getCurrentTime(occasions)
    })
    localStorage.setItem('occasions', JSON.stringify(occasions))
  }

  handleAdd = (e) => {
    this.setState({
      adding: true
    })
  }

  setPos = (pos) => {
    this.setState({
      pos:pos
    })
  }

  handlePage = (page) => {
    this.setState({
      page: page
    })
  }

  getAddDate = (occasions) => {
    console.log("add", occasions);
    
    if (occasions.length === 0) {
      return null
    }
    const i = occasions.length-1;
    const date = new Date()
    const d1 = new Date(occasions[i].year,occasions[i].month,occasions[i].date)
    const d2 = new Date( date.getFullYear(),date.getMonth(),date.getDate())
    return (d2-d1)/(60*1000)
  }

  getCurrentOccasion = (occasions) => {
    const i = occasions.length-1;
    if (occasions.length < 1) {
      return null
    }
    const date = new Date()
    const d1 = new Date(occasions[i].year,occasions[i].month,occasions[i].date)
    const d2 = new Date(date.getFullYear(),date.getMonth(),date.getDate())
    if  (((d1-d2)/ (1000 * 3600 * 24) === -1 && date.getHours() < 10) || ((d1-d2) === 0)) {
      return i
    }
    return null
  }

  getCurrentDrinks = (occasions) => {
    const drinks = occasions[this.getCurrentOccasion(occasions)]
    if (drinks)
      return drinks.drinks
    return []
  }

  getCurrentTime = (occasions) => {
    console.log("hej", this.getAddDate(occasions));
    if (this.getAddDate(occasions) === null) {
      return null
    }

    const date = new Date()
    const h = date.getHours() 
    const min = date.getMinutes()
    return h*60+min + this.getAddDate(occasions)
  }

  render() {
    return ( 
      <div className="App">
        <div className="page">
          {(this.state.page === "Graph") ? <Graph currentTime={this.state.currentTime} pos={this.state.pos} end={this.state.end} start={this.state.start} 
          setPos={this.setPos} perMille={this.state.perMille} handleAdd={this.handleAdd}/> : null }
          {(this.state.page === "History") ? <History></History> : null }
          {(this.state.page === "Settings") ? <FormSettings></FormSettings> : null }
          {(this.state.adding) ? <AddDrink handleAdd={this.addDrink}></AddDrink>: null}
        </div>
        <div className="nav">
          <button onClick={() => this.handlePage("Graph")}>Graph</button>
          <button onClick={() => this.handlePage("History")}>History</button>
          <button onClick={() => this.handlePage("Settings")}>Settings</button>
        </div>
      </div>
     );
  }
}
 
export default App;
