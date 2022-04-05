import { useState, useEffect } from 'react'
import "./Profile.css";

import { PetCard } from '../../component/PetCard/PetCard';

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
                            <PetCard pet={pet} />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Profile;