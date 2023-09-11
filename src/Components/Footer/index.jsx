import './footer.scss';


function Footer() {
  return (
    <>
      <footer className='footer'>
        <div className='footer-wrap'>
          <div>
            <div >Адрес :</div>
            <div>Где то там</div>
            <div>в далекой-далекой галактике...</div>
          </div>
          <div>
            <div>Инфо :</div>
            <button>Карта и<br /> График работы</button>
          </div>
          <div>
            <div>Контакты :</div>
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