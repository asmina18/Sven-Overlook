import { useEffect, useState } from "react";
import { Title } from "../../components/Title/Title";
import { Link } from "react-router-dom";
import style from "./homepage.module.scss"


export function HomePage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/news')
            .then(res => res.json())
            .then(data => setData(data)) 
            .catch(err => console.error(" error", err)); 
    }, []);

    return (
        <>
              

            <Title title="Velkommen til overlook online " />
            <div className={style.cardCantainer}>
                {data && data.slice(0, 3).map((data) => (
                    <figure key={data.id} className={style.hotelCard}>
                        <img src={`http://localhost:4000/images/${data.image.filename}`} alt="image" style={{width:"50%"}} />
                        <figcaption>
                            <Link to={`/room`}>
                                <h4>{data.title}</h4>
                                <p>{data.teaser}</p>
                            </Link>
                        </figcaption>
                    </figure>
                ))}
            </div>
        </>
    );
}
