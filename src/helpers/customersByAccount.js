export default function customersByAccount(accounts, customers) {
    return accounts.map(account => {
      const customer = customers.find(c => c.id === account.customer_id);
      return customer
        ? {customer_id: account.customer_id, name: customer.name, account: account.account }
        : null;
    });
  }