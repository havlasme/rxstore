import { curry, path } from 'ramda'
import { distinctUntilChanged, map } from 'rxjs/operators'

/**
 * Query a property by path.
 *
 * @param {string[]} pathName
 * @param {*} subject$
 * @return {*|null}
 */
const queryPropByPath = function (pathName, subject$) {
    return subject$.pipe(
        map(path(pathName)),
        distinctUntilChanged(),
    )
}

export default curry(queryPropByPath)
