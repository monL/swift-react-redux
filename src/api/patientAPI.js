var patients = {
    patients: [
      // {
      //   id: 1,
      //   firstName: "Jewell",
      //   lastName: "Labadie",
      //   dateOfBirth: "1936-04-19T00:32:29.163Z",
      //   address: "371 Anderson Village",
      //   roomNumber: 12,
      //   bedNumber: 2,
      //   avatarUrl: "https://s3.amazonaws.com/uifaces/faces/twitter/imomenui/128.jpg",
      //   updatedAt: "2009-07-18T01:28:11.542Z",
      // },
      // {
      //   id: 2,
      //   firstName: "Gunner",
      //   lastName: "Weissnat",
      //   dateOfBirth: "2005-02-14T14:57:14.210Z",
      //   address: "846 Ocie Loop",
      //   roomNumber: 14,
      //   bedNumber: 4,
      //   avatarUrl: "https://s3.amazonaws.com/uifaces/faces/twitter/marrimo/128.jpg",
      //   updatedAt: "2018-06-01T05:38:16.266Z",
      // },
    ]
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