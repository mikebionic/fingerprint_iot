# 🔐 Fingerprint & RFID-Based Entrance Access Logger

A **Nanoelectronics & IoT** project that uses an **Adafruit fingerprint sensor** with Arduino to provide secure access logging and gate control.

When a registered user scans their fingerprint (or RFID card), the system validates it via an API connected to a database.
If access is approved, the server triggers a **door opening mechanism**.

---

## Technology Stack

* **Frontend:** React.js — Web interface for monitoring and management.
* **Firmware:** C++ (Arduino) — Fingerprint sensor and RFID handling.
* **Backend:** Python — API server, database management, and access control logic.
* **Hardware:** Arduino-compatible board, Adafruit Fingerprint Sensor, optional RFID reader, servo/motor for door control.

## Features

* **Secure Identity Verification** — Fingerprint or RFID-based authentication.
* **Web Dashboard** — Displays cardholders, last interaction time, and access logs.
* **Real-Time Access Logging** — Records every scan with timestamp and user info.
* **Hardware Integration** — Automatically opens the gate if authentication is successful.
* **API-Driven** — Arduino sends HTTP requests to the backend for validation.

---

## 🛠 How It Works

1. **User Scans Fingerprint or RFID** — The Adafruit sensor captures the fingerprint or RFID data.
2. **Arduino Sends Request** — The device sends an HTTP POST request to the API with the scanned ID.
3. **Backend Validates Access** — The Python API checks the ID against the database.
4. **Gate Control** — If valid, the backend returns a success response, and the Arduino triggers the servo/motor to open the gate.
5. **Web Interface Update** — The React frontend updates logs and displays the access event in real-time.

---

## 📂 Project Links

* **Full Project Repository:** [fingerprint\_iot](https://github.com/mikebionic/fingerprint_iot)
* **Arduino-Only Solution:** [fingerprint-ttl-door-lock](https://github.com/mikebionic/arduino-projects-hub/tree/main/fingerprint-ttl-door-lock)
* **Demo Video:** [Watch on YouTube](https://youtu.be/sckgonvsglo?feature=shared)

---

## 📷 Demo Preview

![Fingerprint Access System](static/projects/using/fingerprint.webp)

---

## 🚀 Installation & Setup

### 1. Hardware Setup

* Connect the **Adafruit fingerprint sensor** to Arduino (TX/RX pins).
* Optionally connect an **RFID reader** and a **servo/motor** for gate control.

### 2. Firmware (Arduino)

* Open the Arduino sketch from the `firmware` folder.
* Update Wi-Fi credentials and API endpoint in the code.
* Upload the firmware to your Arduino board.

### 3. Backend (Python API)

```bash
cd backend
pip install -r requirements.txt
python app.py
```

### 4. Frontend (React)

```bash
cd frontend
npm install
npm start
```
