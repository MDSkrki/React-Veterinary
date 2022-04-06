

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

export default createAppointment;