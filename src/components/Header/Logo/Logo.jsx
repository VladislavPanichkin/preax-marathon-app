import './Logo.css'
import trees from './trees.svg'

const Logo = () => {

    return (
        <div className='Logo'>            
            <div className='logo-icon'>
                <div className='logo-rectangle'> 
                    <div className='trees'>
                        <img src={trees} alt='trees' className='trees-img' />
                    </div>
                </div>
            </div>
            <div className='logo-content'>
                Дневник
            </div>
        </div>
    )

}

export default Logo