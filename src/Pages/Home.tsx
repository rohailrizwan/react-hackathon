import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Nav from '../Components/Nav'
import { getAuth, signOut } from 'firebase/auth'
import { app } from '../Config/FirebaseConfig'

export default function Home() {
  const navigate = useNavigate()
  const param = useParams()
  // console.log(param.id)
  let auth = getAuth(app)

  const handleLogout = () => {
      console.log("hello")
      signOut(auth).then((res: any) => {
          navigate('/')
          console.log("Signed out successfully")
      }).catch((error) => {
          // An error happened.
      });
  }
  return (
    <div className='bg-image'>
     <div  className='bg-color'>
     <Nav click={handleLogout} class="home-navbar"/>
      <div className='button-group d-flex justify-content-center align-items-center flex-column'>
        <button className='btn btn-primary rounded-2  mb-3' style={{ color: "red" , backgroundColor:"white",border:"none" ,width:"150px",height:"50px",fontWeight:"bold"}} onClick={() => navigate(`/Donor/${param.id}`)}>Donor</button>
        <button className=' btn  btn-primary rounded-2 ' style={{ color: "white" , backgroundColor:"red",border:"none" ,width:"150px",height:"50px",fontWeight:"bold"}} onClick={() => navigate(`/Acceptor/${param.id}`)}>Acceptor</button>
      </div>
     </div>
    </div>
  )
}
