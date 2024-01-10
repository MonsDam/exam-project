import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';
import AddForm from './form';
import { useState } from "react";

export default function FormDialog({refreshFunction, customers, accounts}) {
    console.log("addAccount", accounts);
    console.log("addCustom", customers);

  const [open, setOpen] = useState(false);

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
        Crear cuenta
      </Button>
    </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Crear Cliente</DialogTitle>
        <DialogContent>
            <AddForm customers={customers} accounts={accounts} />
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleAddCustomer}>Guardar</Button> */}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}