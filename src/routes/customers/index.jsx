import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Tabla from "../../components/Table";
import FormDialog from "./actions/add";
import { supabase } from "../../services/config/config";

function Customers() {
    const [customers, setCustomers] = useState([]);

      useEffect(() => {
        getData();
      }, []);

      async function getData() {
        const { data } = await supabase.from("customers").select();
        setCustomers(data);
      }
  

      const columns = [
        { label: "Nombre(s)", id: "name" },
        { label: "Apellido Paterno", id: "lastname" },
        { label: "Apellido Materno", id: "secondlastname" },
        { label: "Edad", id: "age" },
        { label: "Sexo", id: "gender" },
        { label: "E-maill", id: "email" },
        { label: "Curp", id: "curp" },
        // { label: "Acciones", buttons: [EditButtonModal, DeleteButtonModal] },
      ];

    return(
        <div>
            <FormDialog refreshFunction={getData} />
            <Tabla data={customers} columns={columns} refreshFunction={getData} />
        </div>
    )
}

export default Customers;