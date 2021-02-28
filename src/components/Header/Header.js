import AddButton from './AddButton/AddButton'
import FeedButton from './FeedButton/FeedButton'
import Filter from './Filter/Filter'
import Logo from './Logo/Logo'

import './Header.css'

const Header = () => {
    return (
        <div className='Header'>
            <div className='header-relative'>
                <Logo />
                <Filter />
                <FeedButton />
                <AddButton />
            </div>
        </div>
    )
}

export default Header