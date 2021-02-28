import './AddButton.css'
import pen from './pen.svg'

const AddButton = () => {

    return (
        <div className='AddButton'>            
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