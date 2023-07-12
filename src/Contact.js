import React from 'react'
import './Contact.css';
import { Link } from 'react-router-dom';

function Contact() {
  return (


    <div class="contact_us">
  <div class="responsive-container-block bigContainer">
    <div class="responsive-container-block Container">
      <div class="responsive-cell-block wk-desk-5 wk-ipadp-4 wk-tab-12 wk-mobile-12">
        <img class="mainImg" src="https://inboundhype.com/wp-content/uploads/2021/05/customer-support-illustration.jpg"></img>
      </div>
      <div class="responsive-cell-block wk-desk-7 wk-ipadp-8 wk-tab-12 wk-mobile-12">
        <p class="text-blk heading">
          <b>Contact Me</b>
        </p>
        <form class="formTable" id="izml">
          <div class="firstRow">
            <div class="fullNameArea">
              <p class="cardHead">
                Full Name
              </p>
              <input class="fullName" id="fullName" name="fullName" type="text"></input>
            </div>
            <div class="emailArea">
              <p class="cardHead">
                Email Address
              </p>
              <input class="email" id="email" name="email" type="text"></input>
            </div>
          </div>
          <div class="messageArea">
            <p class="cardHead">
              Message
            </p>
            <textarea class="message" cols="30" id="message" name="message" rows="10"></textarea>
          </div>
          <a class="submit" href="#" id="w-c-s-bgc_p-1-dm-id-4">
            Send Message
          </a>
        </form>
      </div>
    </div>
  </div>
</div>
    )
}

export default Contact