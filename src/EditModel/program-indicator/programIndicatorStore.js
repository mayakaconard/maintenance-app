import Store from 'd2-ui/lib/store/Store';
import { equals, some, isObject } from 'lodash/fp';

// isValidState :: StoreState -> Boolean
function isValidState(state) {
    console.log(state);
    const acceptedKeys = ['programIndicator'];

    return Object
        .keys(state)
        .every(key => some(equals(key), acceptedKeys));
}

/**
 * Contains all the event related d2 models.
 * We can't store these in the redux store since they are mutable objects. This store works similar to the Redux store
 * except it won't be able to do the shallow optimizations that the Redux store allows.
 *
 * The store will contain all the d2 related models, in a normalized fashion.
 *
 * The store contains the following keys
 * programIndicator: The event program itself.
 *      - Loaded using the filter id:eq:VBqh0ynB2wv
 */
const programIndicatorStore = Store.create();

const storeSetState = programIndicatorStore.setState.bind(programIndicatorStore);

programIndicatorStore.setState = (newState) => {
    if (!isObject(newState)) {
        throw new Error('You are attempting to set a state that is a non object');
    }

    if (!isValidState(newState)) {
        throw new Error('You are attempting to set an invalid state onto the programIndicatorStore');
    }

    storeSetState({
        ...programIndicatorStore.getState(),
        ...newState,
    });
};

export default programIndicatorStore;
