import React from "react";
import PropTypes from "prop-types";
import AdminHeader from "./toolbar/AdminHeader";
import AdminMenu from "./toolbar/AdminMenu";
import { Outlet } from "react-router-dom";

AdminPage.propTypes = {};

function AdminPage(props) {
  return (
    <>
      <div>
        <header id="header">
          <AdminHeader />
        </header>
        <main
          id="main"
        >
          <div >
            <AdminMenu />
          </div>
        </main>
      </div>
    </>
  );
}

export default AdminPage;
