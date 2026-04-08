import React from 'react'
import { Navigate } from 'react-router';

export default function PageTwo() {
  let authenticated = localStorage.getItem("token") ?? false;
  console.log("AUTH", authenticated)
  if (!authenticated) {
    return <Navigate to="/page1" />
  }
  return (
    <div>PageTwo</div>
  )
}
