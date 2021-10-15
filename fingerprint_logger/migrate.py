from main import db

from main.models import User

db.drop_all()
db.create_all()

admin_user = User(username="superuser", pin = "123helpme")

db.session.add(admin_user)
db.session.commit()