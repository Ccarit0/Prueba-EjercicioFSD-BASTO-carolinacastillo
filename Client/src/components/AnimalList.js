import React, { useEffect, useState } from "react";
import SingularAnimal from "./SingularAnimal";
import axios from 'axios';

export default function AnimalList(){

    const [dataAnimal, setDataAnimal] = useState([]);

    useEffect(() =>{
        axios.get('api/animal/getanimal').then(res => {
            console.log(res.data)
            setDataAnimal(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    //----- mapeo animalList para obtener obj animal -->>
    const animalsList = dataAnimal.map(animal => {
        return(
            <div>
                <SingularAnimal animal={animal} />
            </div>
        )
    })

    return(
        <div>
           <h2>Mi lista de animales</h2> 
            {animalsList}
        </div>
    )
}