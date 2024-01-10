import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';
import AddForm from './form';
import { useState } from "react";
// import { supabase } from '../../../services/config/config';

export default function FormDialog() {
  const [open, setOpen] = useState(false);
//   const [dataSend, setDataSend] = useState({
//     name: "",
//     lastname: "",
//     secondlastname: "",
//     age: null,
//     email:"",
//     gender: "",
//     curp: ""
// })

// console.log("dialog", dataSend)

// const handleAddCustomer = async(event) => {
//     event.preventDefault();

//     const newCustomer = {
//         dataSend
//     };

//     const result = await supabase.from('customers').insert(newCustomer).select().single();
//     setDataSend("");

//     console.log(result);
// }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
    <Box sx={{ display: "flex" }}>
      <Button variant="outlined" sx={{ ml: "auto", mr:10 }} onClick={handleClickOpen}>
        Crear cliente
      </Button>
    </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Crear Cliente</DialogTitle>
        <DialogContent>
            <AddForm />
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleAddCustomer}>Guardar</Button> */}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}