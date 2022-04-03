import { useState, useEffect } from 'react'

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
            <button>See Pets</button>
            <button>See Appointments</button>   
            <button>Logout</button>  
            <button>Add new pet</button>
            <div>
                <ul>
                    {pets.map((pet)=>{
                        return (
                            <div>
                                <li>{pet.name}</li>
                                <li>{pet.age}</li>
                                <li>{pet.species}</li>
                                <li>{pet.allergies}</li>
                            </div>
                        );
                    })};
                </ul>
            </div>
        </div>
    );
};

export default Profile;