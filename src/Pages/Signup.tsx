import React from 'react'
import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"
import { fbSignUp } from '../Config/FirebaseMethod';
import Loginimage from '../images/login image.avif'
// import { fbSignUp } from '../config/Firebasemethod';
// import { useNavigate } from "react-router-dom";

export default function Signup() {
    const [id, setid] = useState<any>({})
    const [SelectRole, SetSelectRole] = useState<string>("user")

    const bloodgroup=["Group A", "Group B","Group AB","Group O"]

    let logindiv: any = {
        textAlign: "center",
        backgroundColor: "white",
        border: "2px solid none",
        borderRadius: "10px",
        boxShadow: "4px 7px 10px #cab3b3b5",
        padding: "50px"
    }

    let fillModel = (key: string, value: any) => {
        id[key] = value;
        setid({ ...id });
    }

    let signup = () => {
    //    console.log(id)
        fbSignUp(id,"users").then((res)=>{
            // console.log(res)
        })
        .catch((err)=>{
            alert(err)
        })
        
    }

    return (
        <div className='w-100'>
            <div className="row allign-items-center w-100 m-0">
                <div className="col-md-6 col-sm-6 col-12">
                    <div className='Login-image'>
                        <img src={Loginimage} alt="" className='img-fluid'/>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6 col-12 bg-Login">
                    <Box style={{ width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", }}>
                        <Box style={logindiv} className="Signupdiv">
                        <Box className='py-3'>
                                <Typography className='fs-3' style={{color:"#1976d2"}}>
                                   Sign up
                                </Typography>
                            </Box>
                            <Box className='py-3'>
                            <TextField
                                    variant="outlined"
                                    type="text"
                                    label="User Name"
                                    style={{ color: "gray" }}
                                    onChange={(e: any) => fillModel("username", e.target.value)}

                                />
                            </Box>
                            <Box className="py-3">
                                <TextField
                                    variant="outlined"
                                    type="email"
                                    label="Email"
                                    style={{ color: "gray" }}
                                    onChange={(e: any) => fillModel("email", e.target.value)}

                                />
                            </Box>
                            <Box className="py-3">
                                <TextField
                                    variant="outlined"
                                    type="password"
                                    label="Password"
                                    style={{ color: "gray" }}
                                    onChange={(e: any) => fillModel("password", e.target.value)}

                                />
                            </Box>
                            <Box>
                                <Typography className='mb-4'style={{color:"#1976d2"}}>Blood Group</Typography>
                                <select name="" id="" className='blood-dropdown' onChange={(e:any)=>fillModel("bloodgroup",e.target.value)}>
                                    {
                                        bloodgroup.map((obj,index)=>{
                                            return(
                                                <option value={obj}>{obj}</option>
                                            )
                                        })
                                    }
                                </select>
                            </Box>
                            <Box className="py-1 mb-3">
                                <Button variant="contained" onClick={signup}>Sign up</Button>
                            </Box>
                            <Box className="p-2" >
                                <h4><NavLink to="/" style={{fontSize:"15px",textDecoration:"none"}}>Back to Login</NavLink></h4>
                            </Box>
                        </Box>

                    </Box>
                </div>
            </div>
        </div>
    )
}