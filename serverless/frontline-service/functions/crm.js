async function fetchAll(context) {

  const axios = require("axios").create({
    baseURL: context.DB_URL
  });
  try {
    const token = await axios.post('/auth/local', {
      identifier: context.DB_ID,
      password: context.DB_PASS, 
    });
    const response = await axios.get('/customers', {
      headers: {
        Authorization:
          'Bearer ' + token.data.jwt,
      },
      
    });
    return response.data;
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
