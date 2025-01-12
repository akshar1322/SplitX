import { connectToDatabase } from '../lib/db';

// ADD feedback (Insert)
export const addFeedback = async (feedbackData) => {
  const db = await connectToDatabase();
  const collection = db.collection('feedbacks');
  const result = await collection.insertOne(feedbackData);
  console.log("Added Feedback:", result);
};

// FETCH all feedbacks
export const fetchAllFeedbacks = async () => {
  const db = await connectToDatabase();
  const collection = db.collection('feedbacks');
  const feedbacks = await collection.find({}).toArray();  // Fetch all feedbacks
  console.log("All Feedbacks:", feedbacks);
  return feedbacks;
};

// FETCH specific feedback by _id
export const fetchFeedbackById = async (id) => {
  const db = await connectToDatabase();
  const collection = db.collection('feedbacks');
  const feedback = await collection.findOne({ _id: new ObjectId(id) });  // Find by ObjectId
  console.log("Fetched Feedback:", feedback);
  return feedback;
};

// UPDATE feedback by _id
export const updateFeedback = async (id, updateData) => {
  const db = await connectToDatabase();
  const collection = db.collection('feedbacks');
  const result = await collection.updateOne(
    { _id: new ObjectId(id) },  // Filter by ObjectId
    { $set: updateData }        // Update fields
  );
  console.log("Updated Feedback:", result);
};

// USAGE EXAMPLES:

// 1. Adding feedback
const feedbackData = {
  customerName: "John Doe",
  projectName: "Website Redesign",
  projectURL: "https://example.com/website-redesign",
  workDescription: "Redesign of the company website with a modern, responsive layout.",
  startTime: new Date("2024-12-01T10:00:00Z"),
  endTime: new Date("2024-12-15T10:00:00Z"),
  feedbackMessage: "Great work! The website looks amazing and works flawlessly.",
  createdAt: new Date("2025-01-08T12:00:00Z"),
  permissionStatus: true,
  feedbackAttempts: 1
};

// Example of adding feedback
addFeedback(feedbackData);

// 2. Fetching all feedbacks
fetchAllFeedbacks();

// 3. Fetching a specific feedback by _id
const id = "60d5f7783c5d8c3d8d8f5b9d";  // Replace with actual ObjectId
fetchFeedbackById(id);

// 4. Updating feedback
const updateData = { feedbackMessage: "Updated feedback message!" };  // Example update
updateFeedback(id, updateData);
