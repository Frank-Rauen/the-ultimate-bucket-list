import React, { Component } from 'react';
import styles from './Randomizer.module.css'

class Randomizer extends Component {

    state = {
       drinks: [],
    //    favorite: false
    }

    handleGetDrinks = async () => {
        try {
       const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
        const response = await fetch(apiUrl);
        const { drinks } = await response.json();
        this.setState({ drinks }); 
    } catch (error) {
        alert('Drink Not Found');
    }

    
        
    } 
    componentDidMount() {
        this.handleGetDrinks('a');
        // this.addFavorite()
    }
    
    //  addFavorite = async () => {
    //    await this.setState({favorite: true})
    // }

    render() {
        return( 
        <div className={styles.page}>
            
            <h1>Search by Letter:</h1>
            <button className={styles.button} onClick={() => this.handleGetDrinks()}>Get Random Cocktail</button>
            


            

            <div className={styles.flex}>
            {this.state.drinks.map(({idDrink, strDrink, strInstructions, 
            strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7,
            strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strDrinkThumb}) => (
              
              <section key={idDrink} className={styles.section}>
                    <h1>{strDrink}</h1>
                    <p>{strInstructions}</p>
                    <img src={strDrinkThumb} alt="Drink Picture"/>
                    
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
            </div>
        </div>)
    }
}






export default Randomizer;