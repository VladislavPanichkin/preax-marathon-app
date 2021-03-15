import './Filter.css'
import MoodFilter from '../../MoodFilter/MoodFilter'

const Filter = ({ emotion, onEmotion, title, onTitle }) => {

    return (
        <div className='filter'>
            <div className='filter-container'>
                <input
                    type="text"
                    value={title}
                    onChange={onTitle}
                    className='filter__input'
                    placeholder='Поиск'/>
                <MoodFilter onEmotion={onEmotion} emotion={emotion}/>
            </div>            
        </div>
    )

}

export default Filter