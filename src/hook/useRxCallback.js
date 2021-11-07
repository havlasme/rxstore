import { useCallback } from 'react'
import useRxDispatch from './useRxDispatch'

/**
 * The useRxCallback hook.
 *
 * @param {*} subject$
 * @param {function} callback
 * @param {*} dependency
 * @return {function}
 */
const useRxCallback = function (subject$, callback, dependency = []) {
    const dispatch = useRxDispatch(subject$)

    return useCallback(function (...rest) {
        dispatch(callback(...rest))
    }, [...dependency, dispatch])
}

export default useRxCallback
