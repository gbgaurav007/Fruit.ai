from flask import Flask, jsonify
from flask_cors import CORS
from src.controllers.faq_controller import faq_blueprint
from src.config.database import init_db, mongo
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
#CORS(app, supports_credentials=True)
CORS(app, resources={r"/*": {"origins": "https://fruit-ai-wine.vercel.app"}})

init_db(app)

app.register_blueprint(faq_blueprint, url_prefix='/faqs')

@app.route('/db-check', methods=['GET'])
def db_check():
    try:
        mongo.db.faqs.find_one()
        return jsonify({"message": "Successfully connected to MongoDB!"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

import os

if __name__ == '__main__':
    debug_mode = os.getenv('FLASK_DEBUG', 'False').lower() in ['true', '1', 't']
    app.run(debug=debug_mode)
