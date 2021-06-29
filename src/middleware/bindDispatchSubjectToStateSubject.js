import { map, withLatestFrom } from 'rxjs/operators'

/**
 * Bind a dispatch subject to a state subject.
 *
 * @author Tomáš Havlas <tomas@havlas.me>
 * @version 0.2.0
 * @since 0.2.0
 *
 * @param {*} dispatch$
 * @param {*} state$
 * @param {*} reduce
 * @return {function}
 */
function bindDispatchSubjectToStateSubject (dispatch$, state$, reduce) {
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
