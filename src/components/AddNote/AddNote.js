import { useState } from "react";

import MoodFilter from "../MoodFilter/MoodFilter";
import Gallery from "./Gallery";
import { notesList } from '../../mockData';
import "./AddNote.css";

const AddNote = ({ onNoteAdded }) => {
  const [date, setDate] = useState(null);
  const [pics, setPics] = useState(null);
  const [query, setQuery] = useState("");
  const [isGalleryDisplayed, toggleGallery] = useState(false);
  const [postData, setPostData] = useState({
    title: '',
    description: '',
    date: '',
    mood: '',
    img: ''
  })

  const postDataChangeHandler = e => {
    if (e.target.tagName == "IMG") {
      setPostData({ ...postData, 
          ["img"]: `${e.target.src}`})
    } else {    setPostData({ ...postData, [e.target.name]: e.target.value})  }
  }

  const showGallery = () => {
      toggleGallery(true)
  }

  const typeQuery = (event) => {
    setQuery(event.target.value)
  }

  const createPost = () => {
    for (let key in postData) {
      if (postData[key] === "") {
        alert(`all fields must be filled, emoji and image must be chosen`)
      } else { onNoteAdded(postData);
      }
    }
  }

  console.log(notesList);

  return (
    <div className="AddNote">
      <section>
        <div className="add-meta">
          <input placeholder="Название" className="styled-input" name="title" onChange={postDataChangeHandler}/>
          <div className="meta-data__box">
            <MoodFilter postDataChangeHandler={postDataChangeHandler}/>
            <input
              name="date"
              className="styled-input"
              placeholder="Дата"
              type="date"
              onChange={postDataChangeHandler}
            />
          </div>
        </div>
        <textarea
          placeholder="Описание"
          className="styled-input add-textarea"
          name="description"
          onChange={postDataChangeHandler}
        ></textarea>
        <button className="add-create-button" onClick={createPost}>
          <span>Создать</span>
        </button>
      </section>
      <section>
        <div className="add-note-search">
          <input placeholder="Поиск" className="styled-input add-search" onChange={typeQuery}/>
          <button className="add-note-search__button" onClick={showGallery}>
          </button>
        </div>
          {isGalleryDisplayed &&
            <Gallery setPics={setPics} pics={pics} query={query}
            postDataChangeHandler={postDataChangeHandler}/> }
      </section>
    </div>
  );
};

export default AddNote;
