import express  from "express"; //ES module
import * as exMemberServices from '../services/exMemberServices/exMemberServices'

const router = express.Router();

router.get("/", (_req, res) => {
    res.send(exMemberServices.getExMember());
});

router.get("/:id", (req, res) => {
 const exMember = exMemberServices.findById(+req.params.id);
 return (exMember != null) ? res.send(exMember) : res.sendStatus(404)
}
);

export default router;
