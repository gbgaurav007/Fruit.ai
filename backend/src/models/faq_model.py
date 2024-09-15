def format_faq(faq):
    """
    Helper function to format the FAQ data retrieved from MongoDB.
    """
    return {
        '_id': str(faq['_id']),
        'fruitName': faq['fruitName'],
        'question': faq['question'],
        'answer': faq['answer']
    }