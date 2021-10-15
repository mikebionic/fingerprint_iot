from flask_login import UserMixin

from main import db
from main import login_manager

@login_manager.user_loader
def load_user(id):
	return User.query.get(int(id))


class User(db.Model, UserMixin):
	id = db.Column(db.Integer, primary_key=True)
	username = db.Column(db.String(255))
	pin = db.Column(db.String(80))

	def to_json(self):
		return {
			"id": self.id,
			"username": self.username,
			"pin": self.pin
		}


class Access_log(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	finger_id = db.Column(db.Integer, db.ForeignKey('finger.id'))
	access_type = db.Column(db.String(255))
	date = db.Column(db.DateTime)

	def to_json(self):
		return {
			"id": self.id,
			"finger_id": self.finger_id,
			"access_type": self.access_type,
			"date": self.date,
		}


class Finger(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	finger_id = db.Column(db.Integer)
	name = db.Column(db.String(500))
	access_logs = db.relationship('Access_log', backref='finger', lazy=True)

	def to_json(self):
		return {
			"id": self.id,
			"finger_id": self.finger_id,
			"name": self.name,
		}