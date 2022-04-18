import style from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={`container ${style.footer__container}`}>
        <ul className={style.list}>
          <li><a href="mailto:ekaterinafff@rambler.ru">e-mail</a></li>
          <li><a href="https://vk.com/club181387081">Вконтакте</a></li>
        </ul>
      </div>
    </footer>
  )
}
