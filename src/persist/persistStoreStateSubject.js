import { equals, identity, omit, pick } from 'ramda'
import { distinctUntilChanged, map, skip } from 'rxjs/operators'

/**
 * Persist a rxstore state subject in the local storage.
 *
 * @author Tomáš Havlas <tomas@havlas.me>
 * @version 0.3.0
 *
 * @param {string} key
 * @param {*} subject$
 * @param {{ blacklist: string[], version: string|null, whitelist: string[] }} options
 * @return {*}
 */
const persistStoreStateSubject = function (key, subject$, { blacklist, version = null, whitelist } = {}) {
    subject$.pipe(
        skip(1),
        map(whitelist ? pick(whitelist) : identity),
        map(blacklist ? omit(blacklist) : identity),
        distinctUntilChanged(equals),
    ).subscribe(function (state) {
        localStorage.setItem(`rxstore:${key}`, JSON.stringify({ ...state, _persist: { version } }))
    })

    return subject$
}

export default persistStoreStateSubject
