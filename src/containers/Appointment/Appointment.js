const Appointment = () => {
    const formSubmit = async (e) => {
        e.preventDefault()
        try {
            const formData = {
                petName: e.target[0].value,
                treatment: e.target[1].value,
                date: e.target[2].value,
                professional: e.target[3].value,
            };

            const postAppointment = await fetch("https://chen-clinicadentalsql.herokuapp.com:3000/citas", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (postAppointment) {
                alert("Very Nice")
            }
        } catch (error) {
            alert("Not Good" + error)
        }

    };

    return (
        <div className="generalAppointment">
            <h1>Appointment</h1>
            <form onSubmit={(e) => formSubmit(e)}>
                <label for="petName">Pet Name</label>
                <input type="text" id="petName" name="petName" />

                <label for="treatment">Treatment</label>
                <input type="text" id="treatment" name="treatment" />

                <label for="date">Date</label>
                <input type="date" id="species" name="species" />

                <label for="professional">Professional</label>
                <input type="text" id="professional" name="professional" />

                <input type="submit" value="ACCEPT" className="sendButton"></input>
            </form>
        </div>
    );
}

export default Appointment;