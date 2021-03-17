import { getCource } from "../services/courceServices";

export const getsingleCource = (courceId) => {
  return async (dispatch) => {
    const { data } = await getCource(courceId);
    await dispatch({ type: "GET_COURSE", payload: data.course });
  };
};
