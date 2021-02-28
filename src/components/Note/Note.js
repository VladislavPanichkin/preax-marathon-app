import './Note.css'

const Note = ({ title, date, img, descr, status }) => {

    const styleImg = {
        width: '100%',
        height: '100%',
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover'
    }

    const maxDate = new Date(date);

    const options = {
        month: 'short',
        day: 'numeric',
        weekday: 'short'
    };

    return (
        <div className='Note'>
            <div style={styleImg}>
                <div className='circle-group'>
                    <div className='circle'>
                        {status}
                    </div>
                </div>
                <div className='note-footer'>
                    <div className='note-title-group'>
                        <div className='note-flex'>
                            <div className='note-title'>
                                {title}
                            </div>
                            <div className='note-date'>
                                {maxDate.toLocaleString("ru", options)}
                            </div>
                        </div>
                    </div>
                    <div className='note-descr'>
                        {descr}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Note
