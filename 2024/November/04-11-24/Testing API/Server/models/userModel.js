import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// Virtual field for full name
userSchema.virtual('fullName').get(function() {
    return `${this.fName} ${this.lName}`;
});

userSchema.virtual('userJokes', {
    ref: 'Joke',
    localField: '_id',
    foreignField: 'owner',
});

// Ensure virtuals are included in JSON and Object outputs
userSchema.set('toObject', { virtuals: true });
userSchema.set('toJSON', { virtuals: true });

export default mongoose.model("User", userSchema);