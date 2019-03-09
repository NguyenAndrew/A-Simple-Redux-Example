export const SUBMIT_VALUE = 'submittedValue: submitValue'

export function submitValue(input) {
    return {
        type: SUBMIT_VALUE,
        payload: {
            submittedValue: input
        }
    }
}