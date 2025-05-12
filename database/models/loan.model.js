import mongoose, { Schema as _Schema, model } from 'mongoose';
const { Schema } = mongoose;

// Loan Schema 
const LoanSchema = new Schema({
    amount: {
        type: Number,
        required: true
    },
    emiDuration: {
        type: Number,
        required: true
    },
    startDate: {
        type: Date,
        default: Date.now(),
        required: true
    },
    expiryDate: {
        type: Date,
        required: true,
    },
    fixed: {
        type: Boolean,
        required: true
    },
    payableAmount: {
        type: Number,
        required: true
    },
    interest: {
        type: Number,
        required: true
    },
    owner: {
        type: _Schema.Types.ObjectId,
        required: true,
        ref: "User"
    }
}, {
    timestamps: true
});


const Loan = model("Loan", LoanSchema);

export default Loan