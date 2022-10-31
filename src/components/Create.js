import { Button, Card, CardActions, CardContent, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function Create() {
    
    const[firstName,setFirstName] = useState("")
    const[lastName,setLastName] = useState("")
    const [checkbox,setCheckbox] = useState(false)

    const navigate = useNavigate()

    const postData = () => {
        axios.post(`https://635f8bc6ca0fe3c21a9e6df0.mockapi.io/FakeData`,{
            firstName,
            lastName,
            checkbox
        })
        navigate('/read')
    }
  return (
    <>
  <Card>
    <CardContent>
     <Box
       component="form"
       sx={{
         '& > :not(style)': { m: 2, width: '55ch' },
       }}  >
 
       <TextField id="standard-basic" label="First Name" variant="standard" onChange={(e) => { setFirstName(e.target.value )}}/> 
       </Box>
       <Box  
       component="form"
       sx={{
         '& > :not(style)': { m: 1, width: '55ch' },
       }} >
       <TextField id="standard-basic" label="Last Name" variant="standard" onChange={(e) => setLastName(e.target.value)}/>
     </Box>
     <FormGroup>
      <FormControlLabel sx={{m:2}} control={<Checkbox  onChange={() =>{setCheckbox(!checkbox)}}/>} label="I agree to the Terms and Conditions" />
    </FormGroup>
    <CardActions sx={{ display: 'flex',justifyContent: "space-between" }}>
        <Button onClick={postData} variant="contained" color='success' type='submit' >Add</Button>
        <Button variant="contained" onClick={() => navigate('/read')}>Manage names</Button>
    </CardActions>
     </CardContent>
     </Card>
     </>
  )
}

export default Create