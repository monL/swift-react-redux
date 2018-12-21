import { rootURL } from '../constants/routes';
import { handleErrors } from '../helpers/apiHandler';

const fetchPatientWounds = (patientId, dispatchAction) => {
    console.log('fetching wounds...hold on');
    fetch(`${rootURL}/patients/${patientId}/wounds`)
    .then(handleErrors)
    .then((resp) => resp.json())
    .then((data) => {
      const incomingWounds = parseData(data);
      dispatchAction({wounds: incomingWounds});
    }).catch(function(error) {
      console.log(error);
    });
}

const parseData = (data) => {
    return data.data.map((item) => {
      return item;
    });
  }

export default {
    getPatientWounds: (patientId, dispatchAction) => {
        fetchPatientWounds(patientId, dispatchAction);
    }
}
