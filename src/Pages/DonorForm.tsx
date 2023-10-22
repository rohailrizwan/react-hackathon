import React from 'react'
import useState from 'react'
import MYInput from '../Components/MyInput';
import { Box, Typography } from '@mui/material';
import { FbForm } from '../Config/FirebaseMethod';
import { getAuth, signOut } from 'firebase/auth';
import { app } from '../Config/FirebaseConfig';
import { useNavigate } from 'react-router-dom';


export default function DonorForm() {
    const navigate=useNavigate()
    const [DonorForm, SetDonorForm] = React.useState<any>({})
    const bloodgroup = ["Group A", "Group B", "Group AB", "Group O"]
    const [selectedGender, SetselectedGender] = React.useState('')

    let fillModel = (key: string, value: any) => {
        DonorForm[key] = value;
        SetDonorForm({ ...DonorForm });
    }

    const register = () => {
        console.log(DonorForm)
        if (
            !DonorForm.DonorName ||
            !DonorForm.DonorAddress ||
            !DonorForm.Gender||
            !DonorForm.Phonenum ||
            !DonorForm.DonorCnic ||
            !DonorForm.bloodgroup
        ) {
            alert("Please fill out all fields.");
        } else {
            FbForm(DonorForm,"DonorForm").then((res)=>{
                        alert(res)
                        // SetDonorForm({})
                    })
                    .catch((err)=>{
                        alert(err)
                    })
        }
    }
    const handleDropdownChange = (selectedValue: string) => {
        SetDonorForm({ ...DonorForm, bloodgroup: selectedValue })
    };
    let handlechange = (e: any) => {
        SetselectedGender(e.target.value);
        fillModel('Gender', e.target.value);
    }

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
        <div className='container my-3'>
            <div className="d-flex justify-content-between align-items-center">
            <h1 className='User-form my-5' style={{color:"red"}}>Donor Registration Form</h1>
            <button className='btn btn-primary rounded-2' style={{width:"100px",height:"50px",backgroundColor:"red",color:"white",border:"none"}} onClick={handleLogout}>Logout</button>
            </div>
            <div className="row">
                <div className="col-md-5 col-sm- mb-5 me-5">
                    <MYInput placeholder='Donor Name' type="text" myval={DonorForm.DonorName} head='Donor Name' className='user-input' change={(e: any) => fillModel("DonorName", e.target.value)} />
                </div>
                <div className="col-md-5 col-sm- mb-5 me-5">
                    <MYInput placeholder='Donor Address' type="text" myval={DonorForm.DonorAddress} head='Donor Address' className='user-input' change={(e: any) => fillModel("DonorAddress", e.target.value)} />
                </div>
                <Box className="gender col-md-5 col-sm-6 mb-5 me-5 ">
                    <Typography className='ms-2'> Gender</Typography>
                    <div className='d-flex ms-2'>
                        <label htmlFor="Male" className='me-5 mt-3'>
                            <input
                                type="radio"
                                value="Male"
                                checked={selectedGender === 'Male'}
                                onChange={handlechange}
                            />
                            Male
                        </label>
                        <label htmlFor="Female" className='mt-3'>
                            <input
                                type="radio"
                                value="Female"
                                checked={selectedGender === 'Female'}
                                onChange={handlechange}
                            />
                            Female
                        </label>
                    </div>
                </Box>
                <div className="col-md-5 col-sm- mb-5 me-5">
                    <MYInput placeholder='Phone Number' type="text" myval={DonorForm.Phonenum} head='Donor Number' className='user-input' change={(e: any) => fillModel("Phonenum", e.target.value)} />
                </div>
                <div className="col-md-5 col-sm- mb-5 me-5">
                    <MYInput placeholder='User Cnic' type="text" myval={DonorForm.DonorCnic} head="User Cnic" className='user-input' change={(e: any) => fillModel("DonorCnic", e.target.value)} />
                </div>
                <div className="col-md-5 col-sm- mb-5 me-5">
                    <div className=''>
                        <h6 className='mb-2 ms-2 text-start'>Blood group</h6>
                        <select name="instituteType" className='user-dropdown' value={DonorForm.bloodgroup} onChange={(e: any) => handleDropdownChange(e.target.value)}>
                            {bloodgroup.map((opt, index) => {
                                return (
                                    <option value={opt} key={index} className='p-5'>
                                        {opt}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                </div>
                <div>
                    <button onClick={register} className='btn' style={{ backgroundColor: "red", color: "white" }}>Register</button>
                </div>
            </div>
        </div>
    )
}