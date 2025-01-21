import React from 'react'
import TableCard from '../components/TableCard'
import {Link} from "@inertiajs/react"


const home = ({shift_target}) => {
  

  return (
    <div className='bg-gradient-to-b from-notus-blue from-50% to-notus-grey to-50%'>
      <br />
      
      <Link
      className=' text-lg p-2 width-40 bg-lime-500 mt-4 ml-4 rounded-xl shadow-xl hover:bg-yellow-400 hover:text-slate-700 '
      href='/ChangeTarget'
      >
        Change Data
      </Link>

      <TableCard shift_target ={shift_target} />
    </div>
  )
}

export default home