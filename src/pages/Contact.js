import React from 'react'
import './basic.css'
import './pages.css'

export const Contact = () => {
  return (
    <div>
      <div className='container poravnanje' id="komp">
        <h1>
          Where to find us?
        </h1>
        <div className='row'>
          <div className='col-6'>
            <input type="text" className='accinput2' placeholder='Email'/>

            <input type="text" className='accinput2' placeholder='Name'/>

            <textarea cols="30" rows="5" className='accinput2' placeholder='Message'></textarea>

            <button className='login2'>
              Send
          </button>
          </div>

          <div className='col-6'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1133.4005893337867!2d-74.01305963101117!3d40.678013963717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a899a0f8283%3A0x9199d971672beeb1!2s131%20Sullivan%20St%2C%20Brooklyn%2C%20NY%2011231%2C%20Sjedinjene%20Ameri%C4%8Dke%20Dr%C5%BEave!5e0!3m2!1shr!2shr!4v1703764730823!5m2!1shr!2shr" width="600" title='map' height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>

        <div>
          <p className='platform text-center'>
          AdobtFosters.us is not just an online platform; 
          it's a community rooted in connection and support.
          While our virtual doors are always open, 
          you can also find us actively engaging on social media platforms such as 
          Instagram, Facebook, and YouTube. Join our conversations, stay updated on adoption stories, 
          and be part of our growing community. For any inquiries or assistance, 
          you can reach out to us via email at info@adobtfosters.us. 
          We look forward to connecting with you and sharing the journey of 
          creating loving homes for children in foster care.
          </p>
        </div>
      </div>

      <div className='container poravnanje' id="mob">
        
        <h1>
          Where to find us?
        </h1>

        <div>
          <p className='platform text-center'>
            Connect with AdobtFosters.us on social media — follow us on Instagram, Facebook,
            and Twitter to be part of our community and stay updated on adoption stories.
            For inquiries, reach out to us at info@adobtfosters.us. 
            Join us online and let's build brighter futures together!
          </p>

        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1133.4005893337867!2d-74.01305963101117!3d40.678013963717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a899a0f8283%3A0x9199d971672beeb1!2s131%20Sullivan%20St%2C%20Brooklyn%2C%20NY%2011231%2C%20Sjedinjene%20Ameri%C4%8Dke%20Dr%C5%BEave!5e0!3m2!1shr!2shr!4v1703764730823!5m2!1shr!2shr"  className='mapaKontakt' title='map'  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        
        <div className='text-center'>
          <input type="text" className='accinput2' placeholder='Email'/>

          <input type="text" className='accinput2' placeholder='Name'/>

          <textarea cols="30" rows="5" className='accinput2' placeholder='Message'></textarea>

          <button className='login2'>
            Send
          </button>
        </div>
      </div>
    </div>

    
  )
}
