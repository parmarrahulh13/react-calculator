import "./Button.css";

function Button({ handleClick }) {
  const number = [
    "AC",
    "%",
    "/",
    "backspace",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "00",
    "0",
    ".",
    "=",
  ];

  return (
    <>
      <div className="calculator-btn">
        <div className="btn">
          {number.map((number) => {
            return (
              <button key={number}
                 className={number === "=" ? "equal-btn" : ""}
                 onClick={() => handleClick(number)}>
                {number === "backspace" ? (
                  <i className="fa-solid fa-delete-left"></i>
                ) : (
                  number
                )}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Button;
