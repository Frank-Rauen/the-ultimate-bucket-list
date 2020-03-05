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
            {this.state.drinks.map(({idDrink, strDrink, strInstructions, 
            strIngredient1, strIngredient2, strIngredient3, strIngredient4, strMeasure1, strMeasure2, strMeasure3, strMeasure4}) => (
                <div key={idDrink} className='drinks-container'>
                    {strDrink}
                    {strInstructions}
                    {strIngredient1}
                    {strMeasure1}
                    {strIngredient2}
                    {strMeasure2}
                    {strIngredient3}
                    {strMeasure3}
                    {strIngredient4}
                    {strMeasure4}
                </div>
            ))}
        </div>)
    }
}






export default Home;    

