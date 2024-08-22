import OfficersList from "./OfficersList";
import data from "../officers.json";

export default function App() {
  return (
    <div>
      <h1>Available officers</h1>
      <OfficersList officers={data} />
    </div>
  );
}
