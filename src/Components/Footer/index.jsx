import './footer.scss';


function Footer() {
  return (
    <>
      <footer className='footer'>
        <div className='footer-wrap'>
          <div>Адрес
            <div>Санкт-Петербург</div>
            <div>Пулковское ш 20 кор 4</div>
          </div>
          <div>Контакты
            <div><a href="tel:+7999000000">8 (999) 00-00-00</a></div>
            <div><a href="mailto:test.ru@gmail.com">test.ru@gmail.com</a></div>
          </div>
          <div>Я в сетях
            <div>значки</div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;