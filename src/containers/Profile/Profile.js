import { useState } from 'react';


/**
 * Pending tasks:
 * 1- Recieve user's name through props
 * 2- Insert user's name in h1
 * 
 */
const Profile = () => {

    const [pets, setPets] = useState([]);

    const petList = async =()=>{
        const petResults = await fetch ("https://chen-veterinary.herokuapp.com/pet", {
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
                <ol>
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
                </ol>
            </div>
        </div>
    );
};

export default Profile;