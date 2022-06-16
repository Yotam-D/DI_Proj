import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function Login(props) {
  const {title} = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg,setMsg] = useState('');

  useEffect(()=> {
    setMsg('');
  },[]);

  const handleAction = (id)=>{
    if (id=='Register'){
      console.log('Register')
    } else if (id == 'Login') {
      console.log('Login')
    }
  }

    return (
    <>
      <div>
        <div>
            <h3>{title} form</h3>
        </div>
        <Box component="form" sx={{m:1}} noValidate autocomplete='off'>
          <TextField sx= {{m:1}} id="email" label = "Enter Email" variant="outlined" onChange={(e)=>setEmail(e.target.value)}/>
          <TextField sx= {{m:1}} id="password" label = "Enter Password" variant="outlined" onChange={(e)=>setPassword(e.target.value)}/>
        </Box>
        <Button variant='contained' onClick={()=>handleAction(title)}>{title}</Button>
      </div>
      <div>
        <p>{msg}</p>
      </div>
      <div>
        {title=='Register' ? 
        <Link to='/login'>Login</Link> : 
        <Link to='/register'>Register</Link> }
      </div>
    </>
  )
}
