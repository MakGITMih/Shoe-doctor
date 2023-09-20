import './footer.scss';
import Modal from '../Modal'
import React, { useState } from "react";
import MapYandex from '../MapYandex';

function Footer() {

  const [modalInfoIsOpen, setModalInfoOpen] = useState(false);

  return (
    <>
      <footer className='footer'>
        <div className='footer-wrap'>
          <div className='footer__address'>
            <h3 >Адрес :</h3>
            <span>Санкт-Петербург</span> <br></br>
            <span>Пулковское ш 20 кор 4</span>
          </div>
          <div className='footer__info'>
            <h3 >Инфо :</h3>
            <button onClick={() => setModalInfoOpen(true)}>Карта и<br />График работы</button>
            <Modal
              isOpen={modalInfoIsOpen}
              onClose={() => setModalInfoOpen(false)}>
              <h2>Клевое модальное окно!</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo,
                dolorum dolore vero eligendi cum iusto ea quam perspiciatis
                veritatis rem cupiditate a in, aliquam pariatur.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo,
                dolorum dolore vero eligendi cum iusto ea quam perspiciatis
                veritatis rem cupiditate a in, aliquam pariatur.
              </p>
              <div><MapYandex></MapYandex></div>
            </Modal>
          </div>
          <div className='footer__contact'>
            <h3 >Контакты :</h3>
            <div><a href="tel:+7999000000">8 (999) 00-00-00</a></div>
            <div><a href="mailto:test.ru@gmail.com">test.ru@gmail.com</a></div>
          </div>
          <div className='footer__network'>
            <h3>Я в сетях :</h3>
            <div>значки</div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;