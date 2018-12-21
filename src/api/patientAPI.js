var patients = {
    patients: []
  }

const TIMEOUT = 100

//TODO: add error handling
const fetchPatients = (cb) => {
  fetch('http://0.0.0.0:3000/patients')
    .then((resp) => resp.json())
    .then((data) => {
      const incomingPatients = parseData(data);
      //TODO:DON'T MUTATE IT!!!!
      patients.patients = [...patients.patients, ...incomingPatients];
      cb(patients);
    });
}

//TODO: refactor this
const parseData = (data) => {
  console.log(data);
  const patients = data.data.map((item) => {
    return item;
  });
  return patients;
}

export default {
  getPatients : (cb, timeout) => setTimeout(() => {
    cb(patients) //cb: dispatch(receivePatients(patients))
  }, timeout || TIMEOUT),
  getPatientsWithoutTimeout: (cb) => {
    console.log('getting patients without timeout')
    fetchPatients(cb); //we have to wait on this call
  }
}