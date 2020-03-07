import React from 'react';
import styles from './Home.module.css'

const Home = (props => {
    return (
        <main className={styles.wallpaper}>
            <img src="https://cdn.cltampa.com/files/base/scomm/cltampa/image/2019/07/960w/Screen_Shot_2019_07_29_at_10.08.55_AM.5d3efe05e83f3.jpg" alt="Bar"/>
            <div className= {styles.container}>
                <h1>
                    Welcome to the Bartender's Best Friend
                </h1>
                <p>
                    The quick go-to for any Bartender. Just sign up to see our full ingredient and cocktail list
                </p>
            </div>
        </main>
    )
})

export default Home;
 

