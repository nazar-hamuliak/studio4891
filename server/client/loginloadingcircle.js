/**
 * @param {Session} session
 * @param {Models} models
 * @param {Vars} vars
*/
exports.login = async (session, models, vars) => {
    await session.screen('takephoto');
};