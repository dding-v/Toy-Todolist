import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <Link to="/">
        <div className="sidebar__logo bb">logo</div>
      </Link>
      <Link to="/about">
        <div className="sidebar__about bb">About</div>
      </Link>
      <Link to="/todo">
        <div className="sidebar__todo bb">Todo</div>
      </Link>
      <Link to="/diary">
        <div className="sidebar__diary bb">Diary</div>
      </Link>
    </section>
  );
};

export default Sidebar;
