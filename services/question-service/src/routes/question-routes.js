import express from "express";

import {
  createQuestion,
  deleteQuestion,
  getAllQuestions,
  getQuestion,
  updateQuestion,
  
} from "../controllers/question-controller.js";

const questionRoutes = express.Router();

questionRoutes.get("/", getAllQuestions);

questionRoutes.post("/", createQuestion);

questionRoutes.get("/:id", getQuestion);

questionRoutes.patch("/:id", updateQuestion);

questionRoutes.delete("/:id", deleteQuestion);

export default questionRoutes;