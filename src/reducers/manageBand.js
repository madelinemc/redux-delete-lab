export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      let band = {id: Math.random(), name: action.name}
      return { ...state, bands: [...state.bands, band] }

    case 'DELETE_BAND':
      let bands = state.bands.filter(band => band.id !== action.id)
      return {bands}

    default:
      return state;
  }
};
