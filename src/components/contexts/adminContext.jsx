import React, { useEffect, useRef, useState } from "react";
import { orderBy } from "lodash";
import { Pagination } from "../../utils/pagination";
import { dashContext } from "./dashContext";
import NewCourseDialog from "../Admin/dialogs/NewCourseDialog";
import EditCourseDialog from "../Admin/dialogs/EditCourseDialog";
import DeleteCourseDialog from "../Admin/dialogs/DeleteCourseDialog";
import SimpleReactValidator from "simple-react-validator";
const AdminContext = ({ courses, children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(5);
  const [newCourseDialog, setNewCourseDialog] = useState(false);
  const [editCourseDialog, setEditCourseDialog] = useState(false);
  const [deleteCourseDialog, setDeleteCourseDialog] = useState(false);
  const [currentCourse, setCurrentCourse] = useState({});
  const [search, setSearch] = useState("");
  const [courseList, setCourseList] = useState([]);

  useEffect(() => setCourseList(courses), [courses]);

  const validator = useRef(
    new SimpleReactValidator({
      messages: {
        required: "پر کردن این فیلد الزامی میباشد",
        min: "کمتر از 5 کاراکتر نباید باشد",
        email: "ایمیل نوشته شده صحیح نمی باشد",
        integer: "قیمت باید عدد باشد.",
      },
      element: (message) => <div style={{ color: "red" }}>{message}</div>,
    })
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const openEditCourseDialog = (course) => {
    setEditCourseDialog(true);
    setCurrentCourse(course);
  };

  const openDeleteCourseDialog = (course) => {
    setDeleteCourseDialog(true);
    setCurrentCourse(course);
  };

  const openNewCourseDialog = () => {
    setNewCourseDialog(true);
  };
  const closeEditCourseDialog = () => setEditCourseDialog(false);
  const closeDeleteCourseDialog = () => setDeleteCourseDialog(false);
  const closeNewCourseDialog = () => setNewCourseDialog(false);
  const sortCoursesAsc = () => {
    setCourseList(orderBy(courseList, "price", "asc"));
    debugger;
  };
  const sortCoursesDes = () => {
    setCourseList(orderBy(courseList, "price", "desc"));
    debugger;
  };
  const filteredCourses = courseList.filter((c) => c.title.includes(search));
  const courseData = Pagination(filteredCourses, currentPage, perPage);

  return (
    <dashContext.Provider
      value={{
        currentPage,
        perPage,
        handlePageChange,
        courseData,
        openNewCourseDialog,
        openEditCourseDialog,
        openDeleteCourseDialog,
        filteredCourses,
        setSearch,
        sortCoursesAsc,
        sortCoursesDes,
        validator,
      }}
    >
      <NewCourseDialog
        showDialog={newCourseDialog}
        closeDialog={closeNewCourseDialog}
      />
      <EditCourseDialog
        showDialog={editCourseDialog}
        closeDialog={closeEditCourseDialog}
        course={currentCourse}
      />
      <DeleteCourseDialog
        showDialog={deleteCourseDialog}
        closeDialog={closeDeleteCourseDialog}
        course={currentCourse}
      />
      {children}
    </dashContext.Provider>
  );
};

export default AdminContext;
