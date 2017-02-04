let initialState = [
  {
    _id: 1,
    username: "Budi Chayono",
    userPos: "SVP of Engineering",
    statusMessage: `This is a super magnificent status created using react native app! I'm so happy that my status can be used as a dummy in this awesome react native app. Have fun!`,
  },
  {
    _id: 2,
    username: "Charles Cokro",
    userPos: "Director of Marketing",
    statusMessage: `This is a super magnificent status created using react native app! I'm so happy again!`,
  },
  {
    _id: 3,
    username: "Mike Handoyo",
    userPos: "Comedian",
    statusMessage: `This is a super magnificent status created using react native app! I'm so happy again!`,
  },
  {
    _id: 4,
    username: "Jude Low",
    userPos: "Business Development Manager",
    statusMessage: `This is a super magnificent status created using react native app! I'm so happy again!`,
  }
];

const fetchUserStatuses = (state) => {
  return state;
}

const userStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USER_STATUSES':
      return fetchUserStatuses(state);
      break;
    default:
      return state;
  }
};

export default userStatusReducer;