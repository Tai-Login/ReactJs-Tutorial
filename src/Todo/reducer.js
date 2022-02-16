import { ADD_ACTION, REMOVE_ACTION, NAME_ACTION } from "./constants";

export const initState = {
  job: "",
  jobs: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case NAME_ACTION:
      return {
        ...state,
        job: action.payload,
      };
    case ADD_ACTION:
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
    case REMOVE_ACTION:
      const newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1);
      return {
        ...state,
        jobs: newJobs,
      };

    default:
      throw new Error("Invalid action");
  }
};

export default reducer;
