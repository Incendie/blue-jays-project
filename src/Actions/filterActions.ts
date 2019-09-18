export function filterSubmitted(target: string) {
  return {
    type: 'FILTER_SUBMITTED',
    payload: { target }
  };
}
