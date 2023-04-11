import Patient from "../models/patient.js"
import bcrypt from "bcrypt"

export const updatePatient = async (req, res) => {
    try {
        const updatePatient = await Patient.findByIdAndUpdate(req.params.id, { $set: { ...req.body } }, { new: true })
        return res.status(200).json(updatePatient)
    } catch (err) {
        return res.status(500).json(err)
    }
}
export const addVisit = async (req, res) => {
    try {
        const newVisit = await Patient.findByIdAndUpdate(req.params.id, { $push: { allVisits: req.body.visit } }, {new: true})
        return res.status(200).json(newVisit)
    } catch (err) {
        return res.status(500).json(err)
    }
}
export const addPatient = async (req, res) => {
    const newPatient = new Patient({
        addedBy: req.name, ...req.body, firstVisit: Date.now(), allVisits: [Date.now()]
    })
    try {
        await newPatient.save()
        return res.status(200).json("Patient added successfully")
    } catch (err) {
        return res.status(500).json(err)
    }
}
export const getPatientByCode = async (req, res) => {
    try {
        const pa = await Patient.findOne({ code: req.query.code })
        return res.status(200).json(pa)
    } catch (err) {
        console.log(err);
        return res.status(500).json(err)
    }
}
export const getPatientByName = async (req, res) => {
    try {
        const pa = await Patient.findOne({ name: { $regex: req.query.name, $options: "i" } })
        return res.status(200).json(pa)
    } catch (err) {
        console.log(err);
        return res.status(500).json(err)
    }
}
export const getAllPatient = async (req, res) => {
    try {
        const all = await Patient.find({})
        return res.status(200).json(all)
    } catch (err) {
        return res.status(500).json(err)
    }
}

