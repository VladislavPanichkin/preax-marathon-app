import AddButton from './AddButton/AddButton'
import FeedButton from './FeedButton/FeedButton'
import Filter from './Filter/Filter'
import Logo from './Logo/Logo'

import './Header.css'

const Header = ({ displayAddNote }) => {
    return (
        <div className='Header'>
            <div className='header-relative'>
                <Logo />
                <Filter />
                <FeedButton displayAddNote={displayAddNote}/>
                <AddButton displayAddNote={displayAddNote}/>
            </div>
        </div>
    )
}

export default Header