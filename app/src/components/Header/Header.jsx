import { useEffect, useState } from "react"
import style from "./header.module.scss"

export function Header() {

    const [slideshow, setSlideshow] = useState([])
    const [imageIndex, setImageIndex] = useState(0); 

    let url = "http://localhost:4000/imagelist"

    useEffect(() => {

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setSlideshow(data)
                setImageIndex(0)
            })
            .catch((err) => console.error(err))

    }, [url])
    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex((prevIndex) => (prevIndex + 1) % slideshow.length);
        }, 7000); 

        return () => clearInterval(interval); 
    }, [slideshow.length]);
    console.log("slideshow", slideshow);
    return (
        <>
            <div className={style.imageContainer}>
                {slideshow.length > 0 && (
                    <div className={style.imageWrapper} key={slideshow[imageIndex].id}>
                        <img src={slideshow[imageIndex]?.filename} alt={slideshow[imageIndex]?.title} />
                    </div>
                )}
            </div>
        </>

    )
}