from flask import request, abort, make_response
from datetime import datetime
from sqlalchemy.orm import joinedload

from main import app, db
from main.models import Access_log, Finger, User


# http://192.168.1.252:5000/finger_logger/?device_key=finger_seceret_key&finger_id=3
@app.route("/finger_logger/")
def finger_logger():
	device_key = request.args.get("device_key",None,str)
	finger_id = request.args.get("finger_id",0,int)

	if not device_key or not finger_id:
		abort(400)

	if device_key != app.config["DEVICE_SECRET"]:
		abort(401)

	this_finger = Finger.query.filter_by(finger_id = finger_id).first()
	if not this_finger:
		this_finger = Finger(
			finger_id = finger_id,
			name = str(datetime.now())
		)
		db.session.add(this_finger)
		db.session.commit()
	
	new_log = Access_log(
		finger_id = this_finger.finger_id,
		date = datetime.now()
	)
	db.session.add(new_log)
	db.session.commit()

	return make_response('success'), 201


@app.route("/access_logs/")
def access_logs():
	logs = Access_log.query\
		.options(joinedload(Access_log.finger))\
		.order_by(Access_log.date.desc())\
		.all()

	data = []
	for log in logs:
		log_data = log.to_json()
		log_data["name"] = log.finger.name if log.finger else ''
		data.append(log_data)

	response = {
		"data": data,
		"total": len(logs),
		"message": "Access logs"
	}

	return make_response(response)


@app.route("/fingerprints_data/")
def fingers_data():
	fingers = Finger.query.all()

	response = {
		"data": [finger.to_json() for finger in fingers],
		"total": len(fingers),
		"message": "Finger data"
	}

	return make_response(response)

@app.route("/login")
def login():
	pin = request.args.get('pin',"",str)
	user = User.query.filter_by(pin = pin).first()

	if not user:
		abort(401)
	
	data = {
		"data": user.to_json(),
		"message": "Login"
	}
	return make_response(data)