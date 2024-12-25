import React from "react";
import { tours } from "./data";

function Tour() {
  return (
    <>
      <section class="section" id="tours">
        <div class="section-title">
          <h2>
            featured <span>tours</span>
          </h2>
        </div>

        <div class="section-center featured-center">
          {tours.map(({ id, date, title, text, place, days, price, img }) => {
            return (
              <article class="tour-card" key={id}>
                <div class="tour-img-container">
                  <img src={img} class="tour-img" alt="" />
                  <p class="tour-date">{date}</p>
                </div>
                <div class="tour-info">
                  <div class="tour-title">
                    <h4>{title}</h4>
                  </div>
                  <p>{text}</p>
                  <div class="tour-footer">
                    <p>
                      <span>
                        <i class="fas fa-map"></i>
                      </span>
                      {place}
                    </p>
                    <p>{days}</p>
                    <p>{price}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Tour;
