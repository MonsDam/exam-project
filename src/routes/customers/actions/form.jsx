import { Box, Grid, TextField } from "@mui/material";


function AddForm() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={16}>
                <Grid item xs={8}>
                    <TextField id="outlined-basic" label="Nombre(s)" margin="normal" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={8}>
                    <TextField id="outlined-basic" label="Apellido paterno" margin="normal" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={8}>
                    <TextField id="outlined-basic" label="Apellido materno)" margin="normal" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={8}>
                    <TextField id="outlined-basic" label="Edad" margin="normal" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={8}>
                    <TextField id="outlined-basic" label="Sexo" margin="normal" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={8}>
                    <TextField id="outlined-basic" label="correo electrónico" margin="normal" variant="outlined" fullWidth />
                </Grid>
            </Grid>
            <Grid container columns={16}>
                <TextField id="outlined-basic" label="Curp" margin="normal" variant="outlined" fullWidth />
            </Grid>
        </Box>
    )
}

export default AddForm; 