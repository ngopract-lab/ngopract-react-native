let initialState = [
  {
    _id: 1,
    username: "Budi Chayono",
    userPos: "SVP of Engineering",
    statusMessage: "Lorem Ipsum",
  },
  {
    _id: 2,
    username: "Budi Cokro",
    userPos: "SVP of Engineering",
    statusMessage: "Lorem Ipsum 2",
  }
];

const fetchUserStatus = (state) => {
  return state;
}

const userStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USER_STATUS':
      return fetchUserStatus(state);
      break;
    default:
      return state;
  }
};

export default userStatusReducer;
