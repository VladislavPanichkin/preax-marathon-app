import Logo from '../Header/Logo/Logo'
import FeedButton from '../Header/FeedButton/FeedButton'
import AddButton from '../Header/AddButton/AddButton'

import './AddNote.css'

const AddNote = () => (
    <div className='AddNote'>
        <div className='add-header'>
            <div className='header-relative'>
                <Logo />
                <FeedButton />
                <AddButton />
            </div>
        </div>
        <div className='add-flex'>
            <div className='add-column'>
                <div className='add-title'>
                    <div className='add-title-placeholder'>   
                        Название
                    </div>
                </div>
            </div>
            <div className='add-column'>
                right
            </div>
        </div>
    </div>
)


export default AddNote