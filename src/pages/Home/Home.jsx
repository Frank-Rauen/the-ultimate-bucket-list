import React, { Component } from 'react';
import styles from './Home.module.css'

class Home extends Component {

    state = {
       drinks: []
    }

    handleGetDrinks = async searchTerm => {
        const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
        const response = await fetch(apiUrl);
        const { drinks } = await response.json();
        this.setState({ drinks });
    } 
    componentDidMount() {
        this.handleGetDrinks('margarita');
    }

    render() {
        return( 
        <div>
            <button onClick={() => this.handleGetDrinks('margarita')}>Marg</button>
            <button onClick={() => this.handleGetDrinks('bloody mary')}>Bloody Mary</button>
            {this.state.drinks.map(({idDrink, strDrink}) => (
                <div key={idDrink}>
                    {strDrink}
                </div>
            ))}
        </div>)
    }
}






export default Home;    

