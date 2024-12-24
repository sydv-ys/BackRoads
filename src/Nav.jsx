import React from "react";
import logo from "../src/images/logo.svg";
import { pageLinks, sosialLinks } from "./data";

function Nav() {
  return (
    <>
      <nav class="navbar">
        <div class="nav-center">
          <div class="nav-header">
            <img src={logo} class="nav-logo" alt="backroads" />
            <button type="button" class="nav-toggle" id="nav-toggle">
              <i class="fas fa-bars"></i>
            </button>
          </div>

          <ul class="nav-links" id="nav-links">
            {pageLinks.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.href} class="nav-link">
                    {link.text}
                  </a>
                </li>
              );
            })}
          </ul>

          <ul class="nav-icons">
            {sosialLinks.map(({id, href, icon}) => {
              return (
                <li key={id}>
                  <a href={href} 
                  target="_blank" 
                  class="nav-icon"
                  rel="noreferrer"
                  >
                    <i class={icon}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
