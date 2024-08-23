import clsx from "clsx";
import css from "./OfficerProfile.module.css";

export default function OfficerProfile({
  officer: { name, age, specialization, status },
}) {
  const containerClass = clsx(
    css.status,
    status === "Active" ? css.active : css.retired
  );
  // another variant
  // const containerClass1 = clsx(css.container, {
  //   [css.active]: status === "Active",
  //   [css.retired]: status === "Retired",
  //   [css.kia]: status === "KIA",
  // });
  // ================

  return (
    <div className={css.cardInfo}>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p className={containerClass}>
        Status: {status === "Active" ? "Is active" : "Is retired"}
      </p>
      <p>Specialization: {specialization}</p>
    </div>
  );
}
