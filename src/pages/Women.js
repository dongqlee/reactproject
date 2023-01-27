
import { useState } from "react"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import prodata from "./Prodata"

export default function Women() {
  
  const [data] = useState(prodata)
  
  return (
    <>
      <Container>
        <Link to='/'>
          <p className="home">HOME</p>
        </Link>
        <span className="icon"><i class="fa-solid fa-chevron-right"></i></span>
        <p className="path">Women</p>
        <section className='pro_sheet'>
          {
            data.map((data, i) => {
              return(
                <>
                  {data.type01 === 'women' ? 
                  
                    <div className="pro">
                      <img src={data.image} alt='' style={{width: '100%'}}/>
                      <div className="txt_box">
                        <div className="condition">{data.condition}</div>
                        <div className="title">{data.title}</div>
                        <div className="desc">{data.desc}</div>
                        <div className="color">{data.color}</div>
                        <div className="price_box">
                          <div className="price">{((data.price) * (1-data.discount)).toLocaleString()} 원</div>
                          {data.discount === 0 ? "" : <div className="origin">{data.price.toLocaleString()} 원</div>}
                        </div>
                        {data.discount === 0 ? "" : <div className="discount">{(data.discount) * 100 + '% 할인'}</div>}
                      </div>
                    </div> :
                    data.type01 === 'genderless' ?
                    <div className="pro">
                      <img src={data.image} alt='' style={{width: '100%'}}/>
                      <div className="txt_box">
                        <div className="condition">{data.condition}</div>
                        <div className="title">{data.title}</div>
                        <div className="desc">{data.desc}</div>
                        <div className="color">{data.color}</div>
                        <div className="price_box">
                          <div className="price">{((data.price) * (1-data.discount)).toLocaleString()} 원</div>
                          {data.discount === 0 ? "" : <div className="origin">{data.price.toLocaleString()} 원</div>}
                        </div>
                        {data.discount === 0 ? "" : <div className="discount">{(data.discount) * 100 + '% 할인'}</div>}
                      </div>
                    </div>
                    : ""} 
                </>
              )
            })
          }
        </section>
      </Container>
    </>
  )
}