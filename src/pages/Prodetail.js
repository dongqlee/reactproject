import { Container } from "react-bootstrap"
import { Link, useParams, useNavigate } from "react-router-dom"
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

  const array01 = [250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300, 305, 310]
  const array02 = [225, 230, 235, 240, 245, 250, 255, 260]
  const array03 = [225, 230, 235, 240, 245, 250]
  const array04 = [170, 175, 180, 185, 190, 195, 200, 210, 220]
  const array05 = [80, 90, 100, 110, 120, 130, 140, 150, 160]
  const array06 = [230, 235, 240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300, 305, 310]
  
  const size01 = ['S', 'M', 'L', 'XL', '2XL', '3XL']
  const size02 = ['XS', 'S','M', 'L', 'XL', '2XL']
  const size03 = ['S', 'M', 'L', 'XL']
  const size04 = ['240~270', '270~300']
  const size05 = ['원 사이즈']

  const arrsize01 = () => {
    const newArr = [];
    for(let i = 0; i < array01.length; i++ ) {
      newArr.push(<li key={i}>{ array01[i]}</li>);
    }
    return newArr;
  };
  const arrsize02 = () => {
    const newArr = [];
    for(let i = 0; i < array02.length; i++ ) {
      newArr.push(<li key={i}>{ array02[i]}</li>);
    }
    return newArr;
  };
  const arrsize03 = () => {
    const newArr = [];
    for(let i = 0; i < array03.length; i++ ) {
      newArr.push(<li key={i}>{ array03[i]}</li>);
    }
    return newArr;
  };
  const arrsize04 = () => {
    const newArr = [];
    for(let i = 0; i < array04.length; i++ ) {
      newArr.push(<li key={i}>{ array04[i]}</li>);
    }
    return newArr;
  };
  const arrsize05 = () => {
    const newArr = [];
    for(let i = 0; i < array05.length; i++ ) {
      newArr.push(<li key={i}>{ array05[i]}</li>);
    }
    return newArr;
  };
  const arrsize06 = () => {
    const newArr = [];
    for(let i = 0; i < array06.length; i++ ) {
      newArr.push(<li key={i}>{ array06[i]}</li>);
    }
    return newArr;
  };

  const arrsize07 = () => {
    const newArr = [];
    for(let i = 0; i < size01.length; i++ ) {
      newArr.push(<li key={i}>{ size01[i]}</li>);
    }
    return newArr;
  };
  const arrsize08 = () => {
    const newArr = [];
    for(let i = 0; i < size02.length; i++ ) {
      newArr.push(<li key={i}>{ size02[i]}</li>);
    }
    return newArr;
  };
  const arrsize09 = () => {
    const newArr = [];
    for(let i = 0; i < size03.length; i++ ) {
      newArr.push(<li key={i}>{ size03[i]}</li>);
    }
    return newArr;
  };
  const arrsize10 = () => {
    const newArr = [];
    for(let i = 0; i < size04.length; i++ ) {
      newArr.push(<li key={i}>{ size04[i]}</li>);
    }
    return newArr;
  };
  const arrsize11 = () => {
    const newArr = [];
    for(let i = 0; i < size05.length; i++ ) {
      newArr.push(<li key={i}>{ size05[i]}</li>);
    }
    return newArr;
  };

  const navi = useNavigate()
  const btnBack = () => {
    navi(-1)
  }

  return (
    <Container>
      <Link to='/'>
        <p className="home">HOME</p>
      </Link>
      <span className="icon"><i class="fa-solid fa-chevron-right"></i></span>
      <p onClick={btnBack} className='back'>Back</p>
        <span className="icon"><i class="fa-solid fa-chevron-right"></i></span>
      <p className="path">Detail</p>
      <div className="detail_sheet">
        <img src={data[id].image} alt='' style={{width: '50%'}} />
        <div className="info_box">
          <div className="txt_box">
            <div className="condition">{data[id].condition}</div>
            <div className="title">{data[id].title}</div>
            <div className="desc">{data[id].desc}</div>
            <div className="price_box">
              <div className="price">{((data[id].price) * (1-data[id].discount)).toLocaleString()} 원</div>
              {data[id].discount === 0 ? "" : <div className="origin">{data[id].price.toLocaleString()} 원</div>}
            </div>
            {data[id].discount === 0? '' : <div className="discount">
              {(data[id].discount) * 100 + '% 할인'}
            </div>}
            <p className="size_txt">사이즈 선택</p>
            <p className="size_chk">사이즈 가이드</p>
          </div>
          {data[id].type02 === 'snkrs' ? (data[id].type01 === 'men'? 
          <ul className="size_box">
            {arrsize01()} 
          </ul> 
          : (data[id].type01 === 'women' ? 
          <ul className="size_box">
            {arrsize02()}
          </ul> 
          : (data[id].type01 === 'junior' ? 
          <ul className="size_box">
            {arrsize03()} 
          </ul> 
          : (data[id].type01 === 'kids' ? 
          <ul className="size_box">
            {arrsize04()} 
          </ul> 
          : (data[id].type01 === 'baby' ? 
          <ul className="size_box">
            {arrsize05()} 
          </ul>  
          : 
          <ul className="size_box">
            {arrsize06()} 
          </ul> )))))
          : ''}

          {data[id].type02 === 'top' ? (data[id].type01 === 'men'? 
          <ul className="size_box">
            {arrsize07()}
          </ul>   
          : (data[id].type01 === 'women' ? 
          <ul className="size_box">
            {arrsize08()} 
          </ul>  
          : (data[id].type01 === 'junior' ? 
          <ul className="size_box">
            {arrsize09()} 
          </ul>   
          : (data[id].type01 === 'kids' ? 
          <ul className="size_box">
            {arrsize09()} 
          </ul>  
          : (data[id].type01 === 'baby' ? 
          <ul className="size_box">
            {arrsize09()} 
          </ul> 
          : "")))))
          : ''}

          {data[id].type02 === 'pants' ? (data[id].type01 === 'men'? 
          <ul className="size_box">
            {arrsize07()} 
          </ul>  
          : (data[id].type01 === 'women' ? 
          <ul className="size_box">
            {arrsize08()} 
          </ul>  
          : (data[id].type01 === 'junior' ? 
          <ul className="size_box">
            {arrsize09()} 
          </ul>  
          : (data[id].type01 === 'kids' ? 
          <ul className="size_box">
            {arrsize09()} 
          </ul> 
          : (data[id].type01 === 'baby' ? 
          <ul className="size_box">
            {arrsize09()} 
          </ul>  
          : "")))))
          : ''}

          {data[id].type02 === 'jacket' ? (data[id].type01 === 'men'? 
          <ul className="size_box">
            {arrsize07()}
          </ul> 
          : (data[id].type01 === 'women' ? 
          <ul className="size_box">
            {arrsize08()} 
          </ul>  
          : (data[id].type01 === 'junior' ? 
          <ul className="size_box">
            {arrsize09()} 
          </ul>  
          : (data[id].type01 === 'kids' ? 
          <ul className="size_box">
            {arrsize09()} 
          </ul> 
          : (data[id].type01 === 'baby' ? 
          <ul className="size_box">
            {arrsize09()} 
          </ul> 
          : "")))))
          : ''}

          {data[id].type02 === 'goods' ? (data[id].type03 === 'c'? 
          <ul className="size_box">
            {arrsize11()}
          </ul>
          : (data[id].type03 === 's' ? 
          <ul className="size_box">
            {arrsize10()}
          </ul>
          : ""))
          : ''}
          <div className="btn_box"> 
            <Button className="buy">구매하기</Button>  
            <Button className="cart">장바구니</Button>
          </div>
        </div>  
      </div>
    </Container>
  )
}