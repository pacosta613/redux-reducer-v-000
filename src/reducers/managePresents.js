export function managePresents(state, action){

  switch (action.type) {
    case "INCREASE":
      return { numberOfPresents: numberOfPresents + 1 }
      break;
    default:

  }

}
