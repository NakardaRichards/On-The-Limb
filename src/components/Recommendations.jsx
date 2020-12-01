import React from "react";
import "./css/recommendations.css";

const Recommendations = () => {
  return (
    <section id="recommendations">
      <div className="rContainer">
        <div>
          <h2 style={{ textAlign: "center" }}>Recommended Activities</h2>
        </div>
        <div className="imgContainer3">
          <img src="https://image.freepik.com/free-vector/man-moving-clock-arrows-managing-time_74855-10894.jpg" />
        </div>
        <div className="Recommendedtext">
          <p>
            <b>Wall Workouts:</b> These exercises don’t need equipment and only
            require a wall with a few spare feet in front of it. If your dorm
            room is too crowded for that, then chances are your hallway will do
            the trick. Self and Women’s Health both have detailed wall exercises
            that can stretch and strengthen your entire body.
          </p>
          <p>
            <b>Yoga:</b> If you’re worried a more robust routine might disrupt
            your dorm mates, give yoga a try. There are many different types of
            yoga, but most focus on strengthening and stretching the body
            through holding different poses. If you’re new to yoga, the YouTube
            channel Yoga with Adriene has a variety of workouts for all
            experience levels.
          </p>
          <p>
            <b>Using Stairs:</b> Residence halls are often multi-story and there
            are a variety of exercises you can do using the stairs including
            cardio and strength. Men’s Journal and Shape both offer stair-based
            workouts with a range of moves that can be done as a full routine or
            even for just a few minutes. Use stairs as a free gym right outside
            your door as part of a morning routine or even to just stay inside
            during bad weather.
          </p>
          <h2>How much should a college student exercise?</h2>
          <p>
            Adults should exercise for at least 30 minutes a day in one form or
            another. If you want to lose weight or gain muscle faster you may
            want to exercise more than that. People should generally take around
            10,000 steps daily, which equals about five miles. The most
            important thing, however, is to start exercising if you haven’t
            been.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
