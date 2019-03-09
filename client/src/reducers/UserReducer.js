const initialState = {
  isAuthenticated: false,
  user: null
};

export default function(state = initialState, actions) {
  switch (actions.type) {
    case "UserID":
      return {
        isAuthenticated: true,
        user: actions.payload
      };
    default:
      return state;
  }
}
