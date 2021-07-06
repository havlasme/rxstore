import { curry, pick } from 'ramda'
import { distinctUntilChanged, map } from 'rxjs/operators'

/**
 * Query a property set by name.
 *
 * @param {string[]} propName
 * @param {*} subject$
 * @return {*}
 */
const queryPropSetByName = function (propName, subject$) {
    return subject$.pipe(
        map(pick(propName)),
        distinctUntilChanged(),
    )
}

export default curry(queryPropSetByName)
