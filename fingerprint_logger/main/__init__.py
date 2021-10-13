from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
db = SQLAlchemy(app)
CORS(app)

app.config['SECRET_KEY'] = "dgryhutyvdkgwfhue4of87iugc8ogiyreuw80vhuo"
app.config['DEVICE_SECRET'] = "finger_secret_key"
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///finger_logger.db'

from main.api import *