from flask import (
	request,
	redirect,
	render_template,
	url_for
)
from flask_login import login_required, current_user, login_user

from main import app
from main.models import User


@app.route("/login", methods=["POST"])
def login_request():
	if request.method == 'POST':
		pin = request.form.get('pin')
		username = request.form.get('username')
		print(pin, username)
		user = User.query.filter_by(username=username, pin=pin).first()

		if not user:
			return redirect(url_for('login_page'))

		print("found user")
		login_user(user)
		
		# data = {
		# 	"data": user.to_json(),
		# 	"message": "Login"
		# }
		return redirect(url_for('access_logs_page'))
	return redirect(url_for('login_page'))


@app.route("/app/login")
def login_page():
	print(current_user)
	if current_user.is_authenticated:
		return redirect('access_logs_page')
	return render_template('index.html')


@app.route("/app/access_logs")
@login_required
def access_logs_page():
	return render_template('index.html')


@app.route("/app/fingerprints")
@login_required
def fingerprints_page():
	return render_template('index.html')
