// import axios from "axios";

// const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

// // Get token from local storage
// const getAuthHeaders = () => {
//     const token = localStorage.getItem("token");
//     return { Authorization: `Bearer ${token}` };
// };

// // Fetch all users
// export const fetchUsers = async () => {
//     try {
//         const response = await axios.get(`${API_BASE_URL}/get_users`, {
//             headers: getAuthHeaders()
//         });
//         return response.data;
//     } catch (error) {
//         console.error("Error fetching users:", error);
//         throw error;
//     }
// };

// // Fetch members of a specific project
// export const fetchProjectMembers = async (project_id) => {
//     try {
//         const response = await axios.get(`${API_BASE_URL}/project_members/${project_id}`, {
//             headers: getAuthHeaders()
//         });
//         return response.data;
//     } catch (error) {
//         console.error("Error fetching project members:", error);
//         throw error;
//     }
// };

// export default {
//     fetchUsers,
//     fetchProjectMembers
// };