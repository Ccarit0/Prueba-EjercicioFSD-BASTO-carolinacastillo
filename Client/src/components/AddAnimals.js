import React, { useState } from "react";
import uniqid from 'uniqid';
import axios from 'axios';
import Swal from 'sweetalert2'


export default function AddAnimals(){
    //Hooks
    const [type, setType] = useState('');
    const [weight, setWeight] = useState('');
    const [paddling, setPaddling] = useState('');
    const [device, setDevice] = useState('');

   

    function addAnimal(){
        let animal = {
            idSenasa: uniqid(),
            type: type,
            weight: weight,
            paddling: paddling,
            device: device
        }
        // console.log(animal, 'estoy en addAnimal front')

        axios.post('api/animal/addanimal', animal)
        .then(res => {
            // alert(res.data)
            Swal.fire('Congratulations!', 'Animal Successfulled Added')
        })
        .then(err => {console.log(err)})
    }


    return(
        <div className="container">
            <div className="row">
                <h2 className="mt-4">Crear un nuevo Animal</h2>
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
                    onClick={addAnimal} 
                    className="btn btn-success">Save</button>
                </div>
            </div>
        </div>
    )
}