
from main import db

class User(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	pin = db.Column(db.String(80))
	def to_json(self):
		return {
			"id": self.id,
			"pin": self.pin
		}


class Access_log(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	finger_id = db.Column(db.Integer, db.ForeignKey('finger.id'))
	date = db.Column(db.DateTime)

	def to_json(self):
		return {
			"id": self.id,
			"finger_id": self.finger_id,
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