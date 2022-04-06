

const createAppointment = async (formData)=>{

    const postAppointment = await fetch(
        "https://chen-veterinary.herokuapp.com/appointment",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return await postAppointment.json();
}


const modifyAppointment = async (formData, id)=>{
    const response = await fetch(
        "https://chen-veterinary.herokuapp.com/appointment/" + id,
        {
          method: "PATCH",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
        return await response.json();
}



export  {createAppointment, modifyAppointment};