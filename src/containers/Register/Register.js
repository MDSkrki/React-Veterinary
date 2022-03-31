import './Register.css';


const Register = () => {


    return (
        <div className="general">
        <h1>User Register</h1>
        <form>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" />

            <label for="surName">Surname</label>
            <input type="text" id="surname" name="surname" />

            <label for="phoneNumber">PhoneNumber</label>
            <input type="number" id="phonenumber" name="phonenumber" />

            <label for="email">E-mail</label>
            <input type="email" id="email" name="email" />

            <label for="password">Password</label>
            <input type="password" id="password" name="password" />

            <input type="submit" value="ACCEPT" className="sendButton"></input>
        </form>
        </div>
    );

};

export default Register;