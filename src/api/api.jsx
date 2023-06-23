import axios from 'axios';
import { API_PATH } from '../constants/apiConstants';

export const updateData = (trackingNumber) => {
    return axios.put(`${API_PATH}/${trackingNumber}`)
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
  