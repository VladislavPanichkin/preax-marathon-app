import './ModalContainer.css'
import close from './close.svg'

const ModalContainer = ({ displayModal }) => {

    const hideModal = () => {
        displayModal(false)
    }

    return <div className='ModalContainer'>
        <div className='modal'>
            <div className='close-group'>
                <div className='close-div'>
                    <img src={close} alt='close' 
                        className='close-img' onClick={hideModal}
                    />
                </div>

            </div>
            <div className='modal-header'>
                <div className='modal-left'>
                    <span className='header-mood'>😌</span>Побывал в горах
                    </div>
                <div className='modal-date'>
                    21 августа 2021 года
                    </div>
            </div>
            <div className='modal-flex'>
                <div className='modal-img'></div>
                <div className='modal-descr'>
                    Это бесспорная истина, недаром же мы редко доверяемся тем, кто лучше нас. Скорее уж мы избегаем их общества. Чаще всего мы исповедуемся тем,
                    кто похож на нас и разделяет наши слабости. Мы вовсе не хотим исправляться, не стремимся к самоусовершенствованию: прежде всего нужно, чтобы нас
                    судили со всеми нашими слабостями. Нам хочется, чтобы нас пожалели и поддержали дух наш. В общем, мы хотели бы и не считаться виновными, и не
                    стараться очиститься. В нас недостаточно цинизма и недостаточно добродетели. У нас нет ни силы зла, ни силы добра. Вы читали Данте? Правда?
                    Вот черт! Вы, стало быть, знаете, как это у Данте? Ведь он допускает, что ангелы были нейтральными в распре между Богом и Сатаной.
                        Он отводит им место в преддверии, так сказать в вестибюле своего ада. Мы с вами в вестибюле, дорогой друг.<br />
                        Терпение? Вы, разумеется, правы. Нужно набраться терпения и ждать Страшного суда. Но, к несчастью, нам некогда, мы торопимся. Так торопимся,
                        что мне даже пришлось стать судьей на покаянии. Однако мне сначала нужно было привести в порядок свои открытия и уладить дело с насмешками моих
                        современников. С того вечера, когда меня позвали к ответу — а ведь меня действительно позвали, — я обязан был ответить или по крайней мере поискать ответ.
                        Это оказалось нелегко. Я долго блуждал наугад. Но этот постоянный хохот и насмешки научили меня яснее разбираться в себе и увидеть наконец, что я совсем
                        не прост. Вы не улыбайтесь, эта истина не так уж элементарна, как кажется. Элементарными называют такие истины, которые человек открывает последними, — вот
                        и все.
                    </div>
            </div>
        </div>
    </div>
}

export default ModalContainer