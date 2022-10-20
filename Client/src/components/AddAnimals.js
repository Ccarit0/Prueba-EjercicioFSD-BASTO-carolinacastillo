import React from "react";

export default function AddAnimals(){

    function addAnimal(){
        
    }


    return(
        <div className="container">
            <div className="row">
                <h2 className="mt-4">Crear un nuevo Animal</h2>
            </div>
            <div className="row">
                <div className="col-sm-6 offset-3">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name/ID Senasa</label>
                        <input type="text" className="form-control"></input>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Animal Type</label>
                        <input type="text" className="form-control"></input>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Animal Weight</label>
                        <input type="text" className="form-control"></input>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Paddling Name</label>
                        <input type="text" className="form-control"></input>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Device Number</label>
                        <input type="text" className="form-control"></input>
                    </div>

                    <button onClick={addAnimal} className="btn btn-success">Save</button>
                </div>
            </div>
        </div>
    )
}