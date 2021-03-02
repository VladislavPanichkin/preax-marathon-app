import Note from "./Note/Note"

const Notes = ({ displayModal, notes }) => {

    return <div className="feed-wrapper">
        <div className="feed-grid">
            {notes && notes.map((note, index) => {
                return <Note
                    title={note.title}
                    date={note.date}
                    img={note.img}
                    descr={note.descr}
                    status={note.status}
                    key={index}
                    displayModal={displayModal}
                />
            })}
        </div>
    </div>
}

export default Notes;