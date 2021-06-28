/**
 * Rehydrate a rxstore state subject from the local storage.
 *
 * @author Tomáš Havlas <tomas@havlas.me>
 * @version 0.1.0
 *
 * @param {string} key
 * @param {*} defaultState
 * @return {*}
 */
function rehydrateStoreStateSubject (key, defaultState = {}) {
    return {
        ...defaultState,
        ...JSON.parse(localStorage.getItem(`rxstore:${key}`) || {}),
    }
}

export default rehydrateStoreStateSubject
