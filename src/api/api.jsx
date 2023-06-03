import axios from 'axios';

export const updateData = () => {
    axios.put(`https://reqres.in/api/users/2`)
    .then(response => {
        console.log('Response Status: ' + response.status);
      })
      .catch(error => {
        console.error(error);
      });
  };
  