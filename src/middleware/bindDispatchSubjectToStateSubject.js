import { map, withLatestFrom } from 'rxjs/operators'

/**
 * Bind a dispatch subject to a state subject.
 *
 * @param {*} dispatch$
 * @param {*} state$
 * @param {*} reduce
 * @return {function}
 */
const bindDispatchSubjectToStateSubject = function (dispatch$, state$, reduce) {
    return function () {
        dispatch$.pipe(
            withLatestFrom(state$),
            map(function ([action, state]) {
                if (Object.prototype.hasOwnProperty.call(reduce, action.type)) {
                    return reduce[action.type](state, action)
                }
                return state
            }),
        ).subscribe(function (next) {
            state$.next(next)
        })
    }
}

export default bindDispatchSubjectToStateSubject
