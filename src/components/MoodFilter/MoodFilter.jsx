import { moods } from "../../mockData"

const MoodFilter = ({ postDataChangeHandler, value }) => {

    return <div className='mood-selec-wraper'>
        <select className="mood-select" onChange={postDataChangeHandler} name="mood" value={value}>
            <option value=""></option>
            {moods.map(mood => <option className="mood" value={mood} key={mood}>{mood}</option>)}
        </select>
        {
            !value
            ? <i className='mood-select-icon far fa-laugh'></i>
            : null
            }
        </div>
}

export default MoodFilter