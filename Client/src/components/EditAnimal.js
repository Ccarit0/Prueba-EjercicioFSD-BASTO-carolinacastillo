import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


export default function EditAnimals(){

    //Hooks
    const params = useParams()

    const [type, setType] = useState('');
    const [weight, setWeight] = useState('');
    const [paddling, setPaddling] = useState('');
    const [device, setDevice] = useState('');

    //para volver al home
    const navigate = useNavigate()

    useEffect(() => {
      axios.post('/api/animal/getdataanimal', {idSenasa: params.idSenasa}).then(res => {
        console.log(res.data[0])

        const dataanimal = res.data[0]

        setType(dataanimal.type)
        setWeight(dataanimal.weight)
        setPaddling(dataanimal.paddling)
        setDevice(dataanimal.device)
      })
    }, [])

    function editAnimal(){
        //nuevo obj para actualizar el animal
        const updateAnimal = {
            idSenasa: params.idSenasa,
            type: type,
            weight: weight,
            paddling: paddling,
            device: device
        }

        axios.post('/api/animal/updatinganimal', updateAnimal)
        .then(res => {
            console.log(res.data)
            alert(res.data)
            navigate('/')
        })
        .then(err => {console.log(err)})
    }
  

    

    return(
        <div className="container">
            <div className="row">
                <h2 className="mt-4">Editar un Animal</h2>
            </div>
            <div className="row">
                <div className="col-sm-6 offset-3">
                    

                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Animal Type</label>
                        <input type="text" className="form-control" 
                        value={type} onChange={(e) => {setType(e.target.value)}}
                        ></input>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Animal Weight</label>
                        <input type="text" className="form-control" 
                        value={weight} onChange={(e) => {setWeight(e.target.value)}}
                        ></input>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Paddling Name</label>
                        <input type="text" className="form-control" 
                        value={paddling} onChange={(e) => {setPaddling(e.target.value)}}
                        ></input>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Device Number</label>
                        <input type="text" className="form-control" 
                        value={device} onChange={(e) => {setDevice(e.target.value)}}
                        ></input>
                    </div>

                    <button 
                    onClick={editAnimal} 
                    className="btn btn-success">Edit</button>
                </div>
            </div>
        </div>
    )
}
