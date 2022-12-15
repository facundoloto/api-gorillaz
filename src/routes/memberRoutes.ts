import express  from "express"; //ES module
import * as memberServices from '../services/memberServices/memberServices'

const router = express.Router();

router.get("/", (_req, res) => {
    res.send(memberServices.getMember());
});

router.get("/:id", (req, res) => {
 const member = memberServices.findById(+req.params.id);
 return (member != null) ? res.send(member) : res.sendStatus(404)
}
);

export default router;
