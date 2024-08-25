export default function HideShow({onToggle, isVisible}) {
    return (
      <>
        <button onClick={onToggle}>{isVisible ? "Hide" : "Show"}</button>
        {isVisible && (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
            cupiditate, quo voluptas culpa aperiam ut laudantium magnam est
            dignissimos possimus similique perferendis, autem officia saepe
            nostrum impedit. Nostrum, nam natus.
          </p>
        )}
      </>
    );
}