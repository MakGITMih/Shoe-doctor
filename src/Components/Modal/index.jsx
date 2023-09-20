import './modal.scss'
import { ReactComponent as IconClose } from './icon-close.svg';



function Modal ({isOpen,onClose,children}) {

    const onWrapperClick = (event) => {
        if (event.target.classList.contains("modal-wrapper")) onClose();
      };

    return (
        <>
        {isOpen&&(
          <section className="modal">
            <div className='modal-wrapper' onClick={onWrapperClick}>
                <div className="modal-content">
                    <button className="modal-close-button" onClick={() => onClose()}>
                     <IconClose></IconClose>
                    </button>
                    {children}
                </div>

            </div>           
            </section>
           ) }
        </>
    );
}

export default Modal;