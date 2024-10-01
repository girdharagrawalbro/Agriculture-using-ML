from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000"])

# Load the crop dataset (replace with the actual dataset path)
crop_data = pd.read_csv('crop_data.csv')  # Example dataset

# Encode the crop labels
label_encoder = LabelEncoder()
crop_data['label'] = label_encoder.fit_transform(crop_data['label'])  # Convert crop labels to integers

# Crop Features and Labels
X_crop = crop_data[['nitrogen', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall']]
y_crop = crop_data['label']

# Train Crop Prediction Model
X_train_crop, X_test_crop, y_train_crop, y_test_crop = train_test_split(X_crop, y_crop, test_size=0.2, random_state=42)
crop_model = RandomForestClassifier(n_estimators=100, random_state=42)
crop_model.fit(X_train_crop, y_train_crop)

# Load the fertilizer dataset (replace with the actual dataset path)
fertilizer_data = pd.read_csv('fertilizer_data.csv')

# Encode categorical features (Soil Type, Crop Type, and Fertilizer Name)
soil_type_encoder = LabelEncoder()
crop_type_encoder = LabelEncoder()
fertilizer_encoder = LabelEncoder()

fertilizer_data['Soil Type'] = soil_type_encoder.fit_transform(fertilizer_data['Soil Type'])
fertilizer_data['Crop Type'] = crop_type_encoder.fit_transform(fertilizer_data['Crop Type'])
fertilizer_data['Fertilizer Name'] = fertilizer_encoder.fit_transform(fertilizer_data['Fertilizer Name'])

# Fertilizer Features and Labels
X_fertilizer = fertilizer_data[['Temparature', 'Humidity', 'Moisture', 'Soil Type', 'Crop Type', 'Nitrogen', 'Potassium', 'Phosphorous']]
y_fertilizer = fertilizer_data['Fertilizer Name']

# Train Fertilizer Recommendation Model
X_train_fertilizer, X_test_fertilizer, y_train_fertilizer, y_test_fertilizer = train_test_split(X_fertilizer, y_fertilizer, test_size=0.2, random_state=42)
fertilizer_model = RandomForestClassifier(n_estimators=100, random_state=42)
fertilizer_model.fit(X_train_fertilizer, y_train_fertilizer)

# Route for predicting the crop
@app.route('/predict_crop', methods=['POST'])
@cross_origin()
def predict_crop():
    input_data = request.json
    N = input_data['nitrogen']
    P = input_data['phosphorus']
    K = input_data['potassium']
    temperature = input_data['temperature']
    humidity = input_data['humidity']
    ph = input_data['pH']
    rainfall = input_data['rainfall']

    # Predict the crop
    crop_prediction = crop_model.predict([[N, P, K, temperature, humidity, ph, rainfall]])
    predicted_crop = label_encoder.inverse_transform(crop_prediction)

    return jsonify({'recommended_crop': predicted_crop[0]})

# Route for recommending the fertilizer
@app.route('/predict_fertilizer', methods=['POST'])
@cross_origin()
def predict_fertilizer():
    input_data = request.json
    temperature = input_data['temperature']
    humidity = input_data['humidity']
    moisture = input_data['moisture']
    soil_type = input_data['soil_type']
    crop_type = input_data['crop_type']
    nitrogen = input_data['nitrogen']
    potassium = input_data['potassium']
    phosphorous = input_data['phosphorous']

    # Encode the categorical inputs
    soil_type_encoded = soil_type_encoder.transform([soil_type])[0]
    crop_type_encoded = crop_type_encoder.transform([crop_type])[0]

    # Predict the fertilizer
    fertilizer_prediction = fertilizer_model.predict([[temperature, humidity, moisture, soil_type_encoded, crop_type_encoded, nitrogen, potassium, phosphorous]])
    predicted_fertilizer = fertilizer_encoder.inverse_transform(fertilizer_prediction)

    return jsonify({'recommended_fertilizer': predicted_fertilizer[0]})

if __name__ == '__main__':
    app.run(debug=True)
