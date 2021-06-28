import { useEffect, useState } from 'react'
import { identity } from 'rxjs'

/**
 * The useRxQuery hook.
 *
 * @author Tomáš Havlas <tomas@havlas.me>
 * @version 0.1.0
 *
 * @param {*} subject$
 * @param {function} query
 * @param {*|null} initialState
 * @return {*|null}
 */
const useRxQuery = function (subject$, query = identity, initialState = null) {
    const [state, set] = useState(initialState)

    useEffect(function () {
        const subscription = query(subject$).subscribe(set)

        return function () {
            subscription.unsubscribe()
        }
    }, [query, set, subject$])

    return state
}

export default useRxQuery
