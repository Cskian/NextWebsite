'use client';

import { useSearchParams } from "next/navigation"
import Image from 'next/image'
import React, { useEffect } from "react";



const RoomList = [
  {
    roomname: "Superior Room",
    cancellationText: "Non Refundable",
    offer: "No Offer Available",
    boradType: "Room Only",
    price: "AED 200"
  },
  {
    roomname: "Twin/Double Room - Superior",
    cancellationText: "Non Refundable",
    offer: "No Offer Available",
    boradType: "Room Only",
    price: "AED 205"
  },
  {
    roomname: "Superior Double Or Twin Room",
    cancellationText: "Non Refundable",
    offer: "No Offer Available",
    boradType: "Room Only",
    price: "AED 220"
  }
  ,
  {
    roomname: "Superior - (Non Refundable)",
    cancellationText: "Non Refundable",
    offer: "No Offer Available",
    boradType: "Room Only",
    price: "AED 300"
  }

  ,
  {
    roomname: "Superior Room Twin Or Double",
    cancellationText: "Non Refundable",
    offer: "No Offer Available",
    boradType: "Room Only",
    price: "AED 200"
  },
  {
    roomname: "Superior - (Non Refundable)",
    cancellationText: "Non Refundable",
    offer: "No Offer Available",
    boradType: "Room Only",
    price: "AED 350"
  },
  {
    roomname: "Double Or Twin Superior Room Twin Or Double",
    cancellationText: "Non Refundable",
    offer: "No Offer Available",
    boradType: "Room Only",
    price: "AED 450"
  },
  {
    roomname: "Superior - Room",
    cancellationText: "Non Refundable",
    offer: "No Offer Available",
    boradType: "Room Only",
    price: "AED 465"
  },
  {
    roomname: "Superior - (Non Refundable)",
    cancellationText: "Non Refundable",
    offer: "No Offer Available",
    boradType: "Room Only",
    price: "AED 4650"
  },
  {
    roomname: "Double Or Twin Superior Room",
    cancellationText: "Non Refundable",
    offer: "No Offer Available",
    boradType: "Room Only",
    price: "AED 200"
  }

]

export default function Detail() {

  const searchParams = useSearchParams();
  const hotelname = searchParams.get('hotelname')

  useEffect(() => {
  }, [])


  return (
    <main className="main-container">
      <div>
      </div>
      <div>
        <Image
          className='mb-4'
          src={"https://d1i3enf1i5tb1f.cloudfront.net/assets/Images/AGT-06437/raynatourslogo.png"}
          alt="Rayna Tours"
          width={140}
          height={140}
        />
        <h5 className="font-semibold my-6">Hotel Detail</h5>


        <div className="hotel-card p-3">
          <div className="flex-col">
            <p className="font-bold">{hotelname}</p>
            <div className="flex mt-2">
              <div className="location" />
              <p className="mr-6">P.O. Box 33214,Dubai</p>
              <p className="text-orange-400">Get location - show map</p>
            </div>
          </div>
        </div>

        <div>


          <div className="flex">

            <div className="informationbox">
              <p className="mr-6 font-bold">Available Rooms</p>
              <div className="flex justify-between">

                <input type="text"
                  id="searchInput"
                  data-ng-model="SearchRoom" data-ng-change="SearchRoomCategory(SearchRoom)"
                  data-ng-paste="SearchRoomCategory(SearchRoom)"
                  placeholder="Search Your Room Category"
                  className="ng-pristine ng-valid ng-touched w-56"></input>
                <a className="clicksbm  w-48 bg-slate-6000" >Sort By Meal<span className="caret"></span></a>
              </div>

              <div className="">
                <div className="p-2 bg-gray-100 flex justify-between">
                  <p className="" style={{ fontSize: 14 }}>Room Types</p>
                  <p className="" style={{ fontSize: 14 }}>Borad Type</p>
                  <p className="" style={{ fontSize: 14 }}>Max</p>
                  <p className="" style={{ fontSize: 14 }}>Total for 1 Nights</p>
                  <p className="" style={{ fontSize: 14 }}>Policy</p>
                  <p className="" style={{ fontSize: 14 }}>Book</p>
                </div>
              </div>

              {RoomList.map((item) => (
                <div key={item.price}>
                  <div  className="flex justify-between w-full">
                    <div className=" w-40">
                      <p>{item.roomname}</p>
                      <p className="text-orange-300">
                        Essential Information
                      </p>
                      <p>{item.cancellationText}</p>
                      <p>{item.offer}</p>

                    </div>
                    <p className="w-40">{item.boradType}</p>

                    <p className="w-40">5</p>

                    <p className="w-40">{item.price}</p>

                    <div className="policy w-40" />

                    <div className="rounded p-1 bg-orange-500 w-28 h-8">
                      <p className="items-center justify-center text-center text-white"
                        style={{ fontSize: 14 }}  >
                        Add to Cart
                      </p>
                    </div>

                  </div>

                </div>
              ))}

            </div>


            <div >
              <p className="mr-6 ">Map View</p>
            </div>


          </div>
          <div className="informationbox">

            <p>Description</p>
            <div className="bg-gray-100 p-1">
              <p className="pl-2">Rooms</p>

            </div>
            <p>Make yourself at home in one of the 135 air-conditioned rooms featuring LCD televisions. Complimentary wireless Internet access keeps you connected, and cable programming is available for your entertainment. Private bathrooms with bathtubs feature complimentary toiletries and hair dryers. Conveniences include phones, as well as safes and desks.</p>

            <p>Description</p>
            <div className="bg-gray-100 p-1">
              <p className="pl-2">Rooms</p>

            </div>
            <p>Make yourself at home in one of the 135 air-conditioned rooms featuring LCD televisions. Complimentary wireless Internet access keeps you connected, and cable programming is available for your entertainment. Private bathrooms with bathtubs feature complimentary toiletries and hair dryers. Conveniences include phones, as well as safes and desks.</p>
            <p>Description</p>
            <div className="bg-gray-100 p-1">
              <p className="pl-2">Rooms</p>

            </div>
            <p>Make yourself at home in one of the 135 air-conditioned rooms featuring LCD televisions. Complimentary wireless Internet access keeps you connected, and cable programming is available for your entertainment. Private bathrooms with bathtubs feature complimentary toiletries and hair dryers. Conveniences include phones, as well as safes and desks.</p>
            <p>Description</p>
            <div className="bg-gray-100 p-1">
              <p className="pl-2">Rooms</p>

            </div>
            <p>Make yourself at home in one of the 135 air-conditioned rooms featuring LCD televisions. Complimentary wireless Internet access keeps you connected, and cable programming is available for your entertainment. Private bathrooms with bathtubs feature complimentary toiletries and hair dryers. Conveniences include phones, as well as safes and desks.</p>




          </div>

        </div>
      </div>

    </main >

  )
}