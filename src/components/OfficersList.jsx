import OfficerProfile from "./OfficerProfile";

export default function OfficersList({ officers }) {
  return (
    <ul>
      {officers.map((data) => (
        <li key={data.id}>
          <OfficerProfile officer={data} />
        </li>
      ))}
    </ul>
  );
}
