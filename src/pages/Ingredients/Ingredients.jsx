import React, { Component } from 'react';
import styles from './Ingredients.module.css'

class Ingredients extends Component {

    state = {
       drinks: [],
    //    favorite: false
    }

    handleGetDrinks = async searchTerm => {
        try {
       const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchTerm}`
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
            <button className={styles.button} onClick={() => this.handleGetDrinks('a')}>A</button>
            <button className={styles.button} onClick={() => this.handleGetDrinks('b')}>B</button>
            <button className={styles.button} onClick={() => this.handleGetDrinks('c')}>C</button>
            <button className={styles.button} onClick={() => this.handleGetDrinks('d')}>D</button>
            <button className={styles.button} onClick={() => this.handleGetDrinks('e')}>E</button>
            <button className={styles.button} onClick={() => this.handleGetDrinks('f')}>F</button>
            <button className={styles.button} onClick={() => this.handleGetDrinks('g')}>G</button>
            <button className={styles.button} onClick={() => this.handleGetDrinks('h')}>H</button>
            <button className={styles.button} onClick={() => this.handleGetDrinks('i')}>I</button>
            <button className={styles.button} onClick={() => this.handleGetDrinks('j')}>J</button>
            <button className={styles.button} onClick={() => this.handleGetDrinks('k')}>K</button>
            <button className={styles.button} onClick={() => this.handleGetDrinks('l')}>L</button>
            <button className={styles.button} onClick={() => this.handleGetDrinks('m')}>M</button>
            <button className={styles.button} onClick={() => this.handleGetDrinks('n')}>N</button>
            <button className={styles.button} onClick={() => this.handleGetDrinks('o')}>O</button>
            <button className={styles.button} onClick={() => this.handleGetDrinks('p')}>P</button>
            <button className={styles.button} onClick={() => this.handleGetDrinks('q')}>Q</button>
            <button className={styles.button} onClick={() => this.handleGetDrinks('r')}>R</button>
            <button className={styles.button} onClick={() => this.handleGetDrinks('s')}>S</button>
            <button className={styles.button} onClick={() => this.handleGetDrinks('t')}>T</button>
            <button className={styles.button} onClick={() => this.handleGetDrinks('u')}>U</button>
            <button className={styles.button} onClick={() => this.handleGetDrinks('v')}>V</button>
            <button className={styles.button} onClick={() => this.handleGetDrinks('w')}>W</button>
            <button className={styles.button} onClick={() => this.handleGetDrinks('x')}>X</button>
            <button className={styles.button} onClick={() => this.handleGetDrinks('y')}>Y</button>
            <button className={styles.button} onClick={() => this.handleGetDrinks('z')}>Z</button>


            

            <div className={styles.flex}>
            {this.state.drinks.map(({idDrink, strDrink, strInstructions, 
            strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8,
            strIngredient9, strIngredient10, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8,
            strMeasure9, strMeasure10, strDrinkThumb}) => (
              
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
                    <li>{strIngredient8} - {strMeasure8}</li>
                    <li>{strIngredient9} - {strMeasure9}</li>
                    <li>{strIngredient10} - {strMeasure10}</li>



                    </ul>
                {/* <button onClick={() => this.addFavorite()}>Add to Favorites</button> */}
                </section> 
                
            ))}
            </div>
        </div>)
    }
}






export default Ingredients;