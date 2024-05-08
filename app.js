const axios = require('axios');
const crypto = require('crypto-js');

// Define the data to be sent in the request body
const postData = {
  username: '215',
  password: 'Chand@123'
};


axios.post('http://10.10.100.4:8010/api/login/check_credentials/', postData)
  .then(response => {
    const data = response.data;

    console.log(response.data);

    // Accessing specific fields
    console.log('Encrypted:', data.encypt);

    const bytes = crypto.AES.decrypt(data.encypt, 'Password@2022').toString(crypto.enc.Utf8)

    // const OrgPassword = bytes.toString(crypto.enc.Utf8)

    console.log("Original Password", bytes);

    

    // Accessing arrays
    if (data.subRequests && data.subRequests.length > 0) {
      console.log('Sub Requests:', data.subRequests);
    } else {
      console.log('No sub requests found.');
    }

    // Accessing boolean fields
    console.log('Is user checked?:', data.notcheck);
    console.log('Is user allowed to change?:', data.change);
  })
  .catch(error => {
    console.error('Error:', error);
  });


// const os = require('os');

// function getSystemName() {
//     return os.hostname();
// }

// // Usage
// const systemName = getSystemName();
// console.log("System name:", systemName);


// const os = require('os');

// function getIPAddresses() {
//     const interfaces = os.networkInterfaces();
//     const addresses = [];
//     for (const iface in interfaces) {
//         interfaces[iface].forEach(function (address) {
//             if (address.family === 'IPv4' && !address.internal) {
//                 addresses.push(address.address);
//             }
//         });
//     }
//     return addresses;
// }

// // Usage
// const ips = getIPAddresses();
// console.log("IP addresses:", ips);

