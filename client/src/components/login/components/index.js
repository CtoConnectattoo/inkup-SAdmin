import React, { useRef } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { loginAdmin } from '../../../helpers/authHelpers';

export const LoginComponent = ({setToken}) => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    


    const onFormSubmit = async (e) =>{
        e.preventDefault();

        try{
          const email = emailRef.current.value;
          const password = passwordRef.current.value;
          let response = await loginAdmin({email, password});
          console.log(response);
        }
        catch (error) {}
    };
    

  return (
    <>

    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={onFormSubmit}
    >
      <TextField 
        id="outlined-basic" 
        label="Email" 
        variant="outlined"
        inputRef={emailRef}
       
        />
        

      <TextField 
        id="outlined-basic" 
        label="Passwordad" 
        variant="outlined"
        inputRef={passwordRef} />
      
      <Button 
        variant="contained"
        type="submit">Iniciar sesión</Button>
    </Box>
      </>
  );


  
  
}
