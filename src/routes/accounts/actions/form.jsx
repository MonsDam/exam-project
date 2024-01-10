import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import { supabase } from "../../../services/config/config";
import customersByAccount from "../../../helpers/customersByAccount";
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    account: Yup.string()
        .matches(/^[0-9]{16}$/, 'Debe contener exactamente 16 números')
        .required('Campo requerido'),
});



function AddForm({ accounts, customers }) {
    const [loading, setLoading] = useState(false);
    const [dataSend, setDataSend] = useState({
        account: "",
        customer_id: ""
    })

    console.log("formaccount", accounts)
    console.log("formcustome", customers)

    const accountData = customersByAccount(accounts, customers)


    console.log("accountData", accountData)

    const handleChange = (field, value) => {
        setDataSend({ ...dataSend, [field]: value });
    };

    const handleAddCustomer = async () => {

        setLoading(true);
        try {
            await validationSchema.validate(dataSend, { abortEarly: false });
            console.log('Datos válidos:', dataSend);
            const { data } = await supabase.from('accounts').insert(dataSend).select().single();

            console.log({ data })
            alert("datos guardados!")
        } catch (error) {
            alert(error.message);
            alert('Errores de validación:', error.errors);
        }
        setLoading(false)
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <TextField
                id="outlined-basic"
                label="Número de cuenta"
                margin="normal"
                variant="outlined"
                fullWidth
                onChange={(e) => handleChange('account', e.target.value)}
            />
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Cliente</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Cliente"
                    onChange={(e) => handleChange('customer_id', e.target.value)}
                >

                    {/* {accountData && accountData.map((a, index) => (
                        <MenuItem key={index} value={a.customer_id}>{a.name}</MenuItem>
                    ))}; */}
                    <MenuItem value={10}>Alfredo</MenuItem>
                    <MenuItem value={20}>Angel</MenuItem>
                    <MenuItem value={30}>Fatima</MenuItem>

                </Select>
            </FormControl>
            <Button disabled={loading} onClick={() => handleAddCustomer()} >Guardar</Button>
        </Box>
    )
}

export default AddForm;