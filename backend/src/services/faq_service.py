from src.config.database import mongo
from bson import ObjectId
from src.models.faq_model import format_faq

def get_all_faqs():
    faqs = mongo.db.faqs.find()
    return [format_faq(faq) for faq in faqs]

def get_faq_by_id(faq_id):
    faq = mongo.db.faqs.find_one({'_id': ObjectId(faq_id)})
    return format_faq(faq) if faq else None

def create_faq(data):
    faq_id = mongo.db.faqs.insert_one({
        'fruitName': data['fruitName'],
        'question': data['question'],
        'answer': data['answer']
    }).inserted_id
    new_faq = mongo.db.faqs.find_one({'_id': faq_id})
    return format_faq(new_faq)

def update_faq(faq_id, data):
    result = mongo.db.faqs.update_one(
        {'_id': ObjectId(faq_id)},
        {'$set': {
            'fruitName': data['fruitName'],
            'question': data['question'],
            'answer': data['answer']
        }}
    )
    if result.modified_count > 0:
        updated_faq = mongo.db.faqs.find_one({'_id': ObjectId(faq_id)})
        return format_faq(updated_faq)
    return None

def delete_faq(faq_id):
    result = mongo.db.faqs.delete_one({'_id': ObjectId(faq_id)})
    return result.deleted_count > 0