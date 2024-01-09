import React from 'react'

export const About = () => {
  return (
    <div>
      <div id="komp">
        <h1 className='welcometext'>
          Welcome at AdoptFosters.us!
        </h1>
        <div className='container cutaway'>
            <h1 className='who'>
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

        <div className='container cutaway2'>
          <div className='row'>
            <div className='col-5'>
              <img src={require('./imgs/family1.png')} alt='' className='fam2'/>
            </div>

            <div className='col-7'>
              <p className='whotext'>
                We understand the unique challenges of the adoption 
                journey and are committed to creating a compassionate 
                and informative space for families and individuals considering adoption. 
                AdobtFosters.us is not just a website; it's a community of like-minded 
                individuals who share the common goal of creating loving homes for children in need. 
                Join us on this transformative journey, and together, 
                let's build brighter futures for children and families alike.
                AdoptFosters.us - Where Love Finds a Home.
              </p>
            </div>`
          </div>
        </div>
        <div className='container'>
          <h1 className='aboutteam'>
            About our Team
          </h1>

          <div className='cutaway2'>
          <div className='row'>
              <div className='col-7'>
                <p className='whotext'>
                At AdobtFosters.us, our team is a blend of passion, expertise, and compassion. 
                From our founder, Jane Smith, whose dedication stems from a lifelong commitment to child welfare, 
                to our co-founder, Mark Johnson, whose technical prowess propels our platform forward — 
                we are a diverse group united by a common goal. 
                Our team is driven by the belief that every child deserves a loving home, 
                and we work tirelessly to make AdobtFosters.us a welcoming space for families and 
                individuals on their adoption journey. Together, we are committed to building a brighter future, 
                one adoption at a time.
                </p>
              </div>

              <div className='col-5'>
                <img src={require('./imgs/team.png')} alt='' className='fam3'/>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div id="mob">
        <h1 className='welcometext'>
          Welcome at <br/>AdoptFosters.us!
        </h1>

        <div className='container cutaway'>
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


        <div className='container cutaway'>
          <h1 className='who' >
            About our Team
          </h1>
          <p className='whotext'>
            We are the passionate and dedicated team behind AdobtFosters.us. 
            Founded by Jane Smith, a tireless advocate for children's welfare, 
            and co-founded by tech innovator Mark Johnson, we bring together \
            expertise and heart. Our diverse team shares a common goal: 
            to create a seamless platform connecting families with children in need. 
            With Jane's commitment and Mark's technical prowess, 
            we work together to make AdobtFosters.us a beacon of hope in the adoption journey, 
            uniting families and building brighter futures.
          </p>
          <div className='dva'>
            <img src={require('./imgs/team.png')} alt='' className='fam'/>
          </div>
        </div>
      </div>
    </div>
  )
}
