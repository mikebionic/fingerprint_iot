from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_login import LoginManager
from main.config import Config

app = Flask(__name__)
app.config.from_object(Config)

CORS(app)
db = SQLAlchemy(app)

login_manager = LoginManager(app)
login_manager.login_view = 'login_page'
login_manager.login_message = 'Ulgama girin!'
login_manager.login_message_category = 'info'

from main.api import *
from main.views import *