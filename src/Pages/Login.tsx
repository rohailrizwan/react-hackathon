import React, { useEffect } from 'react'
import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { fbLogin } from '../Config/FirebaseMethod';
import Loginimage from '../images/login image.avif'


export default function Login() {
    let logindiv: any = {
        textAlign: "center",
        backgroundColor: "white",
        border: "2px solid none",
        borderRadius: "10px",
        boxShadow: "4px 7px 10px #cab3b3b5",
        padding: "50px"
    }
    const [LoginModel, SetLoginmodel] = useState<any>({})
    let fillModel = (key: string, value: any) => {
        LoginModel[key] = value
        SetLoginmodel({ ...LoginModel })

    }
    const navigate = useNavigate()
    let Loginuser = () => {
        // console.log(fillModel)
        fbLogin(LoginModel, "users").then((res: any) => {
            // console.log(res)
            navigate(`/Home/${res.bloodgroup}`)
        })
            .catch((err) => {
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
                        <Box style={logindiv} className="Logindiv">
                            <Box className='py-3'>
                                <Typography className='fs-3' style={{color:"#1976d2"}}>
                                    Login
                                </Typography>
                            </Box>
                            <Box className="p-3">
                                <TextField
                                    variant="outlined"
                                    type="email"
                                    label="Email"
                                    style={{ color: "gray" }}
                                    onChange={(e: any) => fillModel("email", e.target.value)}

                                />
                            </Box>
                            <Box className="p-3">
                                <TextField
                                    variant="outlined"
                                    type="password"
                                    label="Password"
                                    style={{ color: "gray" }}
                                    onChange={(e: any) => fillModel("password", e.target.value)}

                                />
                            </Box>

                            <Box className="p-3 mb-3">
                                <Button variant="contained" onClick={Loginuser}>Login</Button>
                            </Box>
                            <Box className="p-3">
                                <h4><NavLink to="/Signup">Register</NavLink></h4>
                            </Box>
                        </Box>

                    </Box>
                </div>
            </div>
        </div>
    )
}