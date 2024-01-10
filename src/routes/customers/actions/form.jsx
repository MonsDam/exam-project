import { Box, Button, Grid, TextField } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from "react";
import { supabase } from "../../../services/config/config";

const genderTypes = [
    {
        value: "hombre",
        label: "Hombre"
    },
    {
        value: "mujer",
        label: "Mujer"
    },
    {
        value: "otro",
        label: "Otro"
    }
    
]

function AddForm() {
    const [loading, setLoading] = useState(false);
    const [dataSend, setDataSend] = useState({
        name: "",
        lastname: "",
        secondlastname: "",
        age: null,
        email:"",
        gender: "",
        curp: ""
    })

    const handleAddCustomer = async() => {

        setLoading(true);
        try{
            console.log({dataSend})
            const {data} =  await supabase.from('customers').insert(dataSend).select().single();

            console.log({data})
        }  catch (error) {
            alert(error.message);
          } 
          setLoading(false)
    }

    return (
    <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={16}>
                <Grid item xs={8}>
                    <TextField 
                    id="outlined-basic" 
                    label="Nombre(s)" 
                    margin="normal" 
                    variant="outlined" 
                    fullWidth 
                    onChange={(e) => setDataSend({...dataSend, name: e.target.value})}
                    />
                </Grid>
                <Grid item xs={8}>
                    <TextField 
                    id="outlined-basic" 
                    label="Apellido paterno" 
                    margin="normal" 
                    variant="outlined" 
                    fullWidth 
                    onChange={(e) => setDataSend({...dataSend, lastname: e.target.value})}
                    />
                </Grid>
                <Grid item xs={8}>
                    <TextField 
                    id="outlined-basic" 
                    label="Apellido materno)" 
                    margin="normal" 
                    variant="outlined" 
                    fullWidth 
                    onChange={(e) => setDataSend({...dataSend, secondlastname: e.target.value})}
                    />
                </Grid>
                <Grid item xs={8}>
                    <TextField 
                    id="outlined-basic" 
                    label="Edad" 
                    margin="normal" 
                    variant="outlined" 
                    fullWidth 
                    onChange={(e) => setDataSend({...dataSend, age: e.target.value})}
                    />
                </Grid>
                <Grid item xs={8}>
                    <TextField 
                    id="outlined-basic" 
                    label="correo electrónico" 
                    margin="normal" 
                    variant="outlined" 
                    fullWidth 
                    onChange={(e) => setDataSend({...dataSend, email: e.target.value})}
                    />
                </Grid>
                <Grid item xs={8}>
                    <TextField 
                    id="outlined-basic" 
                    label="Curp" 
                    margin="normal" 
                    variant="outlined" 
                    fullWidth 
                    onChange={(e) => setDataSend({...dataSend, curp: e.target.value})}
                    /> 
                </Grid>
            </Grid>
            <Grid container columns={16} sx={{mt:2, ml:1}}>
            <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Sexo</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            {
                                genderTypes.map((genderType, index) => (
                                    <FormControlLabel 
                                    key={index} 
                                    value={genderType.value} 
                                    control={<Radio />} 
                                    label={genderType.label} 
                                    onChange={(e) => setDataSend({...dataSend, gender: e.target.value})}
                                    />  
                                ) )
                            }
                        </RadioGroup>
                    </FormControl>
            </Grid>
            <Button disabled={loading} onClick={() => handleAddCustomer()} >Guardar</Button>
    </Box>
    )
}

export default AddForm; 