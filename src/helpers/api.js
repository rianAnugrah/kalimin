import axios from "axios";
import { getCookie, refreshToken } from "./utils";

const url = process.env.REACT_APP_API_URL;

export default class Api {
  constructor() {
    this.token = null;
    this.client = null;
    // this.api_url = process.env.REACT_APP_API_URL;
    this.api_url = "http://localhost:5000";
  }

  init = () => {
    this.token = getCookie("ACCESS_TOKEN");

    let headers = {
      Accept: "application/json",
    };

    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`;
    }

    this.client = axios.create({
      baseURL: this.api_url,
      timeout: 31000,
      headers: headers,
    });

    // this.client.interceptors.request.use(
    //   async function (config) {
    //     const newToken = await refreshToken();
    //     config.headers.Authorization = `Bearer ${newToken}`;

    //     return config;
    //   },
    //   function (error) {
    //     return Promise.reject(error);
    //   }
    // );

    return this.client;
  };

  register = (data) => {
    return this.init().post("/users", data);
  };

  login(payload) {
    return this.init().post("/auth/login", payload);
  }

  createPassword(payload, token) {
    return this.init().post(`/auth/set-password/${token}`, payload);
  }

  requestResetPassword(payload) {
    return this.init().put(`/auth/reset-password`, payload);
  }

  refreshToken = (token) => {
    return this.init().post("/auth/refresh", { refreshToken: token });
  };

  getProfile(id) {
    return this.init().get(`/users/${id}`);
  }

  updateProfile(payload, id) {
    return this.init().put(`/users/${id}`, payload);
  }

  updateAvatar = (id, data) => {
    let formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key]);
    }

    return this.init().put(`/users/${id}/avatar`, formData);
  };

  // project
  createProject = (data) => {
    return this.init().post("/projects", data);
  };

  getAllProject = (params) => {
    return this.init().get("/projects", { params: params });
  };

  getDetailProject = (id) => {
    return this.init().get(`/projects/${id}`);
  };

  addProjectAttachment = (projectId, attachments) => {
    let formData = new FormData();
    attachments.forEach((asd) => {
      formData.append("attachments", asd);
    });

    return this.init().put(`/projects/${projectId}/addAttachments`, formData);
  };

  publishProject = (id, data) => {
    return this.init().put(`/projects/${id}/publish`, data);
  };

  recommendProject = (id, data) => {
    return this.init().put(`/projects/${id}/recommend`, data);
  };

  interestProject = (id, data) => {
    return this.init().put(`/projects/${id}/interest`, data);
  };

  recommendationList = (id) => {
    return this.init().get(`/projects/${id}/recommendation`);
  };

  // users
  getAllUser = (params) => {
    return this.init().get("/users", { params: params });
  };

  getSingleUser = (id) => {
    return this.init().get(`/users/${id}`);
  };
}
