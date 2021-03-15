import { moods } from "../../mockData"

const MoodFilter = ({ onEmotion, emotion, postDataChangeHandler, postData, type }) => {

    const onEmotionSelected = e => {
        if (type && type === "addNoteFilter") {
            postDataChangeHandler(e);
        } 
        else {
            onEmotion(e);
        }
    }

    return <div className='mood-select-wrapper'>
        <select className="mood__select" onChange={onEmotionSelected} name="status">
            <option value=""></option>
            {moods.map(mood => <option className="mood" value={mood} key={mood}>{mood}</option>)}
        </select>
        {!emotion && (postData && postData.status === '') && <i className='mood-select__icon far fa-laugh'></i>}
        </div>
}

export default MoodFilter