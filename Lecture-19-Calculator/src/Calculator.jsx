import { useState } from "react";

const SimpleCalculatorUI = () => {
    const [input, setInput] = useState('');
    const handleClick = (param)=>{
        setInput(input + param)
    }
    const calculate = ()=>{
        const result = eval(input);
        setInput(result);
    }
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="w-96">
        {/* Calculator Container */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          
          {/* Display */}
          <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
            <div className="text-right">
              <div className="text-4xl font-bold text-gray-800 dark:text-white font-mono">
                {input || 0}
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="p-4">
            <div className="grid grid-cols-4 gap-3">
              {/* Row 1 */}
              <button onClick={()=>setInput("")} className="h-14 rounded-lg bg-red-100 hover:bg-red-200 dark:bg-red-900/30 dark:hover:bg-red-900/50 text-red-600 dark:text-red-400 font-medium">
                AC
              </button>
              <button onClick={()=>handleClick(7)} className="h-14 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium">
                +/-
              </button>
              <button onClick={()=>handleClick('%')} className="h-14 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium">
                %
              </button>
              <button onClick={()=>handleClick('/')} className="h-14 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium">
                ÷
              </button>

              {/* Row 2 */}
              <button onClick={()=>handleClick(7)} className="h-14 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium">
                7
              </button>
              <button onClick={()=>handleClick(8)} className="h-14 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium">
                8
              </button>
              <button onClick={()=>handleClick(9)} className="h-14 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium">
                9
              </button>
              <button onClick={()=>handleClick('*')} className="h-14 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium">
                ×
              </button>

              {/* Row 3 */}
              <button onClick={()=>handleClick(4)} className="h-14 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium">
                4
              </button>
              <button onClick={()=>handleClick(5)} className="h-14 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium">
                5
              </button>
              <button onClick={()=>handleClick(6)} className="h-14 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium">
                6
              </button>
              <button onClick={()=>handleClick('-')} className="h-14 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium">
                -
              </button>

              {/* Row 4 */}
              <button onClick={()=>handleClick(1)} className="h-14 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium">
                1
              </button>
              <button onClick={()=>handleClick(2)} className="h-14 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium">
                2
              </button>
              <button onClick={()=>handleClick(3)} className="h-14 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium">
                3
              </button>
              <button onClick={()=>handleClick('+')} className="h-14 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium">
                +
              </button>

              {/* Row 5 */}
              <button onClick={()=>handleClick(0)} className="h-14 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium col-span-2">
                0
              </button>
              <button onClick={()=>handleClick('.')} className="h-14 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium">
                .
              </button>
              <button onClick={calculate} className="h-14 rounded-lg bg-green-500 hover:bg-green-600 text-white font-medium">
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleCalculatorUI;