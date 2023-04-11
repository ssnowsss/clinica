import express from "express"
import { updatePatient,addVisit, addPatient, getPatientByCode, getPatientByName, getAllPatient} from "../controllers/patient.js"
import { cookieCheck } from "../cookie.js"
const router = express.Router()


// updatePatient
router.put("/:id", cookieCheck, updatePatient)
// addPatient
router.post("/add", cookieCheck, addPatient)
// addPatient
router.put("/addVisit/:id", cookieCheck, addVisit)

// getPatientcode
router.get("/find/code", getPatientByCode)
// getPatientname
router.get("/find/name", getPatientByName)
// getAllPatient
router.get("/", getAllPatient)





export default router