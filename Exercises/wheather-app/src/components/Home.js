import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props) {
        super (props);
        this.state = {
            searchField : '',
            currLocation : 'Tel-Aviv',
            searchList: [],
            

        }
    }
    handleSearch = () => {
        fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=OjyrwPsH1P4gCAuaIG1H0X7kgPeJUt5X&q=${this.state.searchField}`)
            .then(data => data.json())
            .then(data => {
                this.setState({searchList:data})
            })
            .catch(error => console.error(error))
         }
    handlSelect = (e) => {
        console.log('Selected-Location:', e.target.value)
    }
  render() {
    return (
        <div style = {{border: '5px solid', borderColor: 'gray'}}>
            <div>Home Page</div>
            <div>
                <input type = 'text' placeholder = 'insert location' onChange={(e) => this.setState({searchField: e.target.value})}/>
                <button onClick={this.handleSearch}> Search</button><br></br>
                <select className="form-select" value="default" aria-label="Default select example" onChange={(e)=>this.handlSelect(e)}>
                    {this.state.searchList.map((item,i) => {
                        return (
                            <option key ={i} value={item.LocalizedName}>{item.LocalizedName}</option> 
                        )
                    })}
                </select>
            </div>
            <div> {/* required indication if it's already saved in favorites. */}
                <h3>{this.state.currLocation}</h3>
            </div> 
            <div>
                <h2>current wheather:</h2>
            </div>
            <div>5 days forecast</div>
        </div>
    )
  }
}
