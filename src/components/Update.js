import { Button, Card, CardActions, CardContent, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';





function Update () {
    
    const[firstName,setFirstName] = useState("")
    const[lastName,setLastName] = useState("")
    const [checkbox,setCheckbox] = useState(false)
    const[id,setId] = useState('')

    const navigate = useNavigate()

    const updateData = () => {
        
        axios.put(`https://635f8bc6ca0fe3c21a9e6df0.mockapi.io/FakeData/${id}`,{
          firstName,
          lastName,
          checkbox
        })

        navigate('/read')
    }

    useEffect(() =>{
setFirstName(localStorage.getItem('First Name'))
setLastName(localStorage.getItem('Last Name'))
setCheckbox(localStorage.getItem('CheckBox Value'))
setId(localStorage.getItem('Id'))
    },[])
  return (
    <>
  <Card>
    <CardContent>
     <Box
       component="form"
       sx={{
         '& > :not(style)': { m: 2, width: '55ch' },
       }}  >
 
       <TextField id="standard-basic" label="First Name" variant="standard" value={firstName} onChange={(e) => { setFirstName(e.target.value )}}/> 
       </Box>
       <Box  
       component="form"
       sx={{
         '& > :not(style)': { m: 1, width: '55ch' },
       }} >
       <TextField id="standard-basic" label="Last Name" variant="standard" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
     </Box>
     <FormGroup>
      <FormControlLabel sx={{m:2}} control={<Checkbox  onChange={() =>{setCheckbox(!checkbox)}}/>} checked={checkbox} label="I agree to the Terms and Conditions" />
    </FormGroup>
    <CardActions sx={{ justifyContent: "center" }}>
        <Button onClick={updateData} variant="contained" type='submit'>Update</Button>
    </CardActions>
     </CardContent>
     </Card>
     </>
  )
}

export default Update