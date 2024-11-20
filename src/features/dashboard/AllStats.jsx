import React from 'react'
import Stat from './Stat'
import { HiOutlineBanknotes, HiOutlineBriefcase, HiOutlineCalendarDays, HiOutlineChartBar } from 'react-icons/hi2'
import { formatCurrency } from '../../utils/helpers'

function AllStats({bookings, confirmedStays, numDays, cabinsCount}) {
    const numBookings = bookings?.length

    const sales = bookings?.reduce((acc, cur) => acc + cur.totalPrice, 0)

    const checkedIn = confirmedStays?.length

    const occupancy = confirmedStays?.reduce((acc, cur) => acc + cur.numNights, 0) / (numDays * cabinsCount)

  return (
    <>
        <Stat title={'Bookings'} icon={<HiOutlineBriefcase />} color={'blue'} value={numBookings}/>
        <Stat title={'Sales'} icon={<HiOutlineBanknotes />} color={'green'} value={formatCurrency(sales)}/>
        <Stat title={'Checked In'} icon={<HiOutlineCalendarDays />} color={'indigo'} value={checkedIn}/>
        <Stat title={'Occupancy Rate'} icon={<HiOutlineChartBar />} color={'yellow'} value={Math.round(occupancy * 100) + '%'}/>
       
    </>
  )
}

export default AllStats