import { useParams } from "react-router-dom"
import styled from "styled-components"


const Button = styled.button`
  width: 200px; height: 40px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  background-color: white;
`

export default function Prodetail(props) {
  const {data} = props
  const {id} = useParams()

  const array01 = [80, 90, 100, 110, 120, 130, 140, 150, 160]
  const array02 = [170, 175, 180, 185, 190, 195, 200, 205, 210, 215, 220]
  const array03 = [225, 230, 235, 240, 245, 250]
  const array04 = [220, 230, 235, 240, 245, 250, 255, 260]
  const array05 = [250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300, 305, 310]
  const array06 = [230, 235, 240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300, 305, 310]

  array01.forEach(function(value) {
    console.log(`<li>value</li>`)
  })
  array02.forEach(function(value) {
    console.log(`<li>value</li>`)
  })
  array03.forEach(function(value) {
    console.log(`<li>value</li>`)
  })
  array04.forEach(function(value) {
    console.log(`<li>value</li>`)
  })
  array05.forEach(function(value) {
    console.log(`<li>value</li>`)
  })
  array06.forEach(function(value) {
    console.log(`<li>value</li>`)
  })

  return (
    
    <div className="detail_sheet">
      
      <img src={data[id].image} alt='' style={{width: '50%'}} />
      <div>{data[id].condition}</div>
      <div>{data[id].title}</div>
      <div>{data[id].desc}</div>
      <div>{data[id].color}</div>
      <div className="price_box">
        <div className="price">{((data[id].price) * (1-data[id].discount)).toLocaleString()} 원</div>
        {data[id].discount === 0 ? "" : <div className="origin">{data[id].price.toLocaleString()} 원</div>}
      </div>
      {data[id].type02 === 'snkrs' ? (data[id].type01 === 'men'? 
      <ul className="size_box">
        <li className="size">250</li>
        <li className="size">255</li>
        <li className="size">260</li>
        <li className="size">270</li>
      </ul> 
      : (data[id].type01 === 'women' ? <div>여자신발사이즈</div> 
      : (data[id].type01 === 'junior' ? <div>주니어신발사이즈</div> 
      : (data[id].type01 === 'kids' ? <div>키즈신발사이즈</div>
      : (data[id].type01 === 'baby' ? <div>베이지신발사이즈</div> : <div>골프화</div>)))))
      : ''}
      {data[id].type02 === 'top' ? (data[id].type01 === 'men'? <div>남자신발사이즈</div> 
      : (data[id].type01 === 'women' ? <div>여자신발사이즈</div> 
      : (data[id].type01 === 'junior' ? <div>주니어신발사이즈</div> 
      : (data[id].type01 === 'kids' ? <div>키즈신발사이즈</div>
      : (data[id].type01 === 'baby' ? <div>베이지신발사이즈</div> : <div>골프화</div>)))))
      : ''}
      {data[id].type02 === 'pants' ? (data[id].type01 === 'men'? <div>남자신발사이즈</div> 
      : (data[id].type01 === 'women' ? <div>여자신발사이즈</div> 
      : (data[id].type01 === 'junior' ? <div>주니어신발사이즈</div> 
      : (data[id].type01 === 'kids' ? <div>키즈신발사이즈</div>
      : (data[id].type01 === 'baby' ? <div>베이지신발사이즈</div> : <div>골프화</div>)))))
      : ''}
      {data[id].type02 === 'jacket' ? (data[id].type01 === 'men'? <div>남자신발사이즈</div> 
      : (data[id].type01 === 'women' ? <div>여자신발사이즈</div> 
      : (data[id].type01 === 'junior' ? <div>주니어신발사이즈</div> 
      : (data[id].type01 === 'kids' ? <div>키즈신발사이즈</div>
      : (data[id].type01 === 'baby' ? <div>베이지신발사이즈</div> : <div>골프화</div>)))))
      : ''}
      {data[id].type02 === 'goods' ? (data[id].type01 === 'men'? <div>남자신발사이즈</div> 
      : (data[id].type01 === 'women' ? <div>여자신발사이즈</div> 
      : (data[id].type01 === 'junior' ? <div>주니어신발사이즈</div> 
      : (data[id].type01 === 'kids' ? <div>키즈신발사이즈</div>
      : (data[id].type01 === 'baby' ? <div>베이지신발사이즈</div> : <div>골프화</div>)))))
      : ''}
      <Button>구매하기</Button>  
      <Button>장바구니</Button>  
    </div>
  )
}