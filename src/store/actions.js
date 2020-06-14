import history from '../Routes/history';

export const profile = () => {
    return dispatch => {
        history.push('/profile');
    }
}