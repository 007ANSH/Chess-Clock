import React from 'react'
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className=' bg-[#0E101D] h-[150vh] flex flex-col justify-center '>
        <div className=' flex flex-col justify-center item-center  h-64'>
            <div><h1 className='text-center text-[#04DBAD] text-3xl'>Bullet</h1></div>
            <div className='flex justify-center items-center'>
                <Link to='/1+0'><div className='hover:border-2 mx-10 my-2 rounded-md hover:border-white w-56 h-52 text-4xl text-white flex justify-center items-center'>1+0</div></Link>
                <Link to='/1+1'><div className='hover:border-2 mx-10 my-2 rounded-md hover:border-white w-56 h-52 text-4xl text-white flex justify-center items-center'>1+1</div></Link>
                <Link to='/2+1'><div className='hover:border-2 mx-10 my-2 rounded-md hover:border-white w-56 h-52 text-4xl text-white flex justify-center items-center'>2+1</div></Link>
            </div>
        </div>
        <div className=' flex flex-col justify-center item-center  h-64'>
            <div><h1 className='text-center text-[#04DBAD] text-3xl'>Blitz</h1></div>
            <div className='flex justify-center items-center'>
                <Link to='/3+0'><div className='hover:border-2 mx-10 my-2 rounded-md hover:border-white w-56 h-52 text-4xl text-white flex justify-center items-center'>3+0</div></Link>
                <Link to='/3+2'><div className='hover:border-2 mx-10 my-2 rounded-md hover:border-white w-56 h-52 text-4xl text-white flex justify-center items-center'>3+2</div></Link>
                <Link to='/5+0'><div className='hover:border-2 mx-10 my-2 rounded-md hover:border-white w-56 h-52 text-4xl text-white flex justify-center items-center'>5+0</div></Link>
                <Link to='/5+3'><div className='hover:border-2 mx-10 my-2 rounded-md hover:border-white w-56 h-52 text-4xl text-white flex justify-center items-center'>5+3</div></Link>
            </div>
        </div>
        <div className=' flex flex-col justify-center item-center  h-64'>
            <div><h1 className='text-center text-[#04DBAD] text-3xl'>Rapid</h1></div>
            <div className='flex justify-center items-center'>
                <Link to='/10+0'><div className='hover:border-2 mx-10 my-2 rounded-md hover:border-white w-56 h-52 text-4xl text-white flex justify-center items-center'>10+0</div></Link>
                <Link to='/10+5'><div className='hover:border-2 mx-10 my-2 rounded-md hover:border-white w-56 h-52 text-4xl text-white flex justify-center items-center'>10+5</div></Link>
                <Link to='/15+10'><div className='hover:border-2 mx-10 my-2 rounded-md hover:border-white w-56 h-52 text-4xl text-white flex justify-center items-center'>15+10</div></Link>
            </div>
        </div>
        <div className=' flex flex-col justify-center item-center  h-64'>
            <div><h1 className='text-center text-[#04DBAD] text-3xl'>Classical</h1></div>
            <div className='flex justify-center items-center'>
               <Link to='/30+0'><div className='hover:border-2 mx-10 my-2 rounded-md hover:border-white w-56 h-52 text-4xl text-white flex justify-center items-center'>30+0</div></Link>
                <Link to='/30+20'><div className='hover:border-2 mx-10 my-2 rounded-md hover:border-white w-56 h-52 text-4xl text-white flex justify-center items-center'>30+20</div></Link>
                
            </div>
        </div>
    </div>
  )
}

export default Home