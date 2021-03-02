import './Filter.css'
import MoodFilter from '../../MoodFilter/MoodFilter'

const Filter = () => {

    return (
        <div className='Filter'>
            <div className='filter-flex'>
                <div className='title-field'>
                    <div className='title-rectangle'>
                        <div className='title-content'>
                            Поиск
                    </div>
                    </div>
                </div>
                <MoodFilter />
            </div>            
        </div>
    )

}

export default Filter