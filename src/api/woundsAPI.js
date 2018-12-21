var wounds = {
    wounds: []
}

const fetchPatientWounds = (patientId, cb) => {
    console.log('fetching wounds...hold on');
    fetch(`http://0.0.0.0:3000/patients/${patientId}/wounds`)
    //.then(handleErrors)
    .then((resp) => resp.json())
    .then((data) => {
      const incomingWounds = parseData(data);
      //TODO:DON'T MUTATE IT!!!!
      wounds.wounds = [...wounds.wounds, ...incomingWounds];
      cb(wounds);
    }).catch(function(error) {
      console.log(error);
    });
}

const parseData = (data) => {
    return data.data.map((item) => {
      return item;
    });
  }

//TODO: rename cb to a better variable
export default {
    getPatientWounds: (patientId, cb) => {
        fetchPatientWounds(patientId, cb);
    }
}