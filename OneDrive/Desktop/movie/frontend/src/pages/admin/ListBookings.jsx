import React, { use, useState } from 'react'
import { dummyBookingData } from '../../assets/assets';
import Loading from '../../components/Loading';
import Title from '../../components/admin/Title';
import { useEffect } from 'react';
import { dateFormat } from '../../lib/dateFormat';


const ListBookings = () => {
  const currency = import.meta.env.VITE_CURRENCY

  const [bookings, setBookings] = useState([])
  const [isloading, setIsLoading] = useState(true)


  const getAllBookings = async () => {
    setBookings(dummyBookingData)
    setIsLoading(false);
  }

  useEffect(() => {
    getAllBookings();
  }, []);

  return !isloading ? (
    <>
      <Title text1="List" text2="Bookings"/>
      <div className="max-w-4xl mt-6 overflow-x-auto">
        <table className="w-full border-collapse rounded-md overflow-hidden text-nowrap">
          <tbody className='text-sm font-light'>
            {bookings.map((item, index) => (
              <tr key={index} className='border-b border-primary/20 bg-primary/5 even:bg-primary/10'>
                <td className="p-2 min-w-45 pl-5">{item.user.name}</td>
                <td className="p-2">{dateFormat(item.show.showdateTime)}</td>
                <td className="p-2">{Object.keys(item.bookedSeats).map(seat => item.bookedSeats[seat]).join(", ")}</td>
                <td className="p-2">{currency} {item.amount}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </>
  ) : <Loading/>
}

export default ListBookings