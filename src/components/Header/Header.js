import Link from "next/link"

import style from './Header.module.scss';

export default function Header(props) {
  const title = props.title ? props.title : 'Ortu Stella Fortunata';

  return (
    <header className={style.header}>
      <div className={`container ${style.header__container}`}>
        <h1 className={style.header__title}>{title}</h1>
        <nav className={style.nav}>
          <ul className={style.list}>
            <li className={style.item}><Link href='/'>Главная страница</Link></li>
            <li className={style.item}><Link href='/news'>Новости</Link></li>
            <li className={style.item}><Link href='/guest'>Гостевая книга</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
