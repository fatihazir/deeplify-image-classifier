# For Deeplify Backend

## Introduction

Welcome to the Deeplify Backend project of Fatih HAZIR. This project is a FastAPI-based backend service designed to handle image classification tasks. It features robust exception handling including end-point check, file type check, a JSON-based fixed response structure, and can be easily extended to include token-based authentication for secure access. The backend is structured to provide clear and consistent responses, ensuring a smooth integration with frontend applications.

## Screenshots

- OK
![OK screenshot](/screenshots/OK.png)

- NOK
![NOK screenshot](/screenshots/NOK.png)

## Installation

0. **Switch to deeplify-backend:**
   ```bash 
   cd deeplify-backend

## Setup (Without docker, dockerized version below)

1. **Create a virtual environment:**
   ```bash
   python -m venv env

2. **Activate the virtual environment for macOS and Linux:**
   ```bash
   source env/bin/activate

3. **Activate the virtual environment for Windows:**
   ```bash
   env\Scripts\activate

4. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   or
   pip3 install -r requirements.txt
   or
   python3 -m pip install -r requirements.txt

5. **Run the application:**
   ```bash
   uvicorn app.main:app --reload

5. **Endpoints:**
   POST /api/v1/classify-image: Accepts an image file and returns a classification label.


## Setup (With docker)
- Make sure docker is running

0. **Switch to deeplify-backend:**
   ```bash 
   cd deeplify-backend

1. **Build the docker image:**
   ```bash
   docker build -t deeplify-backend .

2. **run the container:**
   ```bash
   docker run -d -p 8000:8000 deeplify-backend

3. **Verify the Setup:**
   After running the Docker container, you can verify the setup by accessing the FastAPI application at http://localhost:8000.


4. **Endpoints:**
   POST /api/v1/classify-image: Accepts an image file and returns related response.


## Testing
### Screenshots

- OK
![OK screenshot](/screenshots/OK-test.png)

- NOK
![NOK screenshot](/screenshots/NOK-test.png)



### Make sure you succesfully run the backend with local installation.
 
### If not, you need to locate and activate the venv of backend file. Make sure you followed the instructions above (Setup (Without docker, dockerized version below) until the step 4(4 including)).

1. **Install `pytest` and `httpx`:**
   ```bash
   pip install pytest httpx

2. **Run the tests:**
   ```bash
   pytest

# For Deeplify Frontend

## Introduction

Welcome to the Deeplify Frontend project of Fatih HAZIR. This project is a React-based frontend application designed to interface with the Deeplify backend service for image classification tasks. It provides a user-friendly interface to upload images and displays classification results in an intuitive manner. The frontend leverages Material-UI for its UI components and styling, ensuring a clean and responsive design.

0. **Switch to deeplify-frontend:**
   ```bash
   cd deeplify-frontend

## Installation

Follow these steps to set up and run the frontend application:

0. **Make sure the docker backend is working:**
   ```bash
   Please check backend repository for instructions.

1. **Install dependencies:**
   ```bash
   npm install

2. **Start the project:**
   ```bash
   npm start
   
