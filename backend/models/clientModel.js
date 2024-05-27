import mongoose from 'mongoose';

const clientSchema = mongoose.Schema({
	submissionDate: { type: Date },
	petName: { type: String },
	species: { type: String },
	breed: { type: String },
	petGender: { type: String },
	petAge: { type: Number },
	petWeight: { type: Number },
	petClinicName: { type: String },
	petVet: { type: String },
	petIfCancerDetails: { type: String },
	mailingAddress: { type: String },
	petConditions: { type: String },
	intakeActionRequested: { type: String },
	petFoodAllergy: { type: String },
	petCurrentMedications: { type: String },
	benefitsDesired: { type: String },
	petPhoto: { type: String },
	firstName: { type: String },
	lastName: { type: String },
	eMail: { type: String },
	phoneNumber: { type: String },
	paymentMethodChoice: { type: String },
	howReferred: { type: String },
	petImage: { type: String },
});

const Client = mongoose.model('Client', clientSchema);

export default Client;
