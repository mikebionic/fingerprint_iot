from flask import request, abort, make_response
from datetime import datetime
from sqlalchemy.orm import joinedload
from flask_login import current_user

from main import app, db
from main.models import Access_log, Finger


# http://192.168.1.252:5000/finger_logger/?device_key=finger_secret_key&finger_id=3
@app.route("/finger_logger/")
def finger_logger():
	device_key = request.args.get("device_key",None,str)
	finger_id = request.args.get("finger_id",0,int)
	access_type = request.args.get("access_type",None,str)

	if not device_key:
		abort(400)
	
	if not finger_id and not access_type:
		abort(400)

	if device_key != app.config["DEVICE_SECRET"]:
		abort(401)

	if finger_id:
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
			access_type = "Fingerprint",
			date = datetime.now()
		)

	else:
		new_log = Access_log(
			access_type = access_type,
			date = datetime.now()
		)

	db.session.add(new_log)
	db.session.commit()

	return make_response('success'), 201


@app.route("/access_logs/")
def access_logs():
	# if not current_user.is_authenticated:
	# 	abort(401)

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
	# if not current_user.is_authenticated:
	# 	abort(401)

	fingers = Finger.query.all()

	response = {
		"data": [finger.to_json() for finger in fingers],
		"total": len(fingers),
		"message": "Finger data"
	}

	return make_response(response)
