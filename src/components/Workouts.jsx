import React from "react";
import "../App.css";
import "./css/workouts.css";
const Workouts = () => {
  return (
    <section id="workouts">
      <div className="WorkoutsContainer">
        <div>
          <h2 style={{ textAlign: "center" }}>Our Exercises</h2>
        </div>
        <div className="imgContainer">
          <img src="https://image.freepik.com/free-vector/tiny-people-doing-exercise-without-gym-flat-illustration_74855-11101.jpg" alt="freepik.com"/>
        </div>
        <div className="Workouttext">
          <p>
            We have a large collection of the most effective and simple
            exercises in the world right here and ready for you to learn.
            However so of these exercise listed can not be performed at home so
            come on down to one of our 25 locations if you don't mind.
          </p>
        </div>

        <div className="workoutslayout">
          <div className="zoom">
            <img
              src="https://media1.popsugar-assets.com/files/thumbor/sUQJPic1z8xTxmdxG83bvtrs0Mc/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/09/19/980/n/1922729/d39a48c6b467b940_diamoncollage/i/Diamond-Push-Up.jpg"
              alt="diamond push up"
            />
            <p>Diamond Push-up</p>
          </div>

          <div className="zoom">
            <img
              src="https://media.istockphoto.com/photos/woman-training-on-step-platform-with-dumbbells-picture-id1140328819?k=6&m=1140328819&s=612x612&w=0&h=u8FGiTUkq4YzaBCDDi74CrLDmCc6UYPYYsD6ZFDkPwA="
              alt="Dumbbell Lateral Raises"
            />
            <p>Dumbbell Lateral Raises</p>
          </div>

          <div className="zoom">
            <img
              src="https://image.freepik.com/free-photo/deadlift-exercise-man-during-his-workout-gym_144962-10255.jpg"
              alt="Deadlift"
            />
            <p>Deadlifts</p>
          </div>

          <div className="zoom">
            <img
              src="https://image.freepik.com/free-photo/athletic-man-making-pull-up-exercises-crossbar-gym_96649-631.jpg"
              alt="Pull ups"
            />
            <p>Pull ups</p>
          </div>
          <div className="zoom">
            <img
              src="https://image.freepik.com/free-photo/full-length-side-view-concentrated-sportswoman_171337-14008.jpg"
              alt="Squats"
            />
            <p>Squats</p>
          </div>
          <div className="zoom">
            <img
              src="https://image.freepik.com/free-photo/close-up-view-gym-seated-leg-curl_8595-8721.jpg"
              alt="Leg curls"
            />
            <p>Leg Curls</p>
          </div>
          
        </div>
        
      </div>
     
    </section>
  );
};

export default Workouts;
