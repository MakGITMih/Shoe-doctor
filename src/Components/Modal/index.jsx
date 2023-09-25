import './modal.scss'

import MapYandex from '../MapYandex';

import { ReactComponent as IconClose } from './icon-close.svg';



function Modal({ isOpen, onClose, children }) {

    const onWrapperClick = (event) => {
        if (event.target.classList.contains("modal-wrapper")) onClose();
    };

    return (
        <>
            {isOpen && (
                <section className="modal">
                    <div className='modal-wrapper' onClick={onWrapperClick}>
                        <div className="modal-content">
                            <button className="modal-close-button" onClick={() => onClose()}>
                                <IconClose></IconClose>
                            </button>
                            <h2 >График работы.</h2>
                            <p>
                                <span>Понедельник - Суббота c 11:00 – до 19:00</span>
                                <span className='modal-output'> Воскресенье – Выходной</span>
                            </p>
                            {children}
                            <div><MapYandex></MapYandex></div>
                        </div>


                    </div>
                </section>
            )}
        </>
    );
}

export default Modal;