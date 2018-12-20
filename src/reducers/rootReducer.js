const initState = {
  patients: [
    {
      id: 1,
      firstName: "Jewell",
      lastName: "Labadie",
      dateOfBirth: "1936-04-19T00:32:29.163Z",
      address: "371 Anderson Village",
      roomNumber: 12,
      bedNumber: 2,
      avatarUrl: "https://s3.amazonaws.com/uifaces/faces/twitter/imomenui/128.jpg",
      updatedAt: "2009-07-18T01:28:11.542Z",
    },
    {
      id: 2,
      firstName: "Gunner",
      lastName: "Weissnat",
      dateOfBirth: "2005-02-14T14:57:14.210Z",
      address: "846 Ocie Loop",
      roomNumber: 14,
      bedNumber: 4,
      avatarUrl: "https://s3.amazonaws.com/uifaces/faces/twitter/marrimo/128.jpg",
      updatedAt: "2018-06-01T05:38:16.266Z",
    },
  ]
}
  
  const rootReducer = (state = initState, action) => {
    return state;
  }
  
  export default rootReducer