let initialState = {
  _id: 2,
  username: "Charles Cokro",
  userPos: "Director of Marketing",
  userCompany: "Grow.id",
  userDescription: "Lorem Ipsum",
};

const userBase = [
  {
    _id: 1,
    username: "Budi Chayono",
    userPos: "SVP of Engineering",
    userCompany: "Grow.id",
    userDescription: "Lorem Ipsum",
  },
  {
    _id: 2,
    username: "Charles Cokro",
    userPos: "Director of Marketing",
    userCompany: "Grow.id",
    userDescription: "Lorem Ipsum",
  },
  {
    _id: 3,
    username: "Mike Handoyo",
    userPos: "Comedian",
    userCompany: "Grow.id",
    userDescription: "Lorem Ipsum",
  },
  {
    _id: 4,
    username: "Jude Low",
    userPos: "Business Manager",
    userCompany: "Grow.id",
    userDescription: "Lorem Ipsum",
  }
];

const fetchUserProfile = (state, action) => {
  let userId = action.value;
  let userBaseArrIndex = userBase.map(user => user._id).indexOf(userId);
  let newState = userBase[userBaseArrIndex]; // contains the user object
  return newState;
}

const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USER_PROFILE':
      return fetchUserProfile(state, action);
      break;
    default:
      return state;
  }
}

export default userProfileReducer;
