import './AddButton.css'
import pen from './pen.svg'

const AddButton = ({ displayAddNote }) => {

    const showAddNote = () => {
        displayAddNote(true);
    }

    return (
        <div className='AddButton' onClick={showAddNote}>            
            <div className='pen-box'>
                <img src={pen} alt="pen" className='pen-img' />
            </div>
            <div className='add-content'>
                Запись
            </div>
        </div>
    )

}

export default AddButton