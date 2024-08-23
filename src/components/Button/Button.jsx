import clsx from "clsx";
import css from "./Button.module.css";

export default function Button({ type = "button", variant, children }) {
  const handleClick = () => {
    console.log("CLICK!!");
  };

  return (
    <button
      className={clsx(
        css.btn,
        variant === "primary" ? css.primary : css.secondary
      )}
      type={type}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
