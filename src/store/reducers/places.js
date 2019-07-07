import { ADD_PLACE, DELETE_PLACE } from "../actions/actionTypes";

const initialState = {
  places: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random().toString(), //it throu warning because it expect string we send number, to convert number to string i added toString() method.
          name: action.placeName, //placeName from action createor that is in actions/places.js
          image: {
            uri: "https://www.gstatic.com/webp/gallery3/1.png" //when using external image its important to give height and width in style.
          }
        })
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== action.placeKey;
        })
      };
    default:
      return state;
  }
};

export default reducer;
