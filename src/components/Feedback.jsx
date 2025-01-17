import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANMXAIXPdIIg71irc5EnYEPk_Y24xD4WM",
  authDomain: "shah-funeral.firebaseapp.com",
  projectId: "shah-funeral",
  storageBucket: "shah-funeral.firebasestorage.app",
  messagingSenderId: "836785872473",
  appId: "1:836785872473:web:3b8d50178a13e1f22f9b48",
  measurementId: "G-E4LJBEWZZ1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const FeedbackSection = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [newFeedback, setNewFeedback] = useState({ name: "", message: "" });

  // Fetch feedback from Firestore
  useEffect(() => {
    const fetchFeedback = async () => {
      const querySnapshot = await getDocs(collection(db, "feedbacks"));
      const fetchedFeedbacks = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFeedbacks(fetchedFeedbacks);
    };
    fetchFeedback();
  }, []);

  const handleAddFeedback = async () => {
    if (newFeedback.name && newFeedback.message) {
      try {
        await addDoc(collection(db, "feedbacks"), newFeedback);
        setFeedbacks([...feedbacks, newFeedback]);
        setShowModal(false);
        setNewFeedback({ name: "", message: "" });
      } catch (error) {
        console.error("Error adding document:", error);
      }
    }
  };


  // Handle navigation
  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? feedbacks.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === feedbacks.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      aria-labelledby="feedback-heading"
    >
      <header className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
          <h2
            id="feedback-heading"
            className="text-4xl sm:text-5xl font-bold text-[#04083e] mb-4"
          >
            Some Feedback From Client
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            We are proud to share the positive feedback we have received from
            many of the families and individuals we supported during their
            difficult times.{" "}
            <button
              className="text-blue-700 underline"
              onClick={() => setShowModal(true)}
            >
              Share Your Experience
            </button>
          </p>
          <div className="flex items-center space-x-4">
            <button
              onClick={handlePrev}
              aria-label="Previous Feedback"
              className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center shadow-lg"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Feedback"
              className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center shadow-lg"
            >
              →
            </button>
          </div>
        </div>

        <div className="w-full lg:w-2/3 flex flex-col space-y-6 lg:space-y-0 lg:flex-row lg:space-x-6">
          {feedbacks.length > 0 && (
            <>
              <article
                className="bg-white rounded-lg p-6 flex-1 shadow-xl border border-gray-100"
                aria-label={`Feedback from ${feedbacks[currentIndex]?.name}`}
              >
                <p className="text-gray-700 text-lg mb-4">
                  {feedbacks[currentIndex]?.message}
                </p>
                <p className="font-bold text-[#04083e]">
                  {feedbacks[currentIndex]?.name}
                </p>
              </article>
              <article
                className="bg-white rounded-lg p-6 flex-1 shadow-xl border border-gray-100"
                aria-label={`Feedback from ${feedbacks[(currentIndex + 1) % feedbacks.length]?.name
                  }`}
              >
                <p className="text-gray-700 text-lg mb-4">
                  {feedbacks[(currentIndex + 1) % feedbacks.length]?.message}
                </p>
                <p className="font-bold text-[#04083e]">
                  {feedbacks[(currentIndex + 1) % feedbacks.length]?.name}
                </p>
              </article>
            </>
          )}
        </div>
      </header>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-lg font-bold mb-4">Share Your Feedback</h3>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-2 mb-4 rounded"
              value={newFeedback.name}
              onChange={(e) =>
                setNewFeedback({ ...newFeedback, name: e.target.value })
              }
            />
            <textarea
              placeholder="Your Feedback"
              className="w-full border p-2 mb-4 rounded"
              rows="4"
              value={newFeedback.message}
              onChange={(e) =>
                setNewFeedback({ ...newFeedback, message: e.target.value })
              }
            ></textarea>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-200 px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleAddFeedback}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeedbackSection;
