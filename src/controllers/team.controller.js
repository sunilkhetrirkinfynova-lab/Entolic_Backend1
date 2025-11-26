import Team from "../models/Team.js";

// GET all team members
export const getTeamMembers = async (req, res) => {
    try {
        const members = await Team.find().sort({ priority: -1 });
        res.json(members);
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
};

// POST create new member
export const createTeamMember = async (req, res) => {
    try {
        const newMember = new Team(req.body);
        await newMember.save();
        res.status(201).json(newMember);
    } catch (err) {
        res.status(400).json({ error: "Invalid data" });
    }
};

// PUT update member
export const updateTeamMember = async (req, res) => {
    try {
        const updated = await Team.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updated) return res.status(404).json({ error: "Not found" });

        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: "Invalid request" });
    }
};

// DELETE remove member
export const deleteTeamMember = async (req, res) => {
    try {
        const deleted = await Team.findByIdAndDelete(req.params.id);

        if (!deleted) return res.status(404).json({ error: "Not found" });

        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
};
