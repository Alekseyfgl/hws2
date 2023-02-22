import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

const sortByName = (arr: UserType[], type: 'up' | 'down'): UserType[] => {
    if (type === 'up') {
        return [...arr].sort((a, b) => a.name > b.name ? 1 : -1);
    } else if (type === 'down') {
        return [...arr].sort((a, b) => a.name < b.name ? 1 : -1);
    } else {
        return [...arr]
    }
}

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            return sortByName(state, action.payload)
        }
        case 'check': {
            return [...state].filter(u => u.age > action.payload)
        }
        default:
            return state
    }
}
