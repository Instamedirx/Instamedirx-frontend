import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	selectedAccountType: '',
	signupData: {},
};

const signupSlice = createSlice({
	name: 'signup',
	initialState,
	reducers: {
		setAccountType: (state, action) => {
			const accountType = action.payload;
			state.selectedAccountType = accountType;

			localStorage.setItem('selectedAccountType', accountType);

			if (accountType !== 'client') {
				state.registrationDetails = {};
				state.qualificationDetails = {
					certification: [],
					degrees: [],
				};
			}
		},
		setFormData: (state, action) => {
			state.signupData = action.payload;
		},
		setRegistrationDetails: (state, action) => {
			if (state.registrationDetails)
				state.registrationDetails = action.payload;
		},
		setQualifications: (state, action) => {
			if (state.qualificationDetails)
				state.qualificationDetails = action.payload;
		},
		addCertification: (state, action) => {
			if (state.qualificationDetails.certifications)
				state.qualificationDetails.certifications.push(
					action.payload
				);
		},
		removeCertification: (state, action) => {
			if (state.qualificationDetails)
				state.qualificationDetails.certifications =
					state.qualificationDetails.certifications.filter(
						(_, index) => index !== action.payload
					);
		},
		addDegree: (state, action) => {
			if (state.qualificationDetails)
				state.qualificationDetails.degrees.push(
					action.payload
				);
		},
		removeDegree: (state, action) => {
			if (state.qualificationDetails)
				state.qualificationDetails.degrees =
					state.qualificationDetails.degrees.filter(
						(_, index) => index !== action.payload
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
