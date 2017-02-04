let initialState = [
  {
    _id: 1,
    username: "Budi Chayono",
    userPos: "SVP of Engineering",
    userCompany: "Grow.id",
    userPhoto: "https://www.wrnsstudio.com/system/people/83/grid_sm_grid_image.jpg",
    statusMessage: `This is a super magnificent status created using react native app! I'm so happy that my status can be used as a dummy in this awesome react native app. Have fun!`,
    statusImage: "https://s-media-cache-ak0.pinimg.com/564x/2d/ca/af/2dcaaf4ac0cd07a563b2bb33180819bd.jpg",
  },
  {
    _id: 2,
    username: "Charles Cokro",
    userPos: "Director of Marketing",
    userCompany: "Grow.id",
    userPhoto: "https://www.wrnsstudio.com/system/people/83/grid_sm_grid_image.jpg",
    statusMessage: `This is a super magnificent status created using react native app! I'm so happy again!`,
    statusImage: "https://s-media-cache-ak0.pinimg.com/736x/62/6f/0e/626f0ee7903abdaa961e3f53679deaa2.jpg",
  },
  {
    _id: 3,
    username: "Mike Handoyo",
    userPos: "Comedian",
    userCompany: "Grow.id",
    userPhoto: "https://www.wrnsstudio.com/system/people/83/grid_sm_grid_image.jpg",
    statusMessage: `This is a super magnificent status created using react native app! I'm so happy again!`,
    statusImage: "https://s-media-cache-ak0.pinimg.com/564x/82/79/2b/82792ba38eeaf88362caf3c0fc72c578.jpg",
  },
  {
    _id: 4,
    username: "Jude Low",
    userPos: "Business Manager",
    userCompany: "Grow.id",
    userPhoto: "https://www.wrnsstudio.com/system/people/83/grid_sm_grid_image.jpg",
    statusMessage: `This is a super magnificent status created using react native app! I'm so happy again!`,
    statusImage: "https://s-media-cache-ak0.pinimg.com/736x/af/70/c4/af70c4f4d3c9126a566037cf4b841567.jpg",
  }
];

const fetchUserStatuses = state => {
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
