import OfficerProfile from "../OfficerProfile/OfficerProfile";
import css from "./OfficersList.module.css";

export default function OfficersList({ officers }) {
  return (
    <ul className={css.list}>
      {officers.map((data) => (
        <li key={data.id}>
          <OfficerProfile officer={data} />
        </li>
      ))}
    </ul>
  );
}
