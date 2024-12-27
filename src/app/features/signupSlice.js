import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	selectedAccountType: '',
	signupData: {},
	registrationDetails: {},
	qualificationDetails: {
		certifications: [],
		degrees: [],
	},
};

const signupSlice = createSlice({
	name: 'signup',
	initialState,
	reducers: {
		setAccountType: (state, action) => {
			state.selectedAccountType = action.payload;
		},
		setFormData: (state, action) => {
			state.signupData = action.payload;
		},
		setRegistrationDetails: (state, action) => {
			state.registrationDetails = action.payload;
		},
		setQualifications: (state, action) => {
			console.log('Payload: ', action.payload);
			state.qualificationDetails = action.payload;
		},
		addCertification: (state, action) => {
			state.qualificationDetails.certifications.push(
				action.payload
			);
		},
		removeCertification: (state, action) => {
			state.qualificationDetails.certifications =
				state.qualificationDetails.certifications.filter(
					(cert, index) => index !== action.payload
				);
		},
		addDegree: (state, action) => {
			state.qualificationDetails.degrees.push(
				action.payload
			);
		},
		removeDegree: (state, action) => {
			state.qualificationDetails.degrees.splice(
				action.payload,
				1
			);
		},
	},
});

export const {
	setAccountType,
	setFormData,
	setRegistrationDetails,
	setQualifications,
	addCertification,
	removeCertification,
	addDegree,
	removeDegree,
} = signupSlice.actions;
export default signupSlice.reducer;

// Bridging Innovative Technology	Solutions
