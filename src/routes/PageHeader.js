import React from "react";
import { useLocation } from "react-router-dom";

export default function PageHeader(props) {
  const location = useLocation();

  return <h1>{location.state && location.state.header}</h1>;
}
