import http from "./httpService";
import config from "./config.json";

export const getCources = () => {
  return http.get(`${config.localApi}/api/courses`);
};

export const getCource = (courceId) => {
  return http.get(`${config.localApi}/api/course/${courceId}`);
};

export const newCourse = (course) => {
  return http.post(`${config.localApi}/api/course`, course);
};

export const deleteCourse = (courseId) => {
  return http.delete(`${config.localApi}/api/course/${courseId}`);
};

export const updateCourse = (courseId, course) => {
  return http.put(`${config.localApi}/api/course/${courseId}`, course);
};


