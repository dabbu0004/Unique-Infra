import React, { useEffect } from "react";
import Team from "../components/about/Team";

const TeamPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Team />
    </div>
  );
};

export default TeamPage;
