from flask import Blueprint, request, jsonify
from src.services.faq_service import get_all_faqs, get_faq_by_id, create_faq, update_faq, delete_faq

faq_blueprint = Blueprint('faqs', __name__)

@faq_blueprint.route('/', methods=['GET', 'OPTIONS'])
def fetch_faqs():
    faqs = get_all_faqs()
    if len(faqs) == 0:
        return jsonify({'message': 'No FAQs to show', 'code': 200}), 200
    return jsonify({'faqs': faqs, 'code': 200}), 200


@faq_blueprint.route('/<faq_id>', methods=['GET'])
def fetch_faq(faq_id):
    faq = get_faq_by_id(faq_id)
    if faq:
        return jsonify({'faq': faq, 'code': 200}), 200
    return jsonify({'error': 'FAQ not found', 'code': 404}), 404


@faq_blueprint.route('/', methods=['POST'])
def add_faq():
    data = request.get_json()
    new_faq = create_faq(data)
    return jsonify({'created_faq': new_faq, 'code': 201}), 201


@faq_blueprint.route('/<faq_id>', methods=['PUT'])
def update_faq_entry(faq_id):
    data = request.get_json()
    updated_faq = update_faq(faq_id, data)
    if updated_faq:
        return jsonify({'updated_faq': updated_faq, 'code': 200}), 200
    return jsonify({'error': 'FAQ not found', 'code': 404}), 404


@faq_blueprint.route('/<faq_id>', methods=['DELETE'])
def remove_faq(faq_id):
    if delete_faq(faq_id):
        return jsonify({'message': 'FAQ deleted', 'code': 200}), 200
    return jsonify({'error': 'FAQ not found', 'code': 404}), 404