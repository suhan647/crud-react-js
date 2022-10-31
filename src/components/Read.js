import React,{useEffect,useState} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import axios from 'axios';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
//icons
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';




function Read() {

    const[apiData,setApiData] = useState([])

    const navigate= useNavigate()

     useEffect(() => {
        axios.get(`https://635f8bc6ca0fe3c21a9e6df0.mockapi.io/FakeData`)
        .then((response) =>{
            setApiData(response.data)
        }) 
    },[])
    
    
  const setData = (value) => {
    let { id, firstName, lastName, checkbox } = value
    localStorage.setItem('Id', id);
    localStorage.setItem('First Name', firstName);
    localStorage.setItem('Last Name',lastName);
    localStorage.setItem('CheckBox Value',checkbox);
    
  }

  const getData = () => {
    axios.get(`https://635f8bc6ca0fe3c21a9e6df0.mockapi.io/FakeData`)
    .then((response)=>{
        setApiData(response.data)
    })
  }

  const deleterequest = (id) => {

    axios.delete(`https://635f8bc6ca0fe3c21a9e6df0.mockapi.io/FakeData/${id}`)
    .then(() =>{
        getData();
    })

   
  }
  

  return (
    <>
    <Box>
   <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell >Last Name</TableCell>
            <TableCell >Checked</TableCell>
            <TableCell>Update</TableCell>
            <TableCell>Delete</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {apiData.map((value) =>{
                return(
                    <TableRow key={value.id}>
                    <TableCell>
                        {value.firstName}
                    </TableCell>
                    <TableCell>
                        {value.lastName}
                    </TableCell>
                    <TableCell>{value.checkbox ? 'checked' : 'unchecked'}</TableCell>
                    
                    
                    <TableCell>
                    <Link to='/update'>
                    <Button onClick={() => setData(value)}>Update</Button>   
                    </Link>
                    </TableCell>

                    <TableCell>
                        <Button variant='outlined' color="error"  onClick={() => deleterequest(value.id)}><DeleteIcon/></Button>
                    </TableCell>
                   
                </TableRow>

                );
            })}
            
        </TableBody>
    </Table>
   </TableContainer>
   <Box sx={{ mt:'30px',ml:'0'}}>
   <Button  onClick={() => navigate('/')}><KeyboardBackspaceRoundedIcon fontSize='medium'/>Back</Button>
   </Box>
   </Box>
    </>
  )
}

export default Read