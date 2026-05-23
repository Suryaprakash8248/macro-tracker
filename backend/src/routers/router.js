import express from "express";
import { createMacros, deleteMacros, getMacros, getOneMacro, getThisUsersMacro, updateMacros } from "../controllers/macroController.js";
import { createUser, deleteUser, getOneUser, getUser, loginUser } from "../controllers/usersController.js";

const router = express.Router();

router.get("/",getMacros);
router.get("/users", getUser);
router.post("/createuser", createUser);
router.post("/login",loginUser);
router.get("/oneuser/:userId", getOneUser);
router.get("/user/:userId", getThisUsersMacro);
router.delete("/user/:id", deleteUser);
router.get("/:id",getOneMacro);
router.post("/",createMacros);
router.put("/:id",updateMacros);
router.delete("/:id",deleteMacros);

export default router;