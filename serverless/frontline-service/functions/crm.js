const axios = require("axios");

async function retrieveCustomers(context) {
  try {
    const resp = await axios.post(context.DB + '/auth/local', {
      identifier: 'frontline_app',
      password: context.DB_PASS,
    });
    const response = await axios.get(context.DB + '/customers', {
      headers: {
        Authorization:
          'Bearer ' + resp.data.jwt,
      },
    });
    return response.data;
  } catch (err) {
    console.log('"retrieveCustomers: "+ retrieveCustomers failed', err);
  }
}

exports.handler = async function (context, event, callback) {
  let customers = await retrieveCustomers(context.DB_URL);
  switch (event.location) {
    case 'GetCustomerDetailsByCustomerId':
      callback(null, { objects: { customer: customers[event.CustomerId - 1] } });
      break;
    default:
      callback(null, { objects: { customers: customers } });
      break;
  }
}

exports.fetch = async (phoneNumber, context) => {
  const customers = await retrieveCustomers(context.DB);
  return customers.filter(e => e.channels[0].value == phoneNumber)[0];
}
