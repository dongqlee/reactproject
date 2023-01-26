import './pages.css'
import { useState } from "react"
import { Container } from "react-bootstrap"
import newdata from "./Newdata"

export default function Newrelease() {
  const [news] = useState(newdata)
  return (
    <>
      <Container>
        <p className='path'>New Release</p>
        <section className='pro_sheet'>
          {
            news.map((news, i) => {
              return (
                <div className='pro'>
                  <img src={news.image} alt='' style={{width: '100%'}} />
                  <div className="condition">{news.condition}</div>
                  <div className="title">{news.title}</div>
                  <div className="desc">{news.desc}</div>
                  <div className="color">{news.color}</div>
                  <div className="price">{(news.price) * (1 - news.discount)}</div>
                  {news.discount === 0 ? "" : <div className="origin">{news.price}</div>}
                  {news.discount === 0 ? "" : <div className="discount">{(news.discount) * 100 + '% 할인'}</div>}
                </div>
              )
            })
          }
        </section>
      </Container>
    </>
  )
}