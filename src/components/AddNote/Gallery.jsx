import { useState, useEffect } from 'react'

import "./Gallery.css"

const Gallery = ({ setPics, pics, query, postDataChangeHandler }) => {

    const [isFetching, setFetching] = useState(false);

    const chooseImg = e => {
        postDataChangeHandler(e)
        e.target.classList.add("chosenImg")
    }

    let images = []

    if (pics) {
        images = pics.map(pic => {
            return <figure key={pic.id} className={`gallery-item gallery-item-${pics.indexOf(pic) + 1}`}
                    >
                <img src={pic.src.medium} alt="gallery image" className="gallery-img" onClick={chooseImg}/>
            </figure>
        })
    }

    useEffect(() => {
        setFetching(true)
        let url = `https://api.pexels.com/v1/search?query=${query}&per_page=20`;
        fetch(url, {
            headers: {
                Authorization:
                    "563492ad6f91700001000001a8b4db61e797432e826629fb0e0437d5",
            },
        })
            .then((response) => {
                setFetching(false);
                if (response.status === 200) { return response.json() }
            })
            .then((response) => {
                response.photos.length = 5;
                setPics(response.photos)
            })
            .catch((err) => { console.log(err); })
    }, []);

    return <div className="add-note-gallery-container">
        {isFetching && <div>Загрузка...</div>}
        {pics != null && images}
    </div>
}

export default Gallery;