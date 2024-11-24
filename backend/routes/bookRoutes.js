import { Router } from "express";
import {
  addNewBook,
  deleteBook,
  getAllBook,
  updateBook,
} from "../controller/bookController.js";

const router = Router();

// get all book
router.get("/", getAllBook);

// add new book
router.post("/", addNewBook);

//delete book
router.delete("/:id", deleteBook);

//update book
router.put("/:id", updateBook);

export default router;
