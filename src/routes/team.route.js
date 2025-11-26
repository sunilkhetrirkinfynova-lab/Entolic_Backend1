import express from "express";
import { 
    getTeamMembers,
    createTeamMember,
    updateTeamMember,
    deleteTeamMember
} from "../controllers/team.controller.js";

const router = express.Router();

// Full API paths
router.get("/team-members", getTeamMembers);
router.post("/team-members", createTeamMember);
router.put("/team-members/:id", updateTeamMember);
router.delete("/team-members/:id", deleteTeamMember);

export default router;
