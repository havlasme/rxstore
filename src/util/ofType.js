import { anyPass, identity, map, pipe, propEq, unapply } from 'ramda'
import { filter } from 'rxjs/operators'

/**
 * The ofType operator.
 *
 * @param {string} type
 * @return {function}
 */
export default pipe(
    unapply(identity),
    map(propEq('type')),
    anyPass,
    filter,
)
