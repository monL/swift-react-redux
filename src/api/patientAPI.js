var patients = {
    patients: []
  }

//TODO: add error handling - 'handle Failed to fetch'
const fetchPatients = (cb) => {
  fetch('http://0.0.0.0:3000/patients')
    .then(handleErrors)
    .then((resp) => resp.json())
    .then((data) => {
      const incomingPatients = parseData(data);
      //TODO:DON'T MUTATE IT!!!!
      patients.patients = [...patients.patients, ...incomingPatients];
      cb(patients);
    }).catch(function(error) {
      console.log(error);
    });
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statustext);
  }
  return response;
}

const parseData = (data) => {
  return data.data.map((item) => {
    return item;
  });
}

export default {
  getPatients: (cb) => {
    fetchPatients(cb);
  }
}