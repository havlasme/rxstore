/**
 * Rehydrate a rxstore state subject from the local storage.
 *
 * @author Tomáš Havlas <tomas@havlas.me>
 * @version 0.2.2
 *
 * @param {string} key
 * @param {*} defaultState
 * @return {*}
 */
const rehydrateStoreStateSubject = function (key, defaultState = {}) {
    return {
        ...defaultState,
        ...JSON.parse(localStorage.getItem(`rxstore:${key}`) || '{}'),
    }
}

export default rehydrateStoreStateSubject
