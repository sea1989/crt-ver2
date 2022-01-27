import React from 'react'
import { Link } from 'react-router-dom';


export default function PageAbout() {

  return (
    <React.Fragment>
      <h1> Victor Vilkov </h1>
      <Link to='/todo'>go to TODO</Link>
    </React.Fragment>
  )
}
