import React, { useEffect } from "react";
import Login from "../components/Account/Login/Login";
import MainLayout from "../components/Layouts/MainLayout";
import { Switch, Route, Redirect } from "react-router-dom";
import Register from "../components/Account/Register/Register";
import Archive from "../components/Course/Archive/Archive";
import Courses from "../components/Course/Courses";
import Cource from "../components/Course/Cource";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "../utils/pagination";
import { AddUser, ClearUser } from "../actions/user";
import { decodeToken } from "../utils/decodeToken";
import Logout from "../components/Account/Login/Logout";
import Profile from "../components/Account/Profile/Profile";
import { isEmpty } from "lodash";
import UserContext from "../components/contexts/userContext";
import NotFound from "../components/common/NotFound";
import PrivateLayout from "../components/Layouts/PrivateLayout";
import Dashboard from "../components/Admin/Dashboard";
import CoursesTable from "../components/Admin/CoursesTable";
import AdminContext from "../components/contexts/adminContext";

const TopLearn = () => {
  const cources = useSelector((state) => state.cources);
  debugger;
  const user = useSelector((state) => state.user);
  const indexCources = Pagination(cources, 1, 8);
  const dispatch = useDispatch();
  useEffect(() => {
    const TopLearnToken = localStorage.getItem("TopLearnToken");
    if (TopLearnToken) {
      const decodedToken = decodeToken(TopLearnToken);
      const dateNow = Math.floor(Date.now() / 1000);
      if (decodedToken.payload.exp < dateNow) {
        localStorage.removeItem("TopLearnToken");
        dispatch(ClearUser());
      } else {
        dispatch(AddUser(decodedToken.payload.user));
      }
    }
  }, []);
  return (
    <Switch>
      <Route path={["/dashboard"]}>
        <PrivateLayout>
          <Switch>
            <Route
              path="/dashboard/courses"
              render={() =>
                !isEmpty(user) && user.isAdmin ? (
                  <AdminContext courses={cources}>
                    <CoursesTable />
                  </AdminContext>
                ) : (
                  <Redirect to="/" />
                )
              }
            ></Route>
            <Route
              path="/dashboard"
              exact
              render={() =>
                !isEmpty(user) && user.isAdmin ? (
                  <Dashboard courses={cources} />
                ) : (
                  <Redirect to="/" />
                )
              }
            ></Route>
          </Switch>
        </PrivateLayout>
      </Route>
      <Route path={["/"]}>
        <MainLayout>
          <Switch>
            <Route
              path="/login"
              render={() =>
                isEmpty(user) ? (
                  <UserContext>
                    <Login />
                  </UserContext>
                ) : (
                  <Redirect to="/" />
                )
              }
            />
            <Route
              path="/logout"
              exact
              render={() => (isEmpty(user) ? <Redirect to="/" /> : <Logout />)}
            />
            <Route
              path="/register"
              exact
              render={() =>
                isEmpty(user) ? (
                  <UserContext>
                    <Register />
                  </UserContext>
                ) : (
                  <Redirect to="/" />
                )
              }
            />
            <Route path="/user-profile" component={Profile} />
            <Route path="/archive" component={Archive} />
            <Route path="/cource/:id" component={Cource} />
            <Route
              path="/"
              exact
              render={() =>
                indexCources.length > 0 ? (
                  <Courses cources={indexCources} />
                ) : (
                  <h3 className="text-center">
                    هیچ دوره ای جهت نمایش وجود ندارد.
                  </h3>
                )
              }
            />
            <Route path="*" component={NotFound} />
          </Switch>
        </MainLayout>
      </Route>
    </Switch>
  );
};

export default TopLearn;
