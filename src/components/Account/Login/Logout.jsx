import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router";
import { ClearUser } from "../../../actions/user";

const Logout = ({ history }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.removeItem("TopLearnToken");
    dispatch(ClearUser());
    history.push("/");
  }, []);
  return null;
};

export default withRouter(Logout);
