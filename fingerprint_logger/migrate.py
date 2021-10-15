from main import db

from main.config import Config
from main.models import User

db.drop_all()
db.create_all()

admin_user = User(username=Config.ADMIN_USERNAME, pin = Config.ADMIN_PIN)

db.session.add(admin_user)
db.session.commit()