import { useCallback } from 'react'
import useRxDispatch from './useRxDispatch'

/**
 * The useRxCallback hook.
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
