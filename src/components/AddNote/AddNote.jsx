import { useState, useRef } from "react";

import MoodFilter from "../MoodFilter/MoodFilter";
import Gallery from "./Gallery";
import "./AddNote.css";
import search from '../../assets/svg/search-found.svg'

const AddNote = ({ onNoteAdded }) => {

  const [selectedImage, setImage] = useState(null);
  const [pics, setPics] = useState(null);
  const [query, setQuery] = useState("");
  const [isGalleryDisplayed, toggleGallery] = useState(false);
  const [postData, setPostData] = useState({
    title: '',
    descr: '',
    date: '',
    status: '',
    img: ''
  })

  const postDataChangeHandler = e => {
    if (e.target.tagName === "IMG") {
      setPostData({
        ...postData,
        "img": `${e.target.src}`
      })
      setImage(e.target.src);
    } else {
      setPostData({ ...postData, [e.target.name]: e.target.value })
    }
  }

  const showGallery = () => {
    toggleGallery(true)
  }

  const typeQuery = (event) => {
    setQuery(event.target.value)
  }

  const createPost = () => {
    if (Object.values(postData).some(el => (el === null || el === ''))) {
      alert('all fields must be filled, emoji and image must be chosen');
    } else {
      onNoteAdded(postData);
    }
  }

  const inputDate = useRef(null);

  return (
    <div className="AddNote">
      <section>
        <div className="add-meta">
          <input placeholder="Название" className="styled-input" name="title" onChange={postDataChangeHandler} />
          <div className="meta-data__box">
            <MoodFilter
              postDataChangeHandler={postDataChangeHandler}
              postData={postData}
              type="addNoteFilter"
            />
            <input
              name="date"
              className="styled-input"
              placeholder="Дата"
              type="text"
              ref={inputDate}
              onFocus={() => {
                inputDate.current.type = "date"
              }}
              onBlur={() => {
                if (!inputDate.current.value) inputDate.current.type = "text"
              }}
              onChange={postDataChangeHandler}
            />
          </div>
        </div>
        <textarea
          placeholder="Описание"
          className="styled-input add-textarea"
          name="descr"
          onChange={postDataChangeHandler}
        ></textarea>
        {isGalleryDisplayed && <button className="add-create-button" onClick={createPost}>
          <span>Создать</span>
        </button>
        }
      </section>
      <section>
        <div className="add-note-search">
          <input placeholder="Поиск" className="styled-input add-search" onChange={typeQuery} />
          <button className="add-note-search__button" onClick={showGallery}>
            <img src={search} alt="search"/>
          </button>
        </div>
        {isGalleryDisplayed &&
          <Gallery setPics={setPics}
            pics={pics}
            query={query}
            postDataChangeHandler={postDataChangeHandler}
            selectedImage={selectedImage}
            setImage={setImage}
          />}
      </section>
    </div>
  );
};

export default AddNote;
