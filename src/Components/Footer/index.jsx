import './footer.scss';


function Footer() {
  return (
    <>
      <footer className='footer'>
        <div className='footer-wrap'>
          <div className='footer__address'>
            <h3 >Адрес :</h3>
            <div>Где то там</div>
            <div>в далекой-далекой галактике...</div>
          </div>
          <div className='footer__info'>
            <h3 >Инфо :</h3>
            <button>Карта и<br /> График работы</button>
          </div>
          <div className='footer__contact'>
            <h3 >Контакты :</h3>
            <div><a href="tel:+7999000000">8 (999) 00-00-00</a></div>
            <div><a href="mailto:test.ru@gmail.com">test.ru@gmail.com</a></div>
          </div>
          <div>
            <div>Я в сетях :</div>
            <div>значки</div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;