
import style from "../Login/signup.module.scss";


export function Signup() {

    // Denne asynkrone funktion håndterer indsendelsen af tilmeldingsformularen.
    async function handleSignUp(event) {
        event.preventDefault(); // Forhindrer standard handling ved formularindsendelse (dvs. sideopdatering).

        // Definerer URL'en for brugeroprettelses-endepunktet.
        let url = "http://localhost:4000/users";
        
        // Opretter en ny URLSearchParams-instance for let at formatere formulardata.
        let body = new URLSearchParams();
        // Tilføjer brugerinput fra formularfeltene til body.
        body.append('firstname', event.target.firstname.value);
        body.append('lastname', event.target.lastname.value);
        body.append('username', event.target.email.value);
        body.append('password', event.target.password.value);
    //   ⁡ ⁡⁢⁣⁢Ya ne znau chto eto ?!⁡
        body.append('is_active', 1);
        body.append('org_id', 1);
        body.append('refresh_token', 1234); // Eksempel på fastsat værdi.
        
        // Konfigurerer options for fetch-anmodningen, inklusive metode og body.
        let options = {
            method: "POST",
            body: body,
        };
        
        try {
            // Udfører POST-anmodningen til serveren og afventer svaret.
            const response = await fetch(url, options);
            // Tjekker for serverfejl.
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Fortolker svaret som JSON.
            const data = await response.json();
            console.log(data); // Logger svaret til konsollen.
        } catch (error) {
            
            console.error(error);
        }
    }
    
    // Funktion til at håndtere annulleringsanmodninger.
    function handleCancel() {
        console.log('Annullering anmodet'); /
    }
    
    return (
        <>
         
            <form onSubmit={handleSignUp} className={style.loginFormStyle} >
              
                <label>
                    Fornavn:
                    <input type="text" name="firstname" />
                </label>
                <label>
                    Efternavn:
                    <input type="text" name="lastname" />
                </label>
                <label>
                    Email:
                    <input type="text" name="email" />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" />
                </label>

                <div className={style.buttonContainer}>
                    <input type="submit" value="Login" /> 
                    <button type="button" onClick={handleCancel}>Annuller</button> 
                </div>
            </form>
        </>
    );
}
