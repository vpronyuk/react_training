import OfficersList from "../OfficersList/OfficersList";
import Button from "../Button/Button";
import data from "../../officers.json";
import css from "./App.module.css";

export default function App() {
  return (
    <div className={css.container}>
      <Button variant="primary">Accept</Button>
      <Button type="submit" variant="secondary">
        Decline
      </Button>

      <h1 className={css.title}>Available officers</h1>
      <h2>test SSH</h2>
      <OfficersList officers={data} />
    </div>
  );
}
