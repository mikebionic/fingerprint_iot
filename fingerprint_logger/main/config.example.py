class Config:
	SECRET_KEY = "app_secret_key"
	DEVICE_SECRET = "finger_secret_key"
	SQLALCHEMY_DATABASE_URI = 'sqlite:///finger_logger.db'

	ADMIN_USERNAME = "admin"
	ADMIN_PIN = "123"