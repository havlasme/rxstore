import { useCallback, useEffect, useState } from 'react'

/**
 * The useRxState hook.
 *
 * @param {*} subject$
 * @param {*} initialValue
 * @return {[*, function]}
 */
const useRxState = function (subject$, initialValue) {
    const [state, set] = useState(initialValue)

    const dispatch = useCallback(function (state) {
        subject$.next(state)
    }, [subject$])

    useEffect(function () {
        const subscription = subject$.subscribe(set)

        return function () {
            subscription.unsubscribe()
        }
    }, [set, subject$])

    return [state, dispatch]
}

export default useRxState
