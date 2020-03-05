import React, { Component } from 'react';
import styles from './Home.module.css'

class Home extends Component {

    state = {
       name: ''
    }

    async componentDidMount() {
    const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=bloody_mary`
    const response = await fetch(apiUrl);
    const data = await response.json();
    // this.setState({beverage: data.})
    console.log(data);
    }

    render() {
        return( <div>
            {this.state.beverage}
        </div>)
    }
}






export default Home;    

