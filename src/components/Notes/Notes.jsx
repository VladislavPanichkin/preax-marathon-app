import Note from "./Note/Note"

const Notes = ({ notes, setModal }) => {

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
                    setModal={setModal}
                    id={note.id}
                />
            })}
        </div>
    </div>
}

export default Notes;