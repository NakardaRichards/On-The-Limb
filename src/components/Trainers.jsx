import React from "react";
import "../App.css";
import "./css/trainers.css";
const Trainers = () => {
  return (
    <section id="trainers">
      <div className="TrainersContainer">
        <h2>The Best Trainers in the World</h2>
        <div className="imgContainer">
          <img src="https://image.freepik.com/free-vector/coach-icons-set_98402-1529.jpg" />
        </div>

        <div className="Trainertext">
          <p>
            We have the best trainers in the world because we make hard workouts
            easy for our members and still maintain it's effectiveness. Our
            trainers can make you lose weight within days by completely changing
            your eating style and eliminating bad eating habits.
          </p>
        </div>
      </div>

      <div className="Trainerslayout">
        <div className="row">
          <div className="col-sm-5">
            <div className="Trainer">
              <img
                className="mx-auto rounded-circle"
                src="data:image/jpeg;base64,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"
                alt=""
              />
              <h4>Kevardo Brown</h4>
              <p className="text-muted">Co-Head Trainer</p>
            </div>
          </div>
          <div className="col-sm-5">
            <div className="Trainer">
              <img
                className="mx-auto square-circle"
                src="data:image/jpeg;base64,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"
                alt=""
              />
              <h4>Nakarda Richards</h4>
              <p className="text-muted">Head Trainer</p>
            </div>
          </div>
          {/* <div className="col-sm-4">
            <div className="Trainer">
              <img
                className="mx-auto rounded-circle"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQT-m8KWwV5O0ylvgqRpJ3lDDoK5aR4wZpdcg&usqp=CAU"
                alt=""
              />
              <h4>John Cena</h4>
              <p className="text-muted">Senior Trainer</p>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="Trainer">
              <img
                className="mx-auto rounded-circle"
                src="https://i.ytimg.com/vi/wDbeC1GJmag/maxresdefault.jpg"
                alt=""
              />
              <h4>Randy Orton</h4>
              <p className="text-muted">Senior Trainer</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
