import express from "express";
import {
  authUser,
  deleteUser,
  getUserProfile,
  getUsers,
  registerUser,
  updateUserProfile,
  getUserById,
  updateUser,
} from "../controllers/userController.js";
import { checkAdmin, protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").post(registerUser).get(protect, checkAdmin, getUsers);
router.post("/login", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route("/:id")
  .delete(protect, checkAdmin, deleteUser)
  .get(protect, checkAdmin, getUserById)
  .put(protect, checkAdmin, updateUser);

export default router;
