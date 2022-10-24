import axios from "axios";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from 'sweetalert2'


export default function SingularAnimal({animal}){

    const navigate = useNavigate()

    //para animaciones
    useEffect(() => {
        AOS.init()
    }, [])

    function deleteanimal(idSenasa){
        axios.post('/api/animal/deleteanimal', {idSenasa: idSenasa}).then(res => {
            // console.log(res.data)
            // alert(res.data)
            Swal.fire('Carefull!', 'Your Animal was deleted')
            //PONER UN TIEMPO DE ESPERA!!!
            navigate(0)
        }).catch(err => {
            console.log(err)
        })
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-3" data-aos="flip-right">
                <ul className="list-group">
                    <li className="list-group-item">{animal.idSenasa}</li>
                    <li className="list-group-item">{animal.type}</li>
                    <li className="list-group-item">{animal.weight}</li>
                    <li className="list-group-item">{animal.paddling}</li>
                    <li className="list-group-item">{animal.device}</li>
                </ul>

                <Link to={`/edit/${animal.idSenasa}`}><li className="btn btn-success">Edit</li></Link>
                <button className="btn btn-danger" 
                onClick={() => {deleteanimal(animal.idSenasa)}}
                >X</button>

                <hr className="mt-4" />
                </div>
            </div>
            
        </div>
    )
}