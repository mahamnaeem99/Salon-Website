import React, { useState } from "react";
import "./beauty.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaUserCircle
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import img from '../../images/img.jpg';
import face from '../../images/face threading.png'
import facial from '../../images/facial.png'
import haircut from '../../images/hair cutting.png'
import hairs from '../../images/hair styling.png'
import makeup from '../../images/makeup.png'
import mehandi from '../../images/mehandi.png'
import nails from '../../images/nails.png'
import scrub from '../../images/scrub.png'
import waxing from '../../images/waxing.png'
import aboutimg from '../../images/about-us-img.jpg'
import bookimg from '../../images/book-img.jpg'
import $ from 'jquery';
// import Card from 'react-bootstrap/Card'

// import { NavLink } from "react-router-dom";

 const BeautyCo = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <>

    {/* NAVBAR */}
     <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>B</span>eauty
            <span>&</span>Co.
          </h2>
        </div>
        
        <div 
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
          <ul>
          <li>
              {/* <NavLink to="/contact">contact</NavLink> */}
              <a href="">Home</a>

            </li>
            <li>
              {/* <NavLink to="/">Home</NavLink> */}
              <a href="">Services</a>
            </li>
            <li>
              {/* <NavLink to="/about">about</NavLink> */}
              <a href="">Book Online</a>
            </li>
            <li>
              {/* <NavLink to="/service">services</NavLink> */}
              <a href="">Contact</a>
            </li>
            <li className="links">
              {/* <NavLink to="/contact">contact</NavLink> */}
              <FaUserCircle className="user mr-3" />
              <a href="">Log In</a>

            </li>
          </ul>
        </div>


        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/thapatechnical/"
                target="_thapa">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
        </nav>
        

      {/* IMAGE */}
      <div>
        <img src={img} className="img-fluid" style={{width:'100%'}} /> 
      </div>

      {/* ABOUT US */}
      <div className="services-section my-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                  <img src={aboutimg} className="img-fluid" style={{width:"1000px",height:"500px"}} />
              </div>
              <div className="col-lg-6 col-md-6 col-12 aboutusdiv">
                  <h1 className="px-5 py-4 aboutusheading">About Us</h1>
                  <h1 className="px-5 py-2">A World Class Beauty Company</h1>
                  <p className="aboutuspara px-5">But nothing the copy said could convince her and so it didn’t take long until a 
                    few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and 
                    dragged her into their agency, where they abused her for their.But nothing the copy said could convince her and so it didn’t take long until a 
                    few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and 
                    dragged her into their agency, where they abused her for their.But nothing the copy said could convince her and so it didn’t take long until a 
                    few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and 
                    dragged her into their agency, where they abused her for their.But nothing the copy said could convince her and so it didn’t take long until a 
                    few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and 
                    dragged her into their agency, where they abused her for their.
                  </p>
              </div>
            </div>
          </div>  
      </div>



      {/* SERVICES */}
      <div className="col-10 mx-auto">
        <h1 style={{fontSize:"40px", textAlign:'center'}} className="pb-4">Our Services</h1>
          <p className="services-para mb-5 pb-5">Beauty&Co. provides expert salon services right at your doorstep. Our expert beauticians create a 
          salon-like environment in your home so you can enjoy salon service, absolutely tension-free, at 
          your convenience.</p>
      </div>      


        <div className="container text-center services">
          <div className="row mt-5">
          <div className="col-lg-4 col-md-4 col-12">
            <img src={face} className="services-img" />
            <h3 className="py-4">Face Wax and Threading</h3>
            <p>Beauty&Co. beauticians will shape your eyebrows and remove unwanted hair from your face. 
              Our qualified beauticians do full face hair removal.</p>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
          <img src={facial} className="services-img" />
          <h3 className="py-4">Facial</h3>
          <p>Our beauty experts at Beauty&Co. are providing the ultimate comfortable & 
            professional facial at-home services. Try our facial services that leave your 
            skin feeling fresh, rejuvenated, and renewed from the daily stresses of life.</p>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
          <img src={haircut} className="services-img" />
          <h3 className="py-4">Hair cutting</h3>
          <p>Beauty&Co. prides itself to provide the best hair cutting services for women, right at your doorsteps</p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-4 col-12">
          <img src={hairs} className="services-img"/>
          <h3 className="py-4">Hair Styling</h3>
          <p>Let the wholesomeness of the salon come to you. Our expert hairstylists know how 
            to make your hair look perfect.</p>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
          <img src={makeup} className="services-img"/>
          <h3 className="py-4">Makeup</h3>
          <p>Beauty&Co. provides the best makeup service you can hope for. Our 
            expert beauticians use imported products and do all in their power to make your 
            special day more memorable. </p>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
          <img src={mehandi} className="services-img"/>
          <h3 className="py-4">Mehandi</h3>
          <p>Our beauticians at Beauty&Co. are providing the ultimate comfortable & 
            professional mehandi services at your home.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-4 col-12">
          <img src={nails} className="services-img"/>
          <h3 className="py-4">Nails</h3>
          <p>Beauty&Co.experts and professional beauticians provide the best nail care with manicures 
            and pedicures that will boost circulation and make you relax. </p>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
          <img src={scrub} className="services-img"/>
          <h3 className="py-4">Body Scrub</h3>
          <p>When your skin looks and feels great, your confidence will often boost instantly. Pamper your 
            skin with our exfoliating body scrub that will give you a new look and help remove the dullness
            from your skin. AvailBeauty&Co. body scrub services will benefit you by removing dead skin cells 
            and getting clearer and softer skin.</p>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
          <img src={waxing} className="services-img"/>
          <h3 className="py-4">Waxing</h3>
          <p>Kam Kaj’s expert beauticians can make your skin smooth and even. You can get complete body 
            wax services in the comfort of your home. We provide both Rica and Sugar wax services that 
            quickly removes unwanted pesky hair. </p>
          </div>
        </div>

      </div>
    


      {/* TESTIMONIALS */}

<div style={{backgroundColor:'#e1cccf'}} className="">
<div className="card col-md-6 mt-5 my-0 mx-auto">
  <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="100000">
    <div className="w-100 carousel-inner" role="listbox">
      <div className="carousel-item active">
        <div className="carousel-caption">
          <div className="row">
            <div className="col-sm-3">
              <img src={makeup} alt="" className="rounded-circle img-fluid"/>
            </div>
            <div className="col-sm-9">
              <h3>Gives me hope</h3>
              <small>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</small>
              <small className="smallest mute">- Yayo Dudemous</small>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="carousel-caption">
          <div className="row">
            <div className="col-sm-3">
            <img src={makeup} alt="" className="rounded-circle img-fluid"/>
            </div>
            <div className="col-sm-9">
              <h3>You will love it.</h3>
              <small>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</small>
              <small className="smallest mute">- Yayo Dudemous</small>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="carousel-caption">
          <div className="row">
            <div className="col-sm-3">
              {/* <img src={makeup} alt="" className="rounded-circle img-fluid"> */}
              <img src={makeup} alt="" className="rounded-circle img-fluid"/>
            </div>
            <div className="col-sm-9">
              <h3>Velvet pouch!</h3>
              <small>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</small>
              <small className="smallest mute">- Yayo Dudemous</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="float-right navi">
    <a className="" href="#carouselExampleControls" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon ico" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="" href="#carouselExampleControls" role="button" data-slide="next">
      <span className="carousel-control-next-icon ico" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
    </div>
  </div>
</div>
</div>

{/* BOOK NOW */}
<div className="container-fluid col-4 mx-auto book-now-container">
            <div className="form_main">
                <h4 className="heading px-2 pt-5"><strong>Book </strong> Now <span></span></h4>
                <div className="form">
                <form action="" method="post" id="contactFrm" name="contactFrm">
                <input type="text" required="" placeholder="Name" value="" name="name" className="txt" />
                <input type="text" required="" placeholder="Email" value="" name="email" className="txt" />
                <input type="date" required="" placeholder="Date" value="" name="date" className="txt4" />
                <input type="time" required="" placeholder="Time" value="" name="time" className="txt5" />
                <input type="number" required="" placeholder="Phone" value="" name="phone" className="txt6" />
                <input type="text" required="" placeholder="Service(s)" value="" name="service" className="txt" />
                   
                    
                	 <textarea placeholder="Your Message" name="mess" type="text" className="txt_3"></textarea>
                     <input type="submit" value="BOOK SERVICES" name="submit" className="txt2" />
                  </form>
            </div>
    </div>
    </div>
    
{/* FOOTER */}
<div className="container-fluid mt-5" style={{backgroundColor:'pink'}}>
<div className="row px-5 py-5 footer-row">
  <div className="col-lg-4 col-md-4 col-12">
<p>When it comes to Kam Kaj, the object of the word 'Kam' reflects our motive to add value to our 
  customers' lives by providing all the essential services in their day-to-day lives. 
  On the other hand, the word 'Kaj' highlights our motive to reduce the unemployment from Pakistan by
   hiring in-house staff whom we train in any given skills.</p>
  </div>
  <div className="col-lg-4 col-md-4 col-12 text-center">
<h1>Links</h1>

  </div>
  <div className="col-lg-4 col-md-4 col-12">
 <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
 <p>+2 392 346784949</p>
<p>info@gmail.com</p>
  </div>

</div>
</div>
        


    </>
  )
}
export default BeautyCo;