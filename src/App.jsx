import { useState } from "react";

function App() {
  const [weightValue, setWeightValue] = useState("");
  const [tallValue, setTallValue] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");
  const [idealWeight, setIdealWeight] = useState(null); 

  const calculateBmi = () => {
    if (weightValue > 0 && tallValue > 0) {
      const heightInMeters = tallValue / 100;
      const bmiValue = (
        weightValue /
        (heightInMeters * heightInMeters)
      ).toFixed(2);
      setBmi(bmiValue);

      if (bmiValue < 18.5) {
        setStatus(
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRFZJdp-GvzNKLfgifvm303H7fUY0eoEH6zjmybAzVdh5m0s36O"
        );
      } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        setStatus(
          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTRTrBaNEuwK4HfWeLmXMSI1QhYUASEG10bUZ-XrcrFZMvtKpAz"
        );
      } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        setStatus(
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSQPQMTUHMfa8v1CvYokqZUZtwftSDJH7TgA9-98WrB1CDS94J4"
        );
      } else {
        setStatus(
          "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRWbsAIZclxhZZhBIAb0IhLPurAmDuTt_uFmFX5VUJKZ-O7udum"
        );
      }

      
      const heightInInches = tallValue / 2.54;
      const idealWeightValue = (50 + 2.3 * (heightInInches - 60)).toFixed(2);
      setIdealWeight(idealWeightValue);
    }
  };

  const weightChange = (e) => {
    setWeightValue(e.target.value);
  };

  const tallChange = (e) => {
    setTallValue(e.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-6">حساب مؤشر كتلة الجسم</h1>

      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            الوزن (بالكيلوغرام):
          </label>
          <input
            type="text"
            value={weightValue}
            onChange={weightChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="أدخل وزنك"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            الطول (بالسنتيمتر):
          </label>
          <input
            type="text"
            value={tallValue}
            onChange={tallChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="أدخل طولك"
          />
        </div>

        <button
          onClick={calculateBmi}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          احسب مؤشر الكتلة
        </button>

        {bmi && (
          <div className="mt-6 text-center">
            <h2 className="text-lg font-semibold">مؤشر كتلة الجسم: {bmi}</h2>
            <img
              src={status}
              alt="BMI status"
              className="w-32 h-32 mx-auto mt-4 rounded-full shadow-lg"
            />
            {idealWeight && (
              <h3 className="mt-4 text-lg">
                الوزن المثالي : {idealWeight} كغ
              </h3>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
