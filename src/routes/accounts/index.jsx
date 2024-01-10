import { useEffect, useState } from "react";
import { supabase } from "../../services/config/config";
import Tabla from "../../components/Table";
import FormDialog from "../accounts/actions/add";
import customersByAccount from "../../helpers/customersByAccount";

function Accounts(){
    const [accounts, setAccounts] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [accountData, setAccountData] = useState([]);

    useEffect(() => {
         getData();
      }, []);

      async function getData() {
        const { data } = await supabase.from("accounts").select();
        setAccounts(data);
        const customerData = await supabase.from("customers").select();
        setCustomers(customerData.data);
        setAccountData(customersByAccount(data, customerData.data))
      }

      console.log("index", accountData)

      const columns = [
        { label: "Número de cuenta", id: "account" },
        { label: "Cliente", id:"name"}
      ];
  
    return(
        <div>
            <FormDialog refreshFunction={getData} customers={customers} accounts={accounts} />
            {accountData.length > 0 && <Tabla data={accountData} columns={columns}  />  }


        </div>
    )
}

export default Accounts;