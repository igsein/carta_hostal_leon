import React,{useState} from 'react'
import Logo from "../assets/logo3.png"
import Spain from "../assets/spain.png"
import england from "../assets/england.png"
import Menu from './Menu'


const Home = () => {
    const [intl,setIntl] = useState("")

   
  return (<>
  
  {!intl?
    
    <div className='home-container slide-top'>
    <img src={Logo} className="logo-home"  />
    <div className='title-restaurant'>

<p>La cruz, nº13- Torreorgaz</p>
<p>Telf. 927 20 50 94</p>

        </div>


    <button className='myButton' onClick={()=>setIntl('ES')}>VER CARTA <img src={Spain} alt="" /> </button>
    <button className='myButton' onClick={()=>setIntl('EN')}>SHOW MENU <img src={england} alt="" /></button>
</div>
: 



<Menu intl={intl} />




}
  </>


  )
}

export default Home