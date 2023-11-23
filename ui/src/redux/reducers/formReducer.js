import { UPDATE_FORM_DATA, UPDATE_CALORIE_DATA } from '../actions/formActions';

const initialState = {
    formData: {},
    calculatedCalories: 0
};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FORM_DATA:
            return {
                ...state,
                formData: action.payload
            };
        case UPDATE_CALORIE_DATA:
            return {
                ...state,
                calculatedCalories: action.payload
            };
        default:
            return state;
    }
};

export default formReducer;
