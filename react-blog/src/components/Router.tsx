import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home";
import Profile from "../pages/profile";
import Signup from "../pages/signup";
import Login from "../pages/login";
import PostEdit from "../pages/posts/edit";
import PostNew from "../pages/posts/new";
import PostDetail from "../pages/posts/detail";
import PostList from "../pages/posts";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/posts" element={<PostList />} />
      <Route path="/posts/:id" element={<PostDetail />} />
      <Route path="/posts/new" element={<PostNew />} />
      <Route path="/posts/edit/:id" element={<PostEdit />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate replace to={"/"} />} />
    </Routes>
  );
}
