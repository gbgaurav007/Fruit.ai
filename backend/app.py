from flask import Flask, jsonify
from flask_cors import CORS
from src.controllers.faq_controller import faq_blueprint
from src.config.database import init_db, mongo
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
#CORS(app, supports_credentials=True)
CORS(app, resources={r"/*": {"origins": "https://fruit-1pgjnik5v-gbgaurav007s-projects.vercel.app"}})

init_db(app)

app.register_blueprint(faq_blueprint, url_prefix='/faqs')

@app.route('/db-check', methods=['GET'])
def db_check():
    try:
        mongo.db.faqs.find_one()
        return jsonify({"message": "Successfully connected to MongoDB!"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
