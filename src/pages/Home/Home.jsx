import React, { Component } from 'react';
import styles from './Home.module.css'

class Home extends Component {

    state = {
       drinks: [],
    //    favorite: false
    }

    handleGetDrinks = async searchTerm => {
        try {
       const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
        const response = await fetch(apiUrl);
        const { drinks } = await response.json();
        this.setState({ drinks }); 
    } catch (error) {
        alert('Drink Not Found');
    }

    
        
    } 
    componentDidMount() {
        this.handleGetDrinks('');
        // this.addFavorite()
    }
    
    //  addFavorite = async () => {
    //    await this.setState({favorite: true})
    // }

    render() {
        return( 
        <div>
            <form>
            <input type='text' placeholder='Enter Drink'></input>
            <button onClick={() => this.handleGetDrinks('')}>Submit</button>
            </form>

            <h1>Common Drinks:</h1>
            <button onClick={() => this.handleGetDrinks('margarita')}>Margarita</button>
            <button onClick={() => this.handleGetDrinks('bloody mary')}>Bloody Mary</button>
            <button onClick={() => this.handleGetDrinks('cosmopolitan')}>Cosmopolitan</button>
            <button onClick={() => this.handleGetDrinks('mojito')}>Mojito</button>
            <button onClick={() => this.handleGetDrinks('martini')}>Martini</button>




            {this.state.drinks.map(({idDrink, strDrink, strInstructions, 
            strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7,
            strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7}) => (
              
              <section key={idDrink} className={styles.section}>
                    <h1>{strDrink}</h1>
                    <p>{strInstructions}</p>
                    
                    <ul>
                    <li>{strIngredient1} - {strMeasure1} </li>
                    <li>{strIngredient2} - {strMeasure2}</li>
                    <li>{strIngredient3} - {strMeasure3}</li>
                    <li>{strIngredient4} - {strMeasure4}</li>
                    <li>{strIngredient5} - {strMeasure5}</li>
                    <li>{strIngredient6} - {strMeasure6}</li>
                    <li>{strIngredient7} - {strMeasure7}</li>


                    </ul>
                {/* <button onClick={() => this.addFavorite()}>Add to Favorites</button> */}
                </section> 
            ))}
        </div>)
    }
}






export default Home;    

