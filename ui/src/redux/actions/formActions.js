export const UPDATE_FORM_DATA = 'UPDATE_FORM_DATA';
export const UPDATE_CALORIE_DATA = 'UPDATE_CALORIE_DATA';

export const updateFormData = (formData) => {
    return {
        type: UPDATE_FORM_DATA,
        payload: formData
    };

};
export const updateCalorieData = (calorieData) => {
    return {
        type: UPDATE_CALORIE_DATA,
        payload: calorieData
    };
};