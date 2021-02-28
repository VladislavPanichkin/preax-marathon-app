import './FeedButton.css'
import displayGreed from './display-greed.svg'

const FeedButton = () => {

    return (
        <div className='FeedButton'>            
            <div className='display-grid'>
                <img src={displayGreed} alt='display-greed' className='feed-img' />

            </div>
            <div className='feed-content'>
                Список
            </div>
        </div>
    )

}

export default FeedButton