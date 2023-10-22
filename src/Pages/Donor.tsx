import React from 'react'
import { useParams } from 'react-router-dom'
import DonorForm from './DonorForm'

export default function Donor() {
    const param=useParams()
    // console.log(param.id)
  return (
    <div>
      <DonorForm/>
    </div>
  )
}
