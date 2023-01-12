import React from "react";
import { Route, Routes } from "react-router-dom";
import ReAuth from "../components/ReAuth";
import Login from "./Login";
import Dogs from "./Dogs";
import Single from "./Single";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dogs />} />;
      <Route path="/login" element={<Login />} />
      <Route path="/dogs/:id" element={<ReAuth><Single /></ReAuth>} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default AllRoutes;
