import { useCallback } from 'react'

/**
 * The useRxDispatch hook.
 *
 * @param {*} subject$
 * @return {function}
 */
const useRxDispatch = function (subject$) {
    return useCallback(function (next) {
        subject$.next(next)
    }, [subject$])
}

export default useRxDispatch
