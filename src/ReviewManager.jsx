import { useState, useEffect } from "react";
import axios from "axios";

const ReviewManager = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({ customerName: "", rating: "", comment: "" });
  const [loading, setLoading] = useState(false);
  const [editingReview, setEditingReview] = useState(null); // Track editing review

  // Fetch reviews
  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const res = await axios.get("https://job-backend-spwb.onrender.com/api/reviews");
      setReviews(res.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit or Update review
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (editingReview) {
        // Update review
        await axios.put(`https://job-backend-spwb.onrender.com/api/reviews/${editingReview._id}`, formData);
        setEditingReview(null);
      } else {
        // Add new review
        await axios.post("https://job-backend-spwb.onrender.com/api/reviews", formData);
      }
      fetchReviews();
      setFormData({ customerName: "", rating: "", comment: "" }); // Reset form
    } catch (error) {
      console.error("Error submitting review:", error);
    }
    setLoading(false);
  };

  // Edit review
  const handleEdit = (review) => {
    setFormData(review);
    setEditingReview(review);
  };

  // Delete review
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this review?")) return;
    try {
      await axios.delete(`https://job-backend-spwb.onrender.com/api/reviews/${id}`);
      fetchReviews();
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-semibold text-center text-gray-800  mb-6">
        Customer Reviews
      </h2>

      {/* Form */}
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="customerName"
            placeholder="Customer Name"
            value={formData.customerName}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          >
            <option value="">Select Rating</option>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num} Star
              </option>
            ))}
          </select>
          <textarea
            name="comment"
            placeholder="Customer Review"
            value={formData.comment}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition"
            disabled={loading}
          >
            {loading ? "Submitting..." : editingReview ? "Update Review" : "Submit Review"}
          </button>
        </form>
      </div>

      {/* Review Table */}
      <div className="mt-8 overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Rating</th>
              <th className="border p-2">Comment</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviews.length > 0 ? (
              reviews.map((review) => (
                <tr key={review._id} className="text-center">
                  <td className="border p-2">{review.customerName}</td>
                  <td className="border p-2">{review.rating} ⭐</td>
                  <td className="border p-2">{review.comment}</td>
                  <td className="border p-2 space-x-2">
                    <button
                      onClick={() => handleEdit(review)}
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(review._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="border p-4 text-center text-gray-500">
                  No Reviews Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReviewManager;
