import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FbgetList } from '../Config/FirebaseMethod';
import Nav from '../Components/Nav';
import { getAuth, signOut } from 'firebase/auth';
import { app } from '../Config/FirebaseConfig';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


export default function AcceptorTable() {
    const navigate = useNavigate();
    const param = useParams()
    // console.log(param.id)
    const [Donorlist, SetDonorlist] = useState<any>([]);

    useEffect(() => {
        FbgetList("DonorForm").then((res) => {
            // console.log(res);
            SetDonorlist(res);
        }).catch((err) => {
            alert(err)
        })
    }, []);

    let Donorgroup
    if (param.id == "Group A") {
        Donorgroup = Donorlist.filter((obj: any, index: any) => {
            return (obj.bloodgroup === "Group A" || obj.bloodgroup === "Group AB")
        })
    }
    if (param.id == "Group O") {
        Donorgroup = Donorlist.filter((obj: any, index: any) => {
            return (obj)
        })
    }
    if (param.id == "Group AB") {
        Donorgroup = Donorlist.filter((obj: any, index: any) => {
            return (obj.bloodgroup === "Group AB")
        })
    }
    if (param.id == "Group B") {
        Donorgroup = Donorlist.filter((obj: any, index: any) => {
            return (obj.bloodgroup === "Group B" || obj.bloodgroup === "Group AB")
        })
    }

    console.log(Donorgroup)
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
        <div>
            <Nav click={handleLogout} class="Navbar" />
            <div className="container my-5">
                <div className='d-flex justify-content-between mb-5'>
                    <h1 style={{ color: "red" }}>Donor List</h1>
                </div>
                <TableContainer component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Donor Name</StyledTableCell>
                                <StyledTableCell> Donor Contact</StyledTableCell>
                                <StyledTableCell>Donor Address</StyledTableCell>
                                <StyledTableCell>Gender</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Donorgroup.map((obj: any, index: number) => (
                                <StyledTableRow key={index}>
                                    <StyledTableCell component="th" scope="obj">
                                        {obj.DonorName}
                                    </StyledTableCell>
                                    <StyledTableCell >{obj.Phonenum}</StyledTableCell>
                                    <StyledTableCell >{obj.DonorAddress}</StyledTableCell>
                                    <StyledTableCell >{obj.Gender}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}
