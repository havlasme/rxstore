import semver from 'semver'

/**
 * Create rxstore state migration.
 *
 * @param {*} migration
 * @return {function}
 */
const createStateMigration = function (migration) {
    return function (state) {
        return Object.entries(migration).sort(function ([a], [b]) {
            if (semver.gt(a, b)) return 1
            if (semver.lt(a, b)) return -1
            return 0
        }).reduce(function (state, [version, migrate]) {
            if (!semver.gt(version, state?._persist?.version || '0.0.0')) return state
            return migrate(state)
        }, state)
    }
}

export default createStateMigration
