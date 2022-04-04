import { useState, useEffect } from 'react'
import "./Profile.css";
import { Link } from 'react-router-dom';

const Profile = () => {
    

    const [pets, setPets] = useState([]);

    const petList = async () => {
        const petResults = await fetch ("https://chen-veterinary.herokuapp.com/pet?idUser="+sessionStorage.getItem("iduser"), {
            method:"GET"
        });

        const dataPet = await petResults.json();

        setPets(dataPet);
    }

    useEffect(()=>{
        try{
            petList();
        } catch (error){
            console.log(error)
        }
    },[]);

    return(
        <div>
            <h1>Hello {}!</h1>
            <div className="buttons">
            <button>Add new pet</button>
  
            </div>
            <div>
                <ul>
                    {pets.map((pet)=>{
                        return (
                            <div className="petCard">
                                <li>Name: {pet.name}</li>
                                <li>Age: {pet.age}</li>
                                <li>Species: {pet.species}</li>
                                <li>Allergies: {pet.allergies}</li>
                                <br/>
                                <Link to='/Appointment'>
                                <button>Add New Appointment</button>
                                </Link>
                                <button>Edit Pet</button>
                            </div>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Profile;