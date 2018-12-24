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

const resolvePatientWound = (woundId, dispatchAction) => {
  const payload = {
      data:{
        type:"wounds",
        id: woundId.toString(),
        attributes:{
          type:"string",
          bodyLocation:"string",
          inHouseAcquired:true,
          resolved:true,
          imageUrl:"string"
        }
      }
    }

  fetch(`${rootURL}/wounds/${woundId}`, {
    method: "PATCH",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }).then(handleErrors)
    .then((resp) => resp.json())
    .then((data) => {
      dispatchAction({wound: data});
    }).catch(function(error) {
      console.log(error);
    });
    console.log('do something in the meantime')
}  

export default {
    getPatientWounds: (patientId, dispatchAction) => {
        fetchPatientWounds(patientId, dispatchAction);
    },
    resolvePatientWound: (woundId, dispatchAction) => {
      resolvePatientWound(woundId, dispatchAction);
    }
}
