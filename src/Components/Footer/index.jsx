import './footer.scss';

import Modal from '../Modal'
import Youtube from './youtube.png'
import Instagram from './instagram.png'
import Facebook from './facebook.png'

import React, { useState } from "react";

function Footer() {

  const [modalInfoIsOpen, setModalInfoOpen] = useState(false);


  return (
    <>
      <footer className='footer'>
        <div className='footer-wrap'>
          <div className='footer__address'>
            <h3 >Адрес :</h3>
            <span>Санкт-Петербург</span>
            <span>Пулковское ш 20 кор&nbsp;4</span>
          </div>
          <div className='footer__info'>
            <h3 >Инфо :</h3>
            <button onClick={() => setModalInfoOpen(true)}><span>Карта и</span> <span>График работы</span></button>
            <Modal
              isOpen={modalInfoIsOpen}
              onClose={() => setModalInfoOpen(false)}>
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
                <a href="https://www.youtube.com/" rel='noopener' target='_blank' >
                  <img src={Youtube} alt="Что то сломалось..." />
                </a>
              </div>
              <div className="footer__instagram">
                <a href="https://www.instagram.com/" rel='noopener' target='_blank'>
                  <img src={Instagram} alt="Что то сломалось..." />
                </a>
              </div>
              <div className="footer__facebook">
                <a href="https://ru-ru.facebook.com/" rel='noopener' target='_blank'>
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