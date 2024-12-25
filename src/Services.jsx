import React from "react";
import { services } from "./data";

function Services() {
  return (
    <>
      <section class="section services" id="services">
        <div class="section-title">
          <h2>
            our <span>services</span>
          </h2>
        </div>
        <div class="section-center services-center">
          {services.map(({ id, icon, title, text }) => {
            return (
              <article class="service" key={id}>
                <span class="service-icon">
                  <i class={icon}></i>
                </span>
                <div class="service-info">
                  <h4 class="service-title">{title}</h4>
                  <p class="service-text">{text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Services;
