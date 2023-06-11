import axios from 'axios';

export const updateData = () => {
    return axios.put(`https://reqres.in/api/users/2`)
    .then(response => {
        if(response.status === 200) {
          console.log('Data updated successfully.');
          console.log('Response Status: ' + response.status);
        }
        return response;
      })

      .catch(error => {
        if(error.response && error.response.status === 404) {
          console.log('Not Found: ' + error.response.status)
        } else {
          console.log('An error occured: ' + error);
        }
      });
  };
  