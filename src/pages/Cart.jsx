import { faBackward, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { emptycart, removecartitem } from '../redux/slices/cartSlice'


function Cart() {
  const [total, setTotal] = useState(0)

  const cartArray = useSelector((state) => state.cart)
  console.log(cartArray);
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const getTotal = () => {
    if (cartArray?.length > 0) {
      setTotal(cartArray?.map((item) => item.price).reduce((n1, n2) => n1 + n2))

    }
  }
  console.log(total);

  const handlecheckout = () => {
    alert('order placed successfully')
    dispatch(emptycart())
    navigate('/')
  }


  useEffect(() => {
    getTotal()
  }, [cartArray])



  return (
    <>
      <div className='pt-40'>
        <h1 className='text-center text-4xl text-violet-900'>Cart</h1>

        {cartArray?.length > 0 ?
          <div className='md:grid grid-cols-[2fr_1fr] my-10'>
            <div className=" md:py-3 md:px-20">
              <table className='w-full'>
                <thead>
                  <tr>
                    <th className='border border-gray-100 p-3 bg-gray-400 text-white'>#</th>
                    <th className='border border-gray-100 p-3 bg-gray-400 text-white'>Title</th>
                    <th className='border border-gray-100 p-3 bg-gray-400 text-white'>Image</th>
                    <th className='border border-gray-100 p-3 bg-gray-400 text-white'>Price</th>
                    <th className='border border-gray-100 p-3 bg-gray-400 text-white'>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartArray?.map((item,index) => (
                    <tr>
                      <th className='border border-gray-100 p-3'>{index+1}</th>
                      <th className='border border-gray-100 p-3'>{item?.title}</th>
                      <th className='border border-gray-100 p-3 flex justify-center'><img src={item?.image} alt="no image" style={{ width: '100px', height: '100px' }} /></th>
                      <th className='border border-gray-100 p-3'>$ {item?.price}</th>
                      <th className='border border-gray-100 p-3 text-center'><button onClick={() => dispatch(removecartitem(item?.id))} className='bg-red-700 p-3 rounded'><FontAwesomeIcon icon={faTrashCan} style={{ color: 'white' }} /></button></th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className=" pt-5 px-10">
              <div className="p-5 shadow-lg">
                <h1 className='text-center text-3xl'>Cart Summary</h1>
                <p className='mt-4 text-xl'>Total number of products : {cartArray?.length}</p>
                <p className='mt-4 text-xl'>Grand Total : $ {total}</p>
                <button onClick={handlecheckout} className='w-full bg-green-600 text-white p-3 mt-4 hover:bg-white hover:text-green-600 hover:border hover:border-green-600'>CheckOut</button>

              </div>
            </div>
          </div>
          :
          <div className="w-full mt-10 md:grid grid-cols-3" ru>
            <div></div>
            <div className='flex justify-center items-center flex-col my-10'>
              <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png" className='w-100 h-80' />
              <p className=' text-violet-800 text-3xl'>Your cart is empty</p>
              <Link to={'/'}>
                <button className='bg-green-700 text-white rounded mt-3 p-3'><FontAwesomeIcon icon={faBackward} className='me-2' /> Back Home</button>

              </Link>
            </div>
            <div></div>
          </div>}

      </div>
    </>
  )
}

export default Cart
