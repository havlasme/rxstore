import { identity } from 'rxjs'
import useRxDispatch from './useRxDispatch'
import useRxQuery from './useRxQuery'

/**
 * The useRxState hook.
 *
 * @param {*} subject$
 * @param {*} initialState
 * @param {function} query
 * @return {[*, function]}
 */
const useRxState = function (subject$, initialState, query = identity) {
    const state = useRxQuery(subject$, query, initialState)
    const dispatch = useRxDispatch(subject$)

    return [state, dispatch]
}

export default useRxState
