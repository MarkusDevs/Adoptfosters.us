import React from 'react'
import './basic.css'
import './pages.css'
import ButtonLink from './Button'

export const Home = () => {
  return (
    <div>


      <div className='frontpageimg' id='komp'>
        <img src={require('./imgs/banner.png')} alt="" className='imgedit'/>
      </div>

      <div className='fronpage' id='mob'>
        <img src={require('./imgs/banner-mobile.png')} alt="" className='imgedit'/>
      </div>

      <div className='container'>
        <p className='frontpageword'>
          Instant Families Blossom as Foster Care Adoptions Soar
        </p>

        <div className='text-center dad'>
          {/* <a href="/adopt" className='add'>
            Help a child in need
          </a> */}

          <ButtonLink to="/adopt" className="add">Help a child in need</ButtonLink>
        </div>
      </div>
      
      <div className='leveing'>
        <h1 className='welcome'>
          Welcome at AdoptFosters.us!
        </h1>

        <div className='container cutaway' id='komp'>
          <h1 className='who' >
            Who are we?
          </h1>
          <div className='row'>
            <div className='col-7'>
              <p className='whotext'>
                At AdobtFosters.us, we are dedicated to making a lasting impact on the 
                lives of children in foster care by providing a 
                platform that connects loving families with those in
                need of a forever home. Our mission is rooted in the 
                belief that every child deserves a nurturing and supportive 
                environment to thrive and grow. Through our user-friendly interface, 
                we aim to streamline the adoption process, making it accessible and 
                transparent for both prospective parents and children awaiting their forever families.
              </p>
            </div>

            <div className='col-5'>
              <img src={require('./imgs/family2.png')} alt='' className='fam'/>
            </div>
          </div>
        </div>

        <div className='container cutaway' id='mob'>
          <h1 className='who' >
            Who are we?
          </h1>
          <p className='whotext'>
            AdobtFosters.us is your gateway to creating loving homes for children in foster care. 
            Our user-friendly platform simplifies the adoption process, 
            connecting caring families with kids in need. 
            Join our community and be part of the journey to brighter futures. 
            AdoptFosters.us - Where Love Finds a Home.

          </p>
          
          
        </div>

        <div className='text-center'>
          {/* <a href="/adopt" className='add'>
            Help a child in need
          </a> */}

          <ButtonLink to="/adopt" className="add2">Adopt a child now</ButtonLink>
        </div>
      </div>
    </div>
    
  )
}
