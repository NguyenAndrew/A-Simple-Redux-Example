export default function inputReducer(state = null, action) {
    switch (action.type) {
        case 'changeState':
            return action.payload.input;
        default:
            return state;
    }
}