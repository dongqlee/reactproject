
import { useState } from "react"
import { Container } from "react-bootstrap"
import prodata from "./Prodata"

export default function Women() {
  
  const [data] = useState(prodata)
  
  return (
    <>
      <Container>
        <p className="path">Women</p>
        <section className='pro_sheet'>
          {
            data.map((data, i) => {
              return(
                <>
                  {data.type01 === 'women' ? 
                  
                    <div className="pro">
                      <img src={data.image} alt='' style={{width: '100%'}}/>
                      <div className="condition">{data.condition}</div>
                      <div>{data.title}</div>
                      <div>{data.desc}</div>
                      <div>{data.color}</div>
                      <div>{(data.price) * (1-data.discount)}</div>
                      {data.discount === 0 ? "" : <div className="origin">{data.price}</div>}
                      {data.discount === 0 ? "" : <div className="discount">{(data.discount) * 100 + '% 할인'}</div>}
                    </div> :
                    data.type01 === 'genderless' ?
                    <div className="pro">
                      <img src={data.image} alt='' style={{width: '100%'}}/>
                      <div className="condition">{data.condition}</div>
                      <div>{data.title}</div>
                      <div>{data.desc}</div>
                      <div>{data.color}</div>
                      <div>{(data.price) * (1-data.discount)}</div>
                      {data.discount === 0 ? "" : <div className="origin">{data.price}</div>}
                      {data.discount === 0 ? "" : <div className="discount">{(data.discount) * 100 + '% 할인'}</div>}
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