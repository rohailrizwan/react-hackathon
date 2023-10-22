import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

type def = {
  click: any,
  class:String
}
export default function Nav(props: def) {
  const navigate = useNavigate()
  return (
    <div>
      <nav className={`navbar navbar-expand-lg my-0 ${props.class}`} >
        <div className="container-fluid">
          <h3 onClick={() => navigate(`/`)} style={{cursor:"pointer"}} className='me-4'>Blood Donation</h3>
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <button className=' rounded-2 my-2 px-4 py-2' style={{ color: "white" , backgroundColor:"red",border:"none" }} onClick={props.click}>Sign out</button>
        </div>
      </nav>
    </div>
  )
}
