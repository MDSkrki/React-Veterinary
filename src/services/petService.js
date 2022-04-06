const createPet = async (formData) => {

  const postPet = await fetch("https://chen-veterinary.herokuapp.com/pet", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await postPet.json();
}

export default createPet;