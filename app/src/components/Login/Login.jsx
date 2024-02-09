
// import { Title } from "../Title/Title"; 
import { useState } from "react"; 
import style from "./signup.module.scss"; 

// Definerer LoginPage-komponent
export const Login = () => {
    // Bruger useState til at oprette og administrere tilstanden for brugerdata.
    const [userData, setUserData] = useState(); // Initialiserer med et tomt objekt.

    // Asynkron funktion til håndtering af login-logik.
    async function handleLogin(event) {
        event.preventDefault(); // Forhindrer browserens standardadfærd ved formularindsendelse (genindlæsning af siden).

        // Definerer URL'en til login-API'et.
        let url = "http://localhost:4000/login";

        // Forbereder data til at sende med POST-anmodningen.
        let body = new URLSearchParams();
        body.append("username", event.target.email.value); 
        body.append("password", event.target.password.value); 

        // Konfigurerer fetch-anmodningen med metoden POST og inkluderer body-data.
        let options = {
            method: "POST",
            body: body,

        };

        try {
            // Sender anmodningen til serveren og venter på svar.
            let res = await fetch(url, options);
            let data = await res.json(); // Fortolker svaret som JSON.

            setUserData(data); // Opdaterer brugerdata-tilstanden med svaret fra serveren.
        } catch (err) {
            
            console.error(err);
        }
    }
console.log(userData);

    return (
        <>
            {/* <Title title="Login" />  */}

            <form className={style.loginFormStyle} onSubmit={handleLogin}>
                
                <label>
                    Email:
                    <input name="email" type="text" />
                </label>
                <label>
                    Password:
                    <input name="password" type="password" />
                </label>

                <input value="Login" type="submit" />
            </form>
        </>
    );
};
