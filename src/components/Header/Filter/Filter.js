import './Filter.css'
import MoodFilter from '../../MoodFilter/MoodFilter'

const Filter = ({ emotion, onEmotion, title, onTitle }) => {

    return (
        <div className='Filter'>
            <div className='filter-flex'>
                <input
                    type="text"
                    value={title}
                    onChange={onTitle}
                    className='filter-input'
                    placeholder='Поиск'/>
                <MoodFilter postDataChangeHandler={onEmotion} value={emotion}/>
            </div>            
        </div>
    )

}

export default Filter