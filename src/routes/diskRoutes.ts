import express  from "express"; //ES module
import * as exMemberServices from '../services/diskServices/diskServices'

const router = express.Router();

router.get("/", (_req, res) => {
    res.send(exMemberServices.getDisk());
});

router.get("/:id", (req, res) => {
 const disk = exMemberServices.findById(+req.params.id);
 return (disk != null) ? res.send(disk) : res.sendStatus(404)
}
);

export default router;
