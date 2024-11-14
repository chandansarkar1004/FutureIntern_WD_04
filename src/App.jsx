import { useState } from 'react'
import './App.css'
import bg from '/background_Img.png'

function App() {
  const [temperatureType, setTemperatureType] = useState('celcius');
  const [temperatureType2, setTemperatureType2] = useState('kelvin')
  const [temperature, setTemperature] = useState(0);
  const [temperature2, setTemperature2] = useState(0);

  const result = () => {
    let convert = 0;
    if(temperatureType === 'celcius' && temperatureType2 === 'kelvin'){
      convert = Number(temperature) + 273.15;
    }
    if(temperatureType === 'kelvin' && temperatureType2 === 'celcius'){
      convert = Number(temperature) - 273.15;
    }
    if(temperatureType === 'kelvin' && temperatureType2 === 'fahrenheit'){
      convert = (Number(temperature) - 273.15) * 9/5 + 32;
    }
    if(temperatureType === 'fahrenheit' && temperatureType2 === 'kelvin'){
      convert = (Number(temperature) - 32) * 5/9 + 273.15;
    }
    if(temperature === 0 && temperatureType2 === 'fahrenheit'){
      convert = Number(temperature) * 9/5 + 32;
    }
    if(temperature > 0 && temperatureType2 === 'kelvin'){
      convert = Number(temperature) + 273.15;
    }
    if(temperature > 0 && temperatureType === 'celcius' && temperatureType2 === 'fahrenheit'){
      convert = Number(temperature) * 9/5 + 32;
    }
    if(temperatureType === temperatureType2){
      return null;
    }
    return convert;
  }
  
  return (
    <div className="relative h-screen flex items-center justify-center bg-blue-500">
  <img src={bg} alt="backgroundImg" className="absolute inset-0 w-full h-full object-cover z-10 opacity-20" />

  <div className="relative z-50 p-10 bg-white bg-opacity-80 border border-gray-300 rounded-lg shadow-lg max-w-lg w-full text-center">
    <h1 className="text-4xl font-bold text-blue-600 mb-8">Temperature Converter</h1>

    <div className="space-y-6">
      {/* Temperature Type Selectors */}
      <div className="flex items-center justify-center space-x-4">
        <select 
          name="temperatureType" 
          value={temperatureType} 
          onChange={(e) => setTemperatureType(e.target.value)}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
        >
          <option value="celcius">Celsius (°C)</option>
          <option value="kelvin">Kelvin (°K)</option>
          <option value="fahrenheit">Fahrenheit (°F)</option>
        </select>

        <p className="text-lg font-semibold text-gray-700">to</p>

        <select 
          name="temperatureType2" 
          value={temperatureType2} 
          onChange={(e) => setTemperatureType2(e.target.value)}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
        >
          <option value="kelvin">Kelvin (°K)</option>
          <option value="celcius">Celsius (°C)</option>
          <option value="fahrenheit">Fahrenheit (°F)</option>
        </select>
      </div>

      {/* Input and Output Fields */}
      <div className="flex items-center justify-between">
        <label className="text-lg font-medium text-gray-700" htmlFor="temperatureInput">
          {temperatureType || 'Celsius'}
        </label>
        <input 
          id="temperatureInput" 
          type="number" 
          value={temperature} 
          onChange={(e) => setTemperature(e.target.value)}
          className="w-32 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400 text-center"
        />
      </div>

      <div className="flex items-center justify-between">
        <label className="text-lg font-medium text-gray-700" htmlFor="temperatureOutput">
          {temperatureType2 || 'Kelvin'}
        </label>
        <input 
          id="temperatureOutput" 
          type="text" 
          value={result() || ''} 
          readOnly
          className="w-32 p-2 border border-gray-300 rounded-md bg-gray-100 text-center"
        />
      </div>
    </div>

    {/* Error Message */}
    {result() === null && (
      <p className="text-red-600 mt-4 font-semibold">
        Both temperature types are the same. Please select different types.
      </p>
    )}
  </div>
</div>

  )
}

export default App
