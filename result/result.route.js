const { createresult, getresult,updateresult,deleteresult} = require("./result.controller.js");
const router = require("express").Router();

router.post("/",createresult);
router.get("/", getresult);
router.patch("/", updateresult);
router.delete("/", deleteresult);

module.exports = router;