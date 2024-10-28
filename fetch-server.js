//fetch api from the server using promise 

function fetchDataFromAPI() {
    //let promise = fetch('https://jsonplaceholder.com/posts') 
    let promise = fetch('https://jsonplaceholder.typicode.com/posts') 
      .then((response) => {
        if (!response.ok) {
          throw new Error('network error');
        }
        return response.json(); 
      });
  
    
    console.log('Promise State: Pending........');
  
   
    promise
      .then((data) => {
       
        console.log('Promise State: Fulfilled.');
        console.log('Fetched Data:', data); 
      })
      .catch((error) => {
        
        console.log('Promise State: Rejected');
        console.error('Error:', error.message); 
      })
      .finally(() => {
        
        console.log('Promise State: Finally - Request Completed');
      });
  }
  
 
  fetchDataFromAPI();