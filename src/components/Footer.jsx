import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
      <div className='min-h-80 bg-violet-900 p-10 w-100 md:grid md:grid-cols-[repeat(1,2fr)_repeat(2,1fr)_repeat(1,2fr)] '>
        <div>
          <h1 className='text-white text-4xl mt-3'><FontAwesomeIcon icon={faCartShopping} style={{ color: "#ffffff", }} /> E-CART </h1>
          <p className='text-white text-justify pt-7'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, doloribus. Nobis magni beatae excepturi veniam nam, sint natus dolor ipsa sit soluta iste modi vero quam ex animi aliquid placeat.</p>
        </div>
        <div className='md:ps-10 mt-3'>
          <h1 className='text-4xl text-white pb-7'>Links</h1>
          <Link to={'/'}><p className='text-white'>Home</p></Link>
          <Link to={'/wishlist'}><p className='text-white pt-2'>WishList</p></Link>
          <Link to={'/cart'}><p className='text-white pt-2'>Cart</p></Link>
        </div>
        <div >
          <h1 className='text-4xl text-white pb-7 mt-3'>Guides</h1>
          <p className='text-white'>React</p>
          <p className='text-white pt-2'>React Bootstrap</p>
          <p className='text-white pt-2'>Bootswatch</p>

        </div>
        <div >
          <h1 className='text-4xl text-white pb-7 mt-3'>Contact Us</h1>
          <div className='flex'>
            <input type="text " placeholder=' Email id' autocomplete="given-name" className="rounded w-1/2" />
            <button className='btn p-2 bg-orange-600 rounded ms-5 '>Subscribe</button>

          </div>
          <div className='flex justify-between text-3xl pt-5 md:pe-44'>
            <div>
              <FontAwesomeIcon icon={faTwitter} style={{ color: "#ffffff", }} />

            </div>
            <div>
              <FontAwesomeIcon icon={faLinkedinIn} style={{ color: "#ffffff", }} />

            </div>
            <div>
              <FontAwesomeIcon icon={faFacebook} style={{ color: "#f1f4f8", }} />

            </div>
            <div>
              <FontAwesomeIcon icon={faInstagram} style={{ color: "#ffffff", }} />

            </div>         
             </div>

        </div>
      </div>
    </>
  )
}

export default Footer
