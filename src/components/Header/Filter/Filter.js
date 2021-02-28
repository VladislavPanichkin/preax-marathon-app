import './Filter.css'
import chevronDown from './chevron-down.svg'
import smileMouthOpen from './smile-mouth-open.svg'

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
                <div className='mood-select'>
                    <div className='mood-rectangle'>
                        <div className='chevron-down'>
                            <img src={chevronDown} alt='chevron-down' className='chevron-img' />
                        </div>
                    </div>
                    <div className='smile-mouth-open'>
                        <img src={smileMouthOpen} alt='smile-mouth-open' />
                    </div>  
                </div>
            </div>            
        </div>
    )

}

export default Filter