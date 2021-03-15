import './ModalContainer.css'
import close from './close.svg'

const ModalContainer = ({ modal, setModal }) => {

    const style = {
        backgroundImage: `url(${modal.img})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }

    const hideModal = () => {
        setModal(null);
    }

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    return <div className='ModalContainer'>
        <div className='modal'>
            <div className="header-wrapper">
                <div className='close-group'>
                    <div className='close-div'>
                        <img src={close} alt='close'
                            className='close-img' onClick={hideModal}
                        />
                    </div>
                </div>
                <div className='modal-header'>
                    <div className='modal-left'>
                        <span className='header-mood'>{modal.status}</span>{modal.title}
                    </div>
                    <div className='modal-date'>{new Date(modal.date).toLocaleString("ru", options)}</div>
                </div>
            </div>
            <div className='modal-flex'>
                <div className='modal-img' style={style}></div>
                <div className='modal-descr'>
                    {modal.descr}
                </div>
            </div>
        </div>
    </div>
}

export default ModalContainer