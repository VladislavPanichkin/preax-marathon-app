import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Notes from "../Notes/Notes";
import ModalContainer from "../ModalContainer/ModalContainer";
import AddNote from "../AddNote/AddNote";
import "./Feed.css";
import { notesList } from "../../mockData";
import { useFilters } from "../../hooks/useFilters";

const Feed = () => {
  const [notes, setNotes] = useState(notesList);
  const [filteredNotes, setFilteredNotes] = useState(notes);
  const [isModalDisplayed, displayModal] = useState(false);
  const [isAddNoteDisplayed, displayAddNote] = useState(false);
  const {
    emotion, onEmotion,
    title, onTitle 
  } = useFilters();

  useEffect(() => {
    if (notes) {
      setFilteredNotes(() => {
        return  notes.filter(note => {
          return note.status.includes(emotion) && note.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())
        })
      })
    }
  }, [emotion, title, notes, setFilteredNotes])


  const onNoteAdded = (newNote) => {
    setNotes({ ...notesList, newNote });
  };

  return (
    <div className="Feed">
      {(isModalDisplayed || isAddNoteDisplayed) === false && (
        <>
          <Header
            displayAddNote={displayAddNote}
            emotion={emotion}
            onEmotion={onEmotion}
            title={title}
            onTitle={onTitle}/>
          <Notes displayModal={displayModal} notes={filteredNotes} />
        </>
      )}
      {isModalDisplayed && <ModalContainer displayModal={displayModal} />}
      {isAddNoteDisplayed && (
        <>
          <Header displayAddNote={displayAddNote} displayModal={displayModal} />
          <AddNote onNoteAdded={onNoteAdded} />
        </>
      )}
    </div>
  );
};

export default Feed;
