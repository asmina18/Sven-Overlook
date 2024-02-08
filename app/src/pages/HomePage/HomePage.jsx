import { useEffect, useState } from "react";
import { Title } from "../../components/Title/Title";
import { Link } from "react-router-dom";
import style from "./homepage.module.scss"


export function HomePage() {
    // ​‌‍‌⁡⁢⁣⁣Opretter en state variabel til at opbevare data hentet fra serveren.⁡​
    const [data, setData] = useState([]);
    // ​‌‍‌⁡⁢⁣⁣Bruger useEffect til at hente data én gang efter komponenten er indlæst.⁡​
    useEffect(() => {
        // ​‌‍‌⁡⁢⁣⁣Henter data fra en API.⁡​
        fetch('http://localhost:4000/news')
            .then(res => res.json()) //​‌‍‌⁡⁢⁣⁣ Konverterer svaret til JSON-format.⁡​
            .then(data => {
                console.log('Data modtaget:', data);
                setData(data); // ​‌‍‌⁡⁢⁣⁣Opdaterer state med de nye data.⁡​
            })
            .catch(err => console.error("Fejl ved indhentning af data:", err));
    }, []);

    return (
        <>
            <Title title="Velkommen til overlook online " />
            <div className={style.cardCantainer}>
               ​‌‍‌⁡⁢⁣⁣ {/* Løber gennem de første tre elementer i `data`-arrayet for at skabe et kort til hver */}⁡​
                {data && data.slice(0, 3).map((data) => (
                    <figure key={data.id} className={style.hotelCard}>
                        <img src={`http://localhost:4000/images/${data.image.filename}`}
                         alt="image"
                          />
                        <figcaption>
                      ⁡⁢⁣⁣   ​‌‍‌{/* Anvender `figcaption` til at inkludere et link, der detaljeret beskriver nyheden, med nyhedens titel som klikbart element */}​⁡⁡
                            <Link to={`/room`}>
                                <h4>{data.title}</h4>
                                {/* <p>{data.teaser}</p> */}
                            </Link>
                        </figcaption>
                    </figure>
                ))}
            </div>
        </>
    );
}
