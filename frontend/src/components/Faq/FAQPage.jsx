import React, { useState, useEffect } from 'react';
import API_BASE_URL from '../../constants.js';
import FAQCard from './FAQCard.jsx'
import '../../App.css'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const FAQPage = () => {

    useEffect(() => {
        toast.info("Please wait, it may take up to 50 seconds to load FAQs.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: {
                color: 'black'
            }
        });
    }, []);
    
    const [faqs, setFaqs] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [editFaq, setEditFaq] = useState(null);
    const [newFaq, setNewFaq] = useState({
        fruitName: '',
        question: '',
        answer: ''
    });

    useEffect(() => {
        const fetchFaqs = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/faqs/`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const data = await response.json();
                if (data && data.faqs) {
                    setFaqs(data.faqs);
                } else {
                    setFaqs([]);
                }
            } catch (error) {
                console.error('Error fetching FAQs:', error);
            }
        };
        fetchFaqs();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewFaq({ ...newFaq, [name]: value });
    };

    const handleAddFormOpen = () => {
        setNewFaq({
            fruitName: '',
            question: '',
            answer: ''
        });
        setShowAddForm(true);
    };

    const handleAddFaq = async () => {

        if (newFaq.fruitName === '' || newFaq.question === '' || newFaq.answer === '') {
            alert("Please fill all the fields");
            return;
        }
        try {
            const response = await fetch(`${API_BASE_URL}/faqs/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newFaq),
            });

            const data = await response.json();
            if (data.code === 201) {
                setFaqs([...faqs, data.created_faq]);
                setShowAddForm(false);
            }

        } catch (error) {
            console.error('Error creating FAQ:', error);
        }
    };

    const handleEditFaq = async () => {

        if (
            editFaq.fruitName === faqs.find(faq => faq._id === editFaq._id).fruitName &&
            editFaq.question === faqs.find(faq => faq._id === editFaq._id).question &&
            editFaq.answer === faqs.find(faq => faq._id === editFaq._id).answer
        ) {
            alert("No changes were made.");
            setShowEditForm(false);
            return;
        }

        try {
            const response = await fetch(`${API_BASE_URL}/faqs/${editFaq._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editFaq),
            });

            const data = await response.json();

            if (data.code === 200) {
                setFaqs(faqs.map(faq => faq._id === editFaq._id ? data.updated_faq : faq));
                setShowEditForm(false);
                setEditFaq(null);
            }

        } catch (error) {
            console.error('Error updating FAQ:', error);
        }
    };

    const handleDeleteFaq = async (faqId) => {
        try {
            const response = await fetch(`${API_BASE_URL}/faqs/${faqId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();

            if (data.code === 200) {
                setFaqs(faqs.filter(faq => faq._id !== faqId));
            }

        } catch (error) {
            console.error('Error deleting FAQ:', error);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-gradient-to-tr from-sky-950 from-40% via-blue-900 via-75% to-blue-800 to-90% p-8">

            <div className="absolute md:top-12 md:left-12 top-4 left-6 hover:scale-110">
                <Link to="/home" className='flex flex-row'>
                    <img
                        src='back.png'
                        alt="Back"
                        className="md:w-10 md:h-9 w-8 h-7"
                    />
                </Link>
            </div>

            <h1 className="text-4xl font-dosis md:text-5xl font-bold text-transparent bg-gradient-to-tr from-orange-400 via-orange-500 to-orange-600 bg-clip-text mb-6 text-center pt-10">FAQs</h1>
            {faqs.length === 0 ? (
                <p className="text-white text-xl mb-4 text-center">No FAQs to show!</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {faqs.map((faq) => (
                        <FAQCard
                            key={faq._id}
                            fruitName={faq.fruitName}
                            question={faq.question}
                            answer={faq.answer}
                            onEdit={() => {
                                setEditFaq(faq);
                                setShowEditForm(true);
                            }}
                            onDelete={() => {
                                if (window.confirm('Do you want to delete this FAQ?')) {
                                    handleDeleteFaq(faq._id);
                                }
                            }}
                        />
                    ))}
                </div>
            )}

            <button
                onClick={handleAddFormOpen}
                className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600"
            >
                + Add a New FAQ
            </button>

            {showAddForm && (
                <AddFAQForm
                    onClose={() => setShowAddForm(false)}
                    onSubmit={handleAddFaq}
                    faq={newFaq}
                    onChange={handleInputChange}
                />
            )}

            {showEditForm && (
                <EditFAQForm
                    onClose={() => setShowEditForm(false)}
                    onSubmit={handleEditFaq}
                    faq={editFaq}
                    onChange={(e) => setEditFaq({ ...editFaq, [e.target.name]: e.target.value })}
                />
            )}
        </div>
    );
};

const AddFAQForm = ({ onClose, onSubmit, faq, onChange }) => (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-40">
        <div className="bg-gradient-to-tr from-blue-200 from-40% via-blue-300 via-75% to-blue-300 to-90% p-6 rounded shadow-lg w-80">
            <h2 className="text-xl font-bold mb-8 text-center">Add a New FAQ</h2>
            <form>
                <div className='input-container'>
                    <input
                        type="text"
                        name="fruitName"
                        placeholder=" "
                        value={faq.fruitName}
                        onChange={onChange}
                    />
                    <label>Fruit Name</label>
                </div>

                <div className='input-container'>
                    <input
                        type="text"
                        name="question"
                        placeholder=" "
                        value={faq.question}
                        onChange={onChange}
                    />
                    <label>Question</label>
                </div>

                <div className='input-container'>
                    <input
                        type="text"
                        name="answer"
                        placeholder=" "
                        value={faq.answer}
                        onChange={onChange}
                    />
                    <label>Answer</label>
                </div>

                <button
                    type="button"
                    onClick={onSubmit}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                    Done
                </button>
                <button
                    type="button"
                    onClick={onClose}
                    className="ml-2 text-red-500 hover:text-red-400"
                >
                    Cancel
                </button>
            </form>
        </div>
    </div>
);

const EditFAQForm = ({ onClose, onSubmit, faq, onChange }) => (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-40">
        <div className="bg-gradient-to-tr from-blue-200 from-40% via-blue-300 via-75% to-blue-300 to-90% p-6 rounded shadow-lg w-80">
            <h2 className="text-xl font-bold mb-8 text-center">Edit FAQ</h2>
            <form>
                <div className='input-container'>
                    <input
                        type="text"
                        name="fruitName"
                        placeholder=" "
                        value={faq.fruitName}
                        onChange={onChange}
                    />
                    <label>Fruit Name</label>
                </div>

                <div className='input-container'>
                    <input
                        type="text"
                        name="question"
                        placeholder=" "
                        value={faq.question}
                        onChange={onChange}
                    />
                    <label>Question</label>
                </div>

                <div className='input-container'>
                    <input
                        type="text"
                        name="answer"
                        placeholder=" "
                        value={faq.answer}
                        onChange={onChange}
                    />
                    <label>Answer</label>
                </div>

                <button
                    type="button"
                    onClick={onSubmit}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Save Changes
                </button>
                <button
                    type="button"
                    onClick={onClose}
                    className="ml-2 text-red-500 hover:text-red-400"
                >
                    Cancel
                </button>
            </form>
        </div>
    </div>
);

export default FAQPage;
