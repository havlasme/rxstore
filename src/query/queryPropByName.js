import { curry, prop } from 'ramda'
import { distinctUntilChanged, map } from 'rxjs/operators'

/**
 * Query a property by name.
 *
 * @param {string} propName
 * @param {*} subject$
 * @return {*|null}
 */
const queryPropByName = function (propName, subject$) {
    return subject$.pipe(
        map(prop(propName)),
        distinctUntilChanged(),
    )
}

export default curry(queryPropByName)
