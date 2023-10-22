import React from 'react'
import Cards from './Card'
import graph from '../images/graph.png'
import { getAuth, signOut } from 'firebase/auth';
import { app } from '../Config/FirebaseConfig';
import { useNavigate } from 'react-router-dom';

export default function MainDashboard() {
    const navigate=useNavigate()
    let auth = getAuth(app)
     const handleLogout = () => {
        signOut(auth).then((res:any) => {
          navigate('/')
        //   console.log("Signed out successfully")
        }).catch((error) => {
          // An error happened.
        });
      }
  return (
    <div>
        <div className="container pt-5">
                    <div className="overview mb-4 d-flex justify-content-between">
                        <h1>Overview</h1>
                        <button style={{backgroundColor:"blueviolet",color:"white",width:"150px"}} className='btn rounded-2' onClick={handleLogout}>Log out</button>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-sm-12 mb-4">
                            <Cards subject='Total courses' number='5 Courses' />
                        </div>
                        <div className="col-md-6 col-sm-12 mb-4">
                            <Cards subject='Total No of Students' number="450 Students" />
                        </div>
                        <div className="col-md-6 col-lg-6 mb-5">
                            <div className="studentgraph rounded-2">
                                <h3 style={{color:"blueviolet"}} className="mb-5">Graphical Representation</h3>
                                <img src={graph} alt="" className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 mb-4">
                            <div className="recent rounded-2 mb-4">    
                                    <h3 className=' mb-3' style={{color:"blueviolet"}}>Recent Activity</h3>
                                    <ul>
                                        <li>Course created by Instructor A</li>
                                        <li>Student xyz registered</li>
                                        <li>Quiz submitted by Student B</li>
                                    </ul>      
                            </div>
                            <div className='events rounded-2'>
                                    <h3 className=' mb-3' style={{color:"blueviolet"}}>Upcoming Events</h3>
                                    <ul>
                                        <li>Assignment deadline for Course web development (Tomorrow)</li>
                                        <li>Quiz deadline for Course graphic designing (Next Week)</li>
                                    </ul>
                                </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}
