import { useCallback } from 'react'
import useRxDispatch from './useRxDispatch'

/**
 * The useRxCallback hook.
 *
 * @author Tomáš Havlas <tomas@havlas.me>
 * @version 0.1.0
 *
 * @param {*} subject$
 * @param {function} callback
 * @return {function}
 */
const useRxCallback = function (subject$, callback) {
    const dispatch = useRxDispatch(subject$)

    return useCallback(function (...rest) {
        dispatch(callback(...rest))
    }, [callback, dispatch])
}

export default useRxCallback
