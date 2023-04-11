import mongoose from "mongoose"
import autoIncrement  from "mongoose-auto-increment"

const connection = mongoose.createConnection("mongodb+srv://eslam:eslam@cluster0.pzqrseq.mongodb.net/clinica?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
autoIncrement.initialize(connection);
const PatientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    doctor: {
        type: String,
        required: true,
    },
    totalPrice: {
        type: String,
    },
    wasPaid: {
        type: String,
    },
    remaining: {
        type: String,
    },
    addedBy: {
        type: String,
        required: true,
    },
    // code: {
    //     type: String,
    //     required: true,
    // },
    smoking: {
        type: Boolean,
        required: true,
    },
    phoneNumber: {
        type: String,
    },
    homeNumber: {
        type: String,
    },
    firstVisit: {
        type: Date,
        required: true,
    },
    email: {
        type: String,
    },
    allVisits: {
        type: [Date],
        default: []
    },
}, { timestamps: true })
PatientSchema.plugin(autoIncrement.plugin, { model: 'Patient', field: 'code' });
const Patient = connection.model('Patient', PatientSchema);

export default mongoose.model("Patient", PatientSchema)