import { curry } from 'ramda'
import { distinctUntilChanged, map } from 'rxjs/operators'

/**
 * Query a property by callback function.
 *
 * @param {function} callback
 * @param {*} subject$
 * @return {*|null}
 */
const queryPropByCallback = function (callback, subject$) {
    return subject$.pipe(
        map(callback),
        distinctUntilChanged(),
    )
}

export default curry(queryPropByCallback)
