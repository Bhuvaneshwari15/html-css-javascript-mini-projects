//fetch the data from the local using promise
const fs = require('fs').promises;

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fs.readFile('data.json', 'utf-8')
      //fs.readFile('txt.json', 'utf-8')
        .then((jsonData) => {
          console.log('Data Loaded Successfully');
          resolve(JSON.parse(jsonData));
        })
        .catch((error) => {
          console.error('Error:', 'Failed to fetch data: ' + error.message);
          reject(error);
        });
    }, 1000);
  });
}

fetchData()
  .then((data) => {
    console.log('Data:', JSON.stringify(data, null, 2));  // Display formatted data
  })
  .catch((error) => {
   console.log("there may be error in fetching the data")
  });
