import clsx from "clsx";
import css from "./OfficerProfile.module.css";

export default function OfficerProfile({
  officer: { name, age, specialization, status },
}) {
  return (
    <div className={css.cardInfo}>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p
        className={clsx(
          css.status,
          status === "Active" ? css.active : css.retired
        )}
      >
        Status: {status === "Active" ? "Is active" : "Is retired"}
      </p>
      <p>Specialization: {specialization}</p>
    </div>
  );
}
