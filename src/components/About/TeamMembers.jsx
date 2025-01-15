import { useState } from "react";
import { Box } from "@mui/material";
import DedsecImage from "./dedsec.jpg"; // Update with your own image path
import EwuraImage from "./ewura.jpg"; // Update with your own image path
import GImage from "./G.jpg"; // Update with your own image path
import JosephImage from "./joseph.jpg"; // Update with your own image path
import KelvinImage from "./kelvin.jpg"; // Update with your own image path
import PaakowImage from "./paakow.jpg"; // Update with your own image path
import SamImage from "./sam.jpg"; // Update with your own image path
import MattewImage from "./mattew.jpg"; // Update with your own image path
import PaginationIndicator from "../common/components/PaginationIndicator";
import i18n from "../common/components/LangConfig";

// Data for team members
const teamMembersData = [
  {
    name: "DedSec",
    role: "Full Stack Developer",
    image: DedsecImage,
  },
  {
    name: "Ewura",
    role: "Backend Developer",
    image: EwuraImage,
  },
  {
    name: "Ella",
    role: "UX tester",
    image: GImage,
  },
  {
    name: "Joseph",
    role: "Product Manager",
    image: JosephImage,
  },
  {
    name: "Kelvin",
    role: "UI/UX Developer",
    image: KelvinImage,
  },
  {
    name: "Paakow",
    role: "Frontend Developer",
    image: PaakowImage,
  },
  {
    name: "Sam",
    role: "Backend Developer",
    image: SamImage,
  },
  {
    name: "Mattew",
    role: "Product Manager",
    image: MattewImage,
  },
];

// Component to display a single team member
const TeamMember = ({ name, role, image }) => {
  return (
    <Box className="flex gap-4 flex-col items-center">
      <Box className="bg-gray-200 rounded-xl w-full md:w-96 flex items-center justify-center">
        <img src={image} alt={`${name}'s image`} />
      </Box>
      <Box className="flex md:mx-10 gap-4 items-center md:items-start flex-col">
        <h2 className="font-bold text-3xl">{name}</h2>
        <p className="text-base">{role}</p>
      </Box>
    </Box>
  );
};

// Component to display the list of team members with pagination
const TeamMembers = () => {
  const [startIndex, setStartIndex] = useState(0);

  return (
    <div>
      <div className="md:mx-32 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {teamMembersData
          .slice(startIndex, startIndex + 3)
          .map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
      </div>

      <div className="mx-8 md:mx-32 mt-8">
        <PaginationIndicator
          activeIndex={startIndex}
          onClick={setStartIndex}
          data={teamMembersData}
        />
      </div>
    </div>
  );
};

export default TeamMembers;