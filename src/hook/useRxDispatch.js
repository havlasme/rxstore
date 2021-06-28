import { useCallback } from 'react'

/**
 * The useRxDispatch hook.
 *
 * @author Tomáš Havlas <tomas@havlas.me>
 * @version 0.1.0
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
