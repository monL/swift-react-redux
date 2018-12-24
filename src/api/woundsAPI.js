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

const resolvePatientWound = (wound, dispatchAction) => {
  const payload = {
      data:{
        type: wound.type,
        id: wound.id.toString(),
        attributes: {
          type: wound.attributes.type,
          bodyLocation: wound.attributes.bodyLocation,
          inHouseAcquired: wound.attributes.inHouseAcquired,
          resolved: true,
          imageUrl: wound.attributes.imageUrl
        }
      }
    }

  fetch(`${rootURL}/wounds/${wound.id}`, {
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
