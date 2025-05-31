import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Join our top workout sessions designed to push your limits and help
          you achieve your fitness goals. Whether you're a beginner or a pro,
          these workouts are tailored to boost strength, endurance, and
          overall health.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Our featured bootcamps offer intensive, results-driven programs that
          combine cardio, strength training, and flexibility exercises. Perfect
          for anyone looking to transform their body and elevate their fitness
          routine.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Strength & Conditioning</h4>
            <p>
              Build muscle and improve endurance with workouts focused on
              functional strength and conditioning exercises.
            </p>
          </div>
          <div>
            <h4>HIIT Blast</h4>
            <p>
              High-Intensity Interval Training sessions to burn fat and boost
              metabolism in a short amount of time.
            </p>
          </div>
          <div>
            <h4>Yoga & Flexibility</h4>
            <p>
              Enhance your flexibility, balance, and mindfulness with our
              calming yet energizing yoga sessions.
            </p>
          </div>
          <div>
            <h4>Cardio Kickboxing</h4>
            <p>
              Combine martial arts and cardio for a full-body workout that
              improves agility and stamina.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;

