import React from "react";
import jwt from "jwt-decode";
import axios from "axios";
import Api from "./api";
import moment from "moment";

export async function checkLoggedIn() {
  const api = new Api();

  const token = getCookie("ACCESS_TOKEN");
  const refresh_token = getCookie("REFRESH_TOKEN");
  const current_time = new Date();
  let isLoggedIn = false;
  if (token !== "") {
    const decodeToken = jwt(token);
    if (current_time.getTime() < decodeToken.exp * 1000) {
      isLoggedIn = true;
    } else {
      await api
        .refreshToken(refresh_token)
        .then((res) => {
          setCookie("ACCESS_TOKEN", res.data.accessToken);
          isLoggedIn = true;
        })
        .catch((err) => deleteAllCookies());
    }
  } else {
    deleteAllCookies();
  }

  return isLoggedIn;
}

export function setCookie(cname, cvalue, exdays = 1) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export const getCookie = (cname) => {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

export function deleteAllCookies() {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}

export async function refreshToken() {
  const token = getCookie("ACCESS_TOKEN");
  const refresh_token = getCookie("REFRESH_TOKEN");
  const SERVER_DOMAIN = process.env.REACT_APP_API_URL;
  const current_time = new Date();
  if (token !== "") {
    const decodeToken = jwt(token);
    if (current_time.getTime() > decodeToken.exp * 1000) {
      return axios
        .post(`${SERVER_DOMAIN}/auth/refresh`, {
          refreshToken: refresh_token,
        })
        .then((response) => {
          setCookie("ACCESS_TOKEN", response.data.accessToken, 365);
          return response.data.accessToken;
        })
        .catch((err) => {
          deleteAllCookies();
        });
    } else {
      return token;
    }
  }
  return token;
}

export function renderLabelSortBy(text) {
  return (
    <>
      <span style={{ fontWeight: 300 }}>Sort by </span>
      <span style={{ fontWeight: "bold" }}>{text}</span>
    </>
  );
}

export function lpad(n, width, z) {
  z = z || "0";
  n = n + "";
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

export function countExpirationCountdown(expiredAt) {
  if (!expiredAt) return 0;
  const now = moment(new Date()).format();
  const expired = moment.utc(expiredAt).local().format();
  const diff = moment(now).diff(expired);
  if (diff > 0) {
    return 0;
  } else {
    return Math.abs(diff);
  }
}
