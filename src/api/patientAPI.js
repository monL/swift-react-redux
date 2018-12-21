import { rootURL } from '../constants/routes';
import { handleErrors } from '../helpers/apiHandler';

const fetchPatients = (dispatchAction) => {
  fetch(`${rootURL}/patients`)
    .then(handleErrors)
    .then((resp) => resp.json())
    .then((data) => {
      const incomingPatients = parseData(data);
      dispatchAction({patients: incomingPatients});
    }).catch(function(error) {
      console.log(error);
    });
}

const parseData = (data) => {
  return data.data.map((item) => {
    return item;
  });
}

//TODO: this would be a great place for refactoring
export default {
  getPatients: (dispatchAction) => {
    fetchPatients(dispatchAction);
  }
}
