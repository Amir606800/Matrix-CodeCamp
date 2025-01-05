import React, { useState } from 'react'
import Header from './components/Header'
import Middle from './components/Middle'

const App = () => {
  const [images,setImage] = useState()
  
  return (
    <>
    
      <video loop autoPlay muted className='back-video position-fixed z-n1'>
        <source src="https://html.vikinglab.agency/ovro/assets/img/video/video5.mp4" type="video/mp4" />
      </video>
    
      <Header image={images} settingImage={setImage} />
      <Middle imageler={images} />
      
    </>
  )
}

export default App