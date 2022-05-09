import React from 'react'
import ReactPlayer from 'react-player'

const Profile = () => {
  return (
    <div style={{marginTop:"5rem"}}>
         <div>
        <figure className="snip0045 red">
          <figcaption>
            <h2 style={{color:'#fbba07'}}><span>Lywa</span> <br/>14 years</h2>

            <ul>
            <li >Weight : <strong>79 kg</strong></li>
            <li >heigth : <strong>170 cm</strong></li>
            <li >stronger Foot : <strong>Left</strong></li>
            <li > Positon : <strong>Left Wing Forward (LWF)</strong></li>

            </ul>            
              <div className='video'>
         <ReactPlayer controls  url="https://www.youtube.com/watch?v=_uuqsGCiM9I&ab_channel=7mlc"/> 
         </div>
         <div class="icons">
      <span><i class="ion-ios-home"></i> nabeul</span>
      <span><i class="ion-ios-email"></i> exemple@gmail.com</span>
      <span><i class="ion-ios-telephone"></i> 20934383</span>
    </div>  
          </figcaption>
          <div>       
               <img src="/pl.jpg" alt="sample7"  /> 
</div>
        </figure>
       
      </div>
    </div>
  )
}

export default Profile