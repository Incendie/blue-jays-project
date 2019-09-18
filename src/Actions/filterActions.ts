export function filterSelected(title: string, target: any) {
  return {
    type:
      title.toUpperCase() +
      "_FILTER_" +
      (target.checked ? "" : "DE") +
      "SELECTED",
    payload: {
      filterName: target.name.toLowerCase()
    }
  };
}
