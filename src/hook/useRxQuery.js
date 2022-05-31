import { useCallback, useEffect, useState } from 'react'
import { identity } from 'rxjs'

/**
 * The useRxQuery hook.
 *
 * @param {*} subject$
 * @param {function} query
 * @param {*|null} initialState
 * @param {*} rest
 * @return {*|null}
 */
const useRxQuery = function (subject$, query = identity, initialState = null, ...rest) {
    const [state, set] = useState(initialState)

    const queryProxy = useCallback(function (subject$) {
        return query(...rest, subject$)
    }, [query, ...rest])

    useEffect(function () {
        const subscription = queryProxy(subject$).subscribe(set)

        return function () {
            subscription.unsubscribe()
        }
    }, [queryProxy, set, subject$])

    return state
}

export default useRxQuery
