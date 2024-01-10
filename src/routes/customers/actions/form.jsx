import { Box, Button, Grid, TextField } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from "react";
import { supabase } from "../../../services/config/config";
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    name: Yup.string().matches(/^[A-Za-z]+$/, 'Solo se permiten letras').required('Campo requerido'),
    lastname: Yup.string().matches(/^[A-Za-z]+$/, 'Solo se permiten letras').required('Campo requerido'),
    secondlastname: Yup.string().matches(/^[A-Za-z]+$/, 'Solo se permiten letras').required('Campo requerido'),
    email: Yup.string()
    .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Correo electrónico no válido')
    .required('Campo requerido'),
    age: Yup.number()
    .typeError('Debe ser un número')
    .positive('La edad debe ser un número positivo')
    .integer('La edad debe ser un número entero')
    .required('Campo requerido'),
    curp: Yup.string().required('Campo requerido'),
    gender: Yup.string().required('Campo requerido'),
    
  });

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

    const handleChange = (field, value) => {
        setDataSend({ ...dataSend, [field]: value });
      };

    const handleAddCustomer = async() => {

        setLoading(true);
        try{
            await validationSchema.validate(dataSend, { abortEarly: false });
            console.log('Datos válidos:', dataSend);
            const {data} =  await supabase.from('customers').insert(dataSend).select().single();

            console.log({data})
            alert("datos guardados!")
        }  catch (error) {
            alert(error.message);
            alert('Errores de validación:', error.errors);
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
                    onChange={(e) => handleChange('name', e.target.value)}
                    />
                </Grid>
                <Grid item xs={8}>
                    <TextField 
                    id="outlined-basic" 
                    label="Apellido paterno" 
                    margin="normal" 
                    variant="outlined" 
                    fullWidth 
                    onChange={(e) => handleChange('lastname', e.target.value)}
                    />
                </Grid>
                <Grid item xs={8}>
                    <TextField 
                    id="outlined-basic" 
                    label="Apellido materno)" 
                    margin="normal" 
                    variant="outlined" 
                    fullWidth 
                    onChange={(e) => handleChange('secondlastname', e.target.value)}
                    />
                </Grid>
                <Grid item xs={8}>
                    <TextField 
                    id="outlined-basic" 
                    label="Edad" 
                    margin="normal" 
                    variant="outlined" 
                    fullWidth 
                    onChange={(e) => handleChange('age', e.target.value)}
                    />
                </Grid>
                <Grid item xs={8}>
                    <TextField 
                    id="outlined-basic" 
                    label="correo electrónico" 
                    margin="normal" 
                    variant="outlined" 
                    fullWidth 
                    onChange={(e) => handleChange('email', e.target.value)}
                    />
                </Grid>
                <Grid item xs={8}>
                    <TextField 
                    id="outlined-basic" 
                    label="Curp" 
                    margin="normal" 
                    variant="outlined" 
                    fullWidth 
                    onChange={(e) => handleChange('curp', e.target.value)}
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
                                    onChange={(e) => handleChange('gender', e.target.value)}
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