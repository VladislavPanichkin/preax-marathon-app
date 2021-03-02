import { useState } from "react";
import Header from "../Header/Header";
import Notes from "../Notes/Notes";
import ModalContainer from "../ModalContainer/ModalContainer";
import AddNote from "../AddNote/AddNote";
import "./Feed.css";
import { notesList } from "../../mockData";

const Feed = () => {
  const [notes, setNotes] = useState(notesList);

  const onNoteAdded = (newNote) => {
    setNotes({ ...notesList, newNote });
  };
  const [isModalDisplayed, displayModal] = useState(false);
  const [isAddNoteDisplayed, displayAddNote] = useState(true);

  return (
    <div className="Feed">
      {(isModalDisplayed || isAddNoteDisplayed) === false && (
        <>
          <Header displayAddNote={displayAddNote} />
          <Notes displayModal={displayModal} notes={notes}/>
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
