import { omit } from 'ramda'

/**
 * Rehydrate a rxstore state subject from the local storage.
 *
 * @author Tomáš Havlas <tomas@havlas.me>
 * @version 0.3.0
 *
 * @param {string} key
 * @param {*} defaultState
 * @param {{ migrate: function }}
 * @return {*}
 */
const rehydrateStoreStateSubject = function (key, defaultState = {}, { migrate = omit(['_persist']) } = {}) {
    return {
        ...defaultState,
        ...migrate(JSON.parse(localStorage.getItem(`rxstore:${key}`) || '{}')),
    }
}

export default rehydrateStoreStateSubject
