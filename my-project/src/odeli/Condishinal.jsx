
import React from 'react'

function Condishinal() {
  return (
    <div className='relative my-12'>
    <div className='flex flex-row flex-wrap justify-around'>
        <div className="w-96 h-80 p-8 my-16 rounded-3xl ">
                <img src="./public/lol.jpg" alt="" className="my-8 "/>
                <h3 className="font-bold text-2xl">Search doctor</h3>
                <p className=" font-light text-base ">Choose your doctor from thousands of specialist, general, and trusted hospitals</p>
            </div>
            <div className="w-96 h-80 p-8 my-16 rounded-3xl ">
                <img src="./public/lol.jpg" alt="" className="my-8 "/>
                <h3 className="font-bold text-2xl">Online pharmacy</h3>
                <p className=" font-light text-base ">Buy  your medicines with our mobile application with a simple delivery system</p>
            </div>
            <div className="w-96 h-80 p-8 my-16 rounded-3xl ">
                <img src="./public/lol.jpg" alt="" className="my-8 "/>
                <h3 className="font-bold text-2xl">Consultation</h3>
                <p className=" font-light text-base ">Free consultation with our trusted doctors and get the best recomendations</p>
            </div>
            <div className="w-96 h-80 p-8 my-16 rounded-3xl">
                <img src="./public/lol.jpg" alt="" className="my-8 "/>
                <h3 className="font-bold text-2xl">Details info</h3>
                <p className=" font-light text-base ">Free consultation with our trusted doctors and get the best recomendations</p>
            </div>
            <div className="w-96 h-80 p-8 my-16 rounded-3xl">
                <img src="./public/lol.jpg" alt="" className="my-8 "/>
                <h3 className="font-bold text-2xl">Emergency care</h3>
                <p className=" font-light text-base ">You can get 24/7 urgent care for yourself or your children and your
                    lovely family</p>
            </div>
            <div className="w-96 h-80 p-8 my-16 rounded-3xl">
                <img src="./public/lol.jpg" alt="" className="my-8 "/>
                <h3 className="font-bold text-2xl">Tracking</h3>
                <p className=" font-light text-base ">Track and save your medical history and health data </p>
            </div>
        
    </div>
    <button className=" border-2 border-sky-500 text-sky-600 bg-white w-52 h-16 rounded-3xl font-bold text-lg mx-96">Leorn more</button>
    </div>
  )
}

export default Condishinal