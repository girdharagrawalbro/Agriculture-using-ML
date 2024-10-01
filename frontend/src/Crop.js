import React, { useState } from 'react';
import axios from 'axios';

function Crop() {
  const [soilData, setSoilData] = useState({
    nitrogen: '',
    phosphorus: '',
    potassium: '',
    pH: '',
    temperature: '',
    humidity: '',
    rainfall: ''
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
      const response = await axios.post('http://localhost:5000/predict_crop', soilData);
      setResult(response.data.recommended_crop);
    } catch (error) {
      console.error('Error fetching prediction', error);
    }
  };

  return (
    <section className="main d-flex align-items-center text-white">
      <div className="container text-center">
        <h1>Agri AI - Crop Recommendation</h1>
        <form onSubmit={handleSubmit} className='d-flex flex-column gap-2 form justify-content-center align-items-center'>
          <input
            type="number"
            name="nitrogen"
            placeholder="Nitrogen content"
            value={soilData.nitrogen}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="phosphorus"
            placeholder="Phosphorus content"
            value={soilData.phosphorus}
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
            name="pH"
            placeholder="Soil pH"
            value={soilData.pH}
            onChange={handleInputChange}
          />
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
            name="rainfall"
            placeholder="Rainfall (mm)"
            value={soilData.rainfall}
            onChange={handleInputChange}
          />
          <button type="submit" className='btn btn-success'>Get Suggestion</button>
        </form>

        {result && <h4 className='mt-3 bg-dark p-2 w-50 mx-auto'>Recommended Crop: {result}</h4>}
      </div>
    </section>
  );
}

export default Crop;
