import { Box } from "@mui/material";
import { useEffect, useState } from "react";
// import customersServices from "../../services/customers";
import Tabla from "../../components/Table";
import { createClient } from "@supabase/supabase-js";
import FormDialog from "./actions/add";

const supabaseKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhaGl0ampra3FhZGN1cHhtdGZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ2NzkyMzQsImV4cCI6MjAyMDI1NTIzNH0.7flvDW9JJLPXluBtGrivdfhO5vJZsf3fqHCxfh-u6vg';
const supabaseUrl = 'https://sahitjjkkqadcupxmtfl.supabase.co';

  const supabase = createClient(supabaseUrl, supabaseKey)

function Customers() {
    const [customers, setCustomers] = useState([]);

    // const getData = async () => {
    //     customersServices.getAll()
    //       .then((response) => {
    //         setCustomers(response.data.data);
    //       })
    //       .catch((error) => {
    //         console.log(error)
    //       });
    //   };

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