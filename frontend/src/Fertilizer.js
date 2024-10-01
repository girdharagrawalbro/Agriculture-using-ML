import React, { useState } from 'react';
import axios from 'axios';

function Fertilizer() {
  const [soilData, setSoilData] = useState({
    temperature: '',
    humidity: '',
    moisture: '',
    soil_type: '',
    crop_type: '',
    nitrogen: '',
    potassium: '',
    phosphorous: ''
  });

  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    setSoilData({
      ...soilData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/predict_fertilizer', soilData);
      setResult(response.data.recommended_fertilizer);
    } catch (error) {
      console.error('Error fetching prediction', error);
    }
  };

  return (
    <section className="main d-flex align-items-center text-white">
      <div className="container text-center">
        <h1>Agri AI - Fertilizer Recommendation</h1>
        <form onSubmit={handleSubmit} className='d-flex flex-column gap-2 form justify-content-center align-items-center'>
          <input
            type="number"
            name="temperature"
            placeholder="Temperature"
            value={soilData.temperature}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="humidity"
            placeholder="Humidity"
            value={soilData.humidity}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="moisture"
            placeholder="Moisture"
            value={soilData.moisture}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="soil_type"
            placeholder="Soil Type"
            value={soilData.soil_type}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="crop_type"
            placeholder="Crop Type"
            value={soilData.crop_type}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="nitrogen"
            placeholder="Nitrogen content"
            value={soilData.nitrogen}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="potassium"
            placeholder="Potassium content"
            value={soilData.potassium}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="phosphorous"
            placeholder="Phosphorous content"
            value={soilData.phosphorous}
            onChange={handleInputChange}
          />
          <button type="submit" className='btn btn-success'>Get Suggestion</button>
        </form>

        {result && <h4 className='mt-3 bg-dark p-2 w-50 mx-auto'>Recommended Fertilizer: {result}</h4>}
      </div>
    </section>
  );
}

export default Fertilizer;
