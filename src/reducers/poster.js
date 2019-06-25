const initialState = {
    isReady: false,
    items: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_POSTER':
            return {
                ...state,
                items: action.payload,
                isReady: true,
            };
        default:
            return state;
    }
}

