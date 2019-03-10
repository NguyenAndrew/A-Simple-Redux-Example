export const SUBMIT_VALUE = 'SUBMIT_VALUE';

// The function, submitValue, is an 'action creator'
// The return value is an 'action'
export function submitValue(input) {
    return {
        type: SUBMIT_VALUE,
        payload: {
            submittedValue: input
        }
    }
}