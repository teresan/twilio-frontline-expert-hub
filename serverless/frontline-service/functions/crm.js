async function fetchAll(context) {

  const axios = require("axios").create({
    baseURL: context.DB_URL
  });
  try {
  
    const response = await axios.get('/customers?populate=*&sort[0]=customer_id', {
      headers: {
        Authorization:
          'Bearer ' + context.DB_API_TOKEN,
      },
      
    });
    let crm_results = [];
    response.data.data.map(customer => crm_results.push(customer.attributes));
    return crm_results;
  } catch (err) {
    console.log('"retrieveCustomers: "+ retrieveCustomers failed', err);
  }
}

exports.handler = async function (context, event, callback) {
  let customers = await fetchAll(context);
  switch (event.Location) {
    case 'GetCustomerDetailsByCustomerId':
      callback(null, { objects: { customer: customers[event.CustomerId - 1] } });
      break;
    default:
      callback(null, { objects: { customers: customers } });
      break;
  }
}

exports.fetchByPhoneNumber = async (phoneNumber, context) => {
  console.debug('crm.fetch started');
    const customers = await fetchAll(context);
    if (customers) {
      return customers.filter(e => e.channels[0].value == phoneNumber)[0];
    }
  return null; 
}
