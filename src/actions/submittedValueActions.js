export const SUBMIT_VALUE = 'SUBMIT_VALUE';

export function submitValue(input) {
    return {
        type: SUBMIT_VALUE,
        payload: {
            submittedValue: input
        }
    }
}