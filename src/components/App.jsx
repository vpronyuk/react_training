import OfficersList from "./OfficersList";
import data from "../officers.json";

// const firstOfficer = {
//   id: 1,
//   name: "Jacob Mercer",
//   rank: "Commander",
//   age: 42,
//   yearsOfService: 10,
//   specialization: "Fighter Pilot",
//   awards: ["Starfleet Medal of Honor", "Distinguished Service Cross"],
//   skills: ["Combat Maneuvers", "Navigation", "Strategic Planning"],
//   status: "Active",
//   missionHistory: [
//     "Operation Red Comet - Battle of Orion Nebula",
//     "Operation Blackout - Stealth Reconnaissance",
//     "Operation Phoenix - Search and Rescue",
//   ],
// };

// const secondOfficer = {
//   id: 2,
//   name: "Adrian Cross",
//   rank: "Lieutenant",
//   age: 35,
//   yearsOfService: 7,
//   specialization: "Reconnaissance",
//   awards: ["Silver Star", "Meritorious Service Medal"],
//   skills: ["Stealth Operations", "Surveillance", "Data Analysis"],
//   status: "Active",
//   missionHistory: [
//     "Operation Deep Space - Exploration Mission",
//     "Operation Shadowfall - Covert Surveillance",
//     "Operation Stardust - Intelligence Gathering",
//   ],
// };

// const thirdOfficer = {
//   id: 3,
//   name: "Olawande Brawar",
//   rank: "Captain",
//   age: 50,
//   yearsOfService: 15,
//   specialization: "Transport Pilot",
//   awards: ["Purple Heart", "Space Cross"],
//   skills: ["Astrogation", "Cargo Handling", "Emergency Response"],
//   status: "Retired",
//   missionHistory: [
//     "Operation Exodus - Evacuation of New Terra",
//     "Operation Horizon - Colonization Support",
//     "Operation Lifeline - Humanitarian Aid Delivery",
//   ],
// };

export default function App() {
  return (
    <div>
      <h1>Available officers</h1>
      {/* <OfficerProfile officer={firstOfficer} />
      <OfficerProfile officer={secondOfficer} />
      <OfficerProfile officer={thirdOfficer} /> */}
      <OfficersList officers={data} />
    </div>
  );
}
