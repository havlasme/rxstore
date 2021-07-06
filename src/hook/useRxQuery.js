import { useEffect, useState } from 'react'
import { identity } from 'rxjs'

/**
 * The useRxQuery hook.
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
