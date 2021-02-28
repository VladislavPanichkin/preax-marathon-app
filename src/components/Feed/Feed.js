import Header from '../Header/Header'
import Note from '../Note/Note'
import ModalContainer from '../ModalContainer/ModalContainer'

import './Feed.css'
import { notesList } from '../../mockData'
import AddNote from '../AddNote/AddNote'

const Feed = () => {

    const getNotes = () => notesList.map((note, index) => <Note
        title={note.title}
        date={note.date}
        img={note.img}
        descr={note.descr}
        status={note.status}
        key={index}
    />)

    return (
        <div>
            <div className='Feed'>
                <Header />
                <div className='feed-wrapper'>
                    <div className='feed-grid'>
                        {getNotes()}
                    </div>
                </div>
            </div>
            <div>
                Note
                <ModalContainer />
            </div>
            <div>
                Add Note
                <AddNote />
            </div>
        </div>
    )

}

export default Feed