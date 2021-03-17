import {
  deleteCourse,
  getCources,
  newCourse,
  updateCourse,
} from "../services/courceServices";
import { successMessage } from "../utils/message";

export const getAllCources = () => {
  return async (dispatch) => {
    const data = await getCources();
    await dispatch({ type: "INIT", payload: data.data.courses });
  };
};

export const createNewCourse = (course) => {
  return async (dispatch, getState) => {
    const { data, status } = await newCourse(course);
    if (status === 201) successMessage("دوره با موفقیت ساخته شد");
    await dispatch({
      type: "ADD_COURSE",
      payload: [...getState().cources, data.course],
    });
  };
};

export const handleUpdateCourse = (courseId, updatedCourse) => {
  return async (dispatch, getState) => {
    const courses = [...getState().cources];
    const filteredCourses = courses.filter((course) => course._id !== courseId);

    // const updatedCourses = [...courses];
    // const courseIndex = updatedCourses.findIndex(
    //   (course) => course._id === courseId
    // );

    // let course = updatedCourses[courseIndex];

    // course = { ...Object.fromEntries(updatedCourse) };
    // updatedCourses[courseIndex] = course;

    try {
      const { data, status } = await updateCourse(courseId, updatedCourse);
      if (status === 200) {
        successMessage("دوره با موفقیت ویرایش شد.");
        await dispatch({
          type: "UPDATE_COURSE",
          payload: [...filteredCourses, data.course],
        });
      }
    } catch (ex) {
      console.log(ex);
      await dispatch({ type: "UPDATE_COURSE", payload: [...courses] });
    }
  };
};

export const handleCourseDelete = (courseId) => {
  return async (dispatch, getState) => {
    const courses = [...getState().cources];
    const filteredCourses = courses.filter((course) => course._id !== courseId);

    try {
      await dispatch({
        type: "DELETE_COURSE",
        payload: [...filteredCourses],
      });
      const { status } = await deleteCourse(courseId);

      if (status === 200) successMessage("دوره با موفقیت پاک شد.");
    } catch (ex) {
      await dispatch({ type: "DELETE_COURSE", payload: [...courses] });
    }
  };
};
