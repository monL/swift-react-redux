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
  //TODO: complete here
  debugger
  console.log('updating/pathching wound:', woundId);
  fetch(`${rootURL}/wounds/${woundId}`, {
    method: "PATCH",
    body: {
      "data": {
        "id": `"${woundId}"`,
        "type": "wound",
        "attributes": {
          "type": "cut",
          "bodyLocation": "shoulder",
          "inHouseAcquired": true,
          "resolved": true,
          "imageUrl": "img.img"
        }
      }
    },
    //body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(handleErrors)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
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
