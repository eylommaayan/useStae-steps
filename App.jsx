import { useState } from "react";

const messages = [
  "מהם sate ב-react? ⚛️",
  "הוספת כפתור להפעלת ה-state",
  "דרכים לעבודה נכונה עם state",
];

// export default function App() {
//   return (
//     <div>
//       <Steps />
//       <StepMessage step={1}>
//         <p>Pass in content</p>
//         <p>✌️</p>
//       </StepMessage>
//       <StepMessage step={2}>
//         <p>Read children prop</p>
//         <p>😎</p>
//       </StepMessage>
//       {/* <Steps /> */}
//     </div>
//   );
// }
export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // const [test, setTest] = useState({ name: "Jonas" });

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
      // setStep((s) => s + 1);
    }
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <Button
                bgColor="#e7e7e7"
                textColor="#333"
                onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
              >
                בואו נלמד
              </Button>
            </div>
          </StepMessage>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈</span> הקודם
            </Button>

            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              הבא <span>👉</span>
              <span>🤓</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>תהליך למידה נכון {step}</h3>
      {children}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
