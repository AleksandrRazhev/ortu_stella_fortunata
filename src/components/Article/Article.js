import { Carousel } from 'react-bootstrap';

import style from './Article.module.scss';

export default function Article({ data }) {
  const { id, title, images, text, datePost } = data;

  const slider = () => (
    <div className={style.my_carousel}>
      <Carousel touch={true}>
        {images.map((item, i) => (
          <Carousel.Item key={i}>
            <div className={style.img_container}>
              <img className={style.img} src={item} alt="" />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )

  return (
    <li className={style.item}>
      <div className={style.title_block}>
        <h3 className={style.title}>{title}</h3>
        <span className={style.date}>дата: {datePost}</span>
      </div>
      {images[0] ? slider() : null}
      <p>{text}</p>
    </li >
  )
}
