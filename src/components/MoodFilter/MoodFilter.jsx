import { useState } from 'react'
import { moods } from "../../mockData"

const MoodFilter = ({ postDataChangeHandler }) => {

    return <>
        <select className="mood-select" onChange={postDataChangeHandler} name="mood">
            {moods.map(mood => <option className="mood" value={mood} key={mood}>{mood}</option>)}
        </select>
        </>
}

export default MoodFilter