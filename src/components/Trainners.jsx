import React from "react";
import "../App.css";
const Trainners = () => {
  return (
    <section className="pageSection" id="trainners">
      <div className="TrainnersContainer">
        <h2>The Best Trainners in the World</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora hic
          architecto sint aliquam dolorem modi blanditiis, nisi esse nemo itaque
          libero quis vitae. Officiis voluptatum aliquam quaerat rerum sunt.
          Labore culpa maiores, explicabo optio vel eos recusandae minima. Optio
          excepturi ali quam iusto harum magnam accusamus voluptas reiciendis
          atque cumque odit.
        </p>
      </div>

      <div className="row">
        <div className="col-sm-4">
          <div className="Trainner">
            <img
              className="mx-auto rounded-circle"
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <h4>Dwayne Johnson</h4>
            <p className="text-muted">Co-Head Trainner</p>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="Trainner">
            <img
              className="mx-auto square-circle"
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <h4>Nakarda Richards</h4>
            <p className="text-muted">Head Trainner</p>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="Trainner">
            <img
              className="mx-auto rounded-circle"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQT-m8KWwV5O0ylvgqRpJ3lDDoK5aR4wZpdcg&usqp=CAU"
              alt=""
            />
            <h4>John Cena</h4>
            <p className="text-muted">Senior Trainner</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <p className="large text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque,
            laboriosam veritatis, quos non quis ad perspiciatis, totam corporis
            ea, alias ut unde.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Trainners;
