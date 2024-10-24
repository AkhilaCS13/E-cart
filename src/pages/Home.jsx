import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import useFetch from '../hooks/usefetch'
import { useDispatch } from 'react-redux'
import { addwishlistitem } from '../redux/slices/wishlistSlice'
import { addcartitem } from '../redux/slices/cartSlice'

function Home() {
  const data =useFetch('https://fakestoreapi.com/products')
  console.log(data);
  const dispatch = useDispatch()
  
  return (
    <>
     <div className='pt-40 mb-10 px-10 md:grid grid-cols-4'>

     { data?.length>0 &&
     data?.map((item)=>(
      <div className="p-2">
      <div className="p-3 rounded shadow-lg">
        <img src={item?.image} alt="" className='w-full h-72'/>
        <h4 className='text-center text-2xl'>{item?.title.slice(0,25)}...</h4>
        <p className='text-justify'>{item?.description.slice(0,100)}...</p>
        <p>price: <span className='text-violet-700 text-2xl'>$ {item?.price}</span></p>
        <div className="flex justify-between">
            <button onClick={()=>dispatch(addwishlistitem(item))} className='p-2 rounded bg-red-700 text-white'>
            <FontAwesomeIcon icon={faHeart}/>
            </button>
            <button onClick={()=>dispatch(addcartitem(item))} className='p-2 rounded bg-green-700 text-white'>
            <FontAwesomeIcon icon={faCartShopping} style={{ color: "#ffffff", }} />
            </button>
        </div>
      </div>
    </div>
     ))
      }
     </div>
    </>
  )
}

export default Home
