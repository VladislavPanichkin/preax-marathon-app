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
  const [modal, setModal] = useState(null);
  const [isAddNoteDisplayed, displayAddNote] = useState(false);
  const { emotion, onEmotion, title, onTitle } = useFilters();

  useEffect(() => {
    if (notes) {
      setFilteredNotes(
        notes.filter((note) => {
          return (
            note.status.includes(emotion) &&
            note.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())
          );
        })
      );
    }
  }, [emotion, title, notes, setFilteredNotes]);

  const onNoteAdded = newNote => {
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
    displayAddNote(false);
  };

  return (
    <div className="Feed">
      {(modal || isAddNoteDisplayed) === false && (
        <>
          <Header
            displayAddNote={displayAddNote}
            emotion={emotion}
            onEmotion={onEmotion}
            title={title}
            onTitle={onTitle}
          />
          <Notes notes={filteredNotes} setModal={setModal}/>
        </>
      )}
      {
        modal && <ModalContainer 
                              modal={filteredNotes.find(el => el.id === modal)} 
                              setModal={setModal}
                            />
      }
      {isAddNoteDisplayed && (
        <>
          <Header displayAddNote={displayAddNote} addNoteDisplayed/>
          <AddNote 
            onNoteAdded={onNoteAdded} 
            emotion={emotion} 
          />
        </>
      )}
    </div>
  );
};

export default Feed;
