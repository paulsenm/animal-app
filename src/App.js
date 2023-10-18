import { useState } from "react";

import AnimalShow from "./components/AnimalShow";

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'dog', 'fish', 'frog', 'chicken'];
    return animals[Math.floor(Math.random() * animals.length)];
}

function App(){
    const [animals, setAnimals] = useState([]);
    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()]);
    }

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index}/>
    });   
    return(
        <div>
            <button onClick={handleClick}>Add Animal</button>
            <div>
                Animals: {renderedAnimals}
            </div>
        </div>
    )
}

export default App;