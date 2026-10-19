import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  const [operator, setOperator] = useState("+");

  const calculate = () => {
    const a = Number(num1);
    const b = Number(num2);

    if (num1 === "" || num2 === "") {
      setResult("Please enter both numbers");
      return;
    }

    let answer;

    switch (operator) {
      case "+":
        answer = a + b;
        break;

      case "-":
        answer = a - b;
        break;

      case "*":
        answer = a * b;
        break;

      case "/":
        if (b === 0) {
          setResult("Cannot divide by zero");
          return;
        }
        answer = a / b;
        break;

      default:
        answer = 0;
    }

    setResult(answer);
  };

  const clearCalculator = () => {
    setNum1("");
    setNum2("");
    setResult("");
    setOperator("+");
  };

  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-slate-100 via-cyan-50 to-purple-100 px-3">

      {/* =====================================================
          BACKGROUND DOODLES
      ====================================================== */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">

        {/* Soft Glow */}

        <div className="absolute -left-20 top-5 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="absolute -right-20 top-5 h-56 w-56 rounded-full bg-purple-400/20 blur-3xl" />

        <div className="absolute bottom-[-60px] left-[25%] h-52 w-52 rounded-full bg-blue-400/20 blur-3xl" />

        <div className="absolute bottom-[-50px] right-[15%] h-48 w-48 rounded-full bg-pink-400/15 blur-3xl" />


        {/* LARGE SYMBOLS */}

        <div className="absolute left-[5%] top-[10%] rotate-12 text-6xl font-bold text-cyan-500/20">
          +
        </div>

        <div className="absolute right-[6%] top-[12%] -rotate-12 text-7xl font-bold text-purple-500/20">
          −
        </div>

        <div className="absolute bottom-[10%] left-[6%] rotate-12 text-6xl font-bold text-blue-500/20">
          ×
        </div>

        <div className="absolute bottom-[9%] right-[7%] -rotate-12 text-7xl font-bold text-cyan-500/20">
          ÷
        </div>


        {/* MEDIUM DOODLES */}

        <div className="absolute left-[13%] top-[24%] flex h-12 w-12 rotate-12 items-center justify-center rounded-full border-2 border-cyan-500/20 text-xl font-bold text-cyan-500/25">
          %
        </div>

        <div className="absolute right-[13%] top-[26%] flex h-11 w-14 -rotate-6 items-center justify-center rounded-xl border-2 border-purple-500/20 text-xl font-bold text-purple-500/25">
          =
        </div>

        <div className="absolute left-[17%] bottom-[22%] h-12 w-12 rotate-12 rounded-xl border-2 border-blue-500/20" />

        <div className="absolute right-[17%] bottom-[22%] h-14 w-14 rounded-full border-2 border-cyan-500/20" />


        {/* MATH TEXT */}

        <div className="absolute left-[27%] top-[8%] rotate-6 text-xl font-bold text-blue-500/20">
          123
        </div>

        <div className="absolute right-[27%] top-[7%] -rotate-6 text-2xl font-bold text-purple-500/20">
          π
        </div>

        <div className="absolute left-[5%] top-[46%] -rotate-12 text-3xl font-bold text-cyan-500/20">
          √
        </div>

        <div className="absolute right-[5%] top-[46%] rotate-12 text-2xl font-bold text-blue-500/20">
          %
        </div>

        <div className="absolute left-[25%] bottom-[7%] -rotate-6 text-2xl font-bold text-purple-500/20">
          01
        </div>

        <div className="absolute right-[25%] bottom-[7%] rotate-6 text-2xl font-bold text-cyan-500/20">
          ∑
        </div>


        {/* SMALL SYMBOLS */}

        <div className="absolute left-[20%] top-[18%] text-2xl text-blue-500/20">
          +
        </div>

        <div className="absolute left-[8%] top-[36%] text-xl text-purple-500/20">
          ×
        </div>

        <div className="absolute left-[28%] top-[32%] text-xl text-cyan-500/20">
          −
        </div>

        <div className="absolute right-[22%] top-[18%] text-2xl text-cyan-500/20">
          ÷
        </div>

        <div className="absolute right-[8%] top-[36%] text-xl text-purple-500/20">
          +
        </div>

        <div className="absolute right-[27%] top-[42%] text-2xl text-blue-500/20">
          ×
        </div>

        <div className="absolute left-[22%] bottom-[16%] text-2xl text-cyan-500/20">
          =
        </div>

        <div className="absolute right-[22%] bottom-[16%] text-2xl text-purple-500/20">
          −
        </div>


        {/* CIRCLES */}

        <div className="absolute left-[3%] top-[20%] h-7 w-7 rounded-full border-2 border-blue-500/20" />

        <div className="absolute right-[4%] top-[22%] h-6 w-6 rounded-full border-2 border-cyan-500/20" />

        <div className="absolute left-[10%] bottom-[35%] h-4 w-4 rounded-full border-2 border-purple-500/20" />

        <div className="absolute right-[10%] bottom-[35%] h-4 w-4 rounded-full border-2 border-blue-500/20" />


        {/* BRACKETS */}

        <div className="absolute left-[15%] top-[6%] rotate-12 text-4xl font-light text-slate-500/15">
          (
        </div>

        <div className="absolute right-[15%] top-[6%] -rotate-12 text-4xl font-light text-slate-500/15">
          )
        </div>

        <div className="absolute left-[4%] bottom-[22%] rotate-12 text-4xl font-light text-slate-500/15">
          {"{"}
        </div>

        <div className="absolute right-[4%] bottom-[22%] -rotate-12 text-4xl font-light text-slate-500/15">
          {"}"}
        </div>


        {/* STARS */}

        <div className="absolute left-[18%] top-[13%] text-lg text-cyan-500/20">
          ✦
        </div>

        <div className="absolute right-[20%] top-[13%] text-xl text-purple-500/20">
          ✦
        </div>

        <div className="absolute left-[17%] bottom-[13%] text-xl text-blue-500/20">
          ✧
        </div>

        <div className="absolute right-[17%] bottom-[13%] text-lg text-cyan-500/20">
          ✦
        </div>

      </div>


      {/* =====================================================
          CALCULATOR
      ====================================================== */}

      <div className="relative z-10 w-full max-w-xl">

        {/* Glow Behind Card */}

        <div className="absolute inset-x-8 top-2 h-[80vh] max-h-[560px] rounded-[35%] bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-700 opacity-25 blur-2xl" />


        {/* Main Card */}

        <div className="relative rounded-[22px] border border-white/80 bg-white/65 p-2.5 shadow-2xl backdrop-blur-xl sm:p-3">


          {/* HEADER */}

          <div className="mb-2.5 flex items-center justify-between rounded-xl bg-white/95 px-4 py-2.5 shadow-md">

            <div>
              <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-cyan-500">
                Smart Utility
              </p>

              <h1 className="text-xl font-bold text-slate-800 sm:text-2xl">
                Basic Calculator
              </h1>
            </div>

            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 text-lg font-bold text-white shadow-lg">
              +
            </div>

          </div>


          {/* CALCULATOR BODY */}

          <div className="rounded-xl bg-white/95 p-3.5 shadow-lg sm:p-4">


            {/* FIRST NUMBER */}

            <div className="mb-2.5">

              <label className="mb-1 block text-xs font-bold text-slate-700">
                First Number
              </label>

              <input
                type="number"
                placeholder="Enter first number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-semibold text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white focus:ring-2 focus:ring-cyan-100"
              />

            </div>


            {/* OPERATION */}

            <div className="mb-2.5">

              <label className="mb-1 block text-xs font-bold text-slate-700">
                Select Operation
              </label>

              <select
                value={operator}
                onChange={(e) => setOperator(e.target.value)}
                className="w-full cursor-pointer rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-semibold text-slate-700 outline-none transition focus:border-cyan-400 focus:bg-white focus:ring-2 focus:ring-cyan-100"
              >
                <option value="+">Addition (+)</option>
                <option value="-">Subtraction (-)</option>
                <option value="*">Multiplication (×)</option>
                <option value="/">Division (÷)</option>
              </select>

            </div>


            {/* SECOND NUMBER */}

            <div className="mb-3">

              <label className="mb-1 block text-xs font-bold text-slate-700">
                Second Number
              </label>

              <input
                type="number"
                placeholder="Enter second number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-semibold text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white focus:ring-2 focus:ring-cyan-100"
              />

            </div>


            {/* BUTTONS */}

            <div className="grid grid-cols-2 gap-2">

              <button
                onClick={calculate}
                className="rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
              >
                Calculate
              </button>

              <button
                onClick={clearCalculator}
                className="rounded-lg bg-slate-200 px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-slate-300 active:scale-[0.98]"
              >
                Clear
              </button>

            </div>


            {/* RESULT */}

            {result !== "" && (
              <div className="mt-2.5 rounded-xl border border-cyan-200 bg-gradient-to-r from-cyan-50 via-white to-blue-50 px-3 py-2.5 text-center shadow-md">

                <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-cyan-500">
                  Calculation Result
                </p>

                <p className="mt-0.5 break-words text-xl font-bold text-slate-800">
                  {result}
                </p>

              </div>
            )}

          </div>


          {/* FOOTER */}
{/* FOOTER */}

<div className="flex flex-wrap justify-center gap-3 px-2 pt-2 text-[9px] font-medium text-slate-500">

  <span className="flex items-center gap-1">
    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
    Addition
  </span>

  <span className="flex items-center gap-1">
    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
    Subtraction
  </span>

  <span className="flex items-center gap-1">
    <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
    Multiplication
  </span>

  <span className="flex items-center gap-1">
    <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
    Division
  </span>

</div>

        </div>

      </div>

    </div>
  );
}

export default Calculator;