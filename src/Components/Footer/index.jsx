import './footer.scss';
import Modal from '../Modal'
import React, { useState } from "react";
import MapYandex from '../MapYandex';
// import { ReactComponent as Instagram } from './instagram.svg'
// import { ReactComponent as Youtube }  from './youtube.svg'
// import { ReactComponent as Facebook }  from './facebook.svg'
import Youtube from './youtube.png'
import Instagram from './instagram.png'
import Facebook from './facebook.png'

function Footer() {

  const [modalInfoIsOpen, setModalInfoOpen] = useState(false);

  return (
    <>
      <footer className='footer'>
        <div className='footer-wrap'>
          <div className='footer__address'>
            <h3 >Адрес :</h3>
            <span>Санкт-Петербург</span>
            <span>Пулковское ш 20 кор 4</span>
          </div>
          <div className='footer__info'>
            <h3 >Инфо :</h3>
            <button onClick={() => setModalInfoOpen(true)}><span>Карта и</span> <span>График работы</span></button>
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
            <span><a href="tel:+7999000000">8 (999) 00-00-00</a></span>
            <span><a href="mailto:test.ru@gmail.com">test.ru@gmail.com</a></span>
          </div>
          <div className='footer__network'>
            <h3>Я в сетях&nbsp;:</h3>
            <div className='footer__social'>
              <div className="footer__youtube">
                <a href="https://www.youtube.com/" target='_blank'>
                  <img src={Youtube} alt="Что то сломалось..." />
                </a>
              </div>
              <div className="footer__instagram">
                <a href="https://www.instagram.com/" target='_blank'>
                  <img src={Instagram} alt="Что то сломалось..." />
                </a>
              </div>
              <div className="footer__facebook">
                <a href="https://ru-ru.facebook.com/" target='_blank'>
                  <img src={Facebook} alt="Что то сломалось..." />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;