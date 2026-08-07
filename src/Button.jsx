import "./Button.css";

function Button({handleClick}) {
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
              <button key={number} onClick={() => handleClick(number)}>
                {number}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Button;
