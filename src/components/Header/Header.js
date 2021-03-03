import AddButton from './AddButton/AddButton'
import FeedButton from './FeedButton/FeedButton'
import Filter from './Filter/Filter'
import Logo from './Logo/Logo'

import './Header.css'

const Header = ({ displayAddNote, emotion, onEmotion, title, onTitle  }) => {
    return (
        <div className='Header'>
            <div className='header-relative'>
                <Logo />
                <Filter
                    emotion={emotion}
                    onEmotion={onEmotion}
                    title={title}
                    onTitle={onTitle}/>
                <FeedButton displayAddNote={displayAddNote}/>
                <AddButton displayAddNote={displayAddNote}/>
            </div>
        </div>
    )
}

export default Header