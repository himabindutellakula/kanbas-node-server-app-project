import db from "../Database/index.js";
function AssignmentRoutes(app) {
    
    app.get("/api/courses/:cid/assignments", (req, res) => {
        const { cid } = req.params;
        const assignments = db.assignments
            .filter((a) => a.course === cid);
        res.send(assignments);
    });

    app.put("/api/assignments/:aid", (req, res) => {
        const { aid } = req.params;
        const assingnmentIndex = db.assignments.findIndex(
            (a) => a._id === aid);
        db.assignments[assingnmentIndex] = {
            ...db.assignments[assingnmentIndex],
            ...req.body
        };
        res.sendStatus(204);
    });

    app.delete("/api/assignments/:aid", (req, res) => {
        const { aid } = req.params;
        db.assignments = db.assignments.filter((a) => a._id !== aid);
        res.sendStatus(200);
    });

    app.post("/api/courses/:cid/assignments", (req, res) => {
        const { cid } = req.params;
        const newAssignment = {
            ...req.body,
            course: cid,
            _id: new Date().getTime().toString(),
        };
        db.assignments.push(newAssignment);
        res.send(newAssignment);
    });
}
export default AssignmentRoutes;