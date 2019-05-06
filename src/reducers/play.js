export const initialState = {
    isStarted: false,
    playTimes: 0,
};

const GAME_START = 'GAME_START'; //액션의 이름
const GAME_OVER = 'GAME_OVER'; //액션의 이름

const gameStartAction = {
    type: GAME_START,
    data: {

    }
}

const GameOverAction = {
    type: GAME_OVER,
    data: {

    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case gameStartAction: {
            return {
                ...state,
                isStarted: true,
                //playTimes: 
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
};

export default reducer;