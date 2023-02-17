import * as AuthApi from '../api/AuthRequest'

export const logIn = (formData, navigate) => async (dispatch) => {
    dispatch({ type: "AUTH_START" });
    try {
        const { data } = await AuthApi.logIn(formData);
        dispatch({ type: "AUTH_SUCCESS", data: data });
        navigate("../home", { replace: true });
    } catch (error) {
        console.log(error);
        dispatch({ type: "AUTH_FAIL" });
    }
};
export const signUp = (formData) => async (dispatch) => {

    dispatch({ type: "AUTH_START" })

    try {
        const { data } = await AuthApi.signUp(formData)
        console.log(data)
        dispatch({ type: "AUTH_SUCCESS", data: data.user })
    } catch (error) {
        console.log(error)
        dispatch({ type: "AUTH_FAIL" })
    }
}

export const logout = () => async (dispatch) => {
    dispatch({ type: 'LOG_OUT' })
}