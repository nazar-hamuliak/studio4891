/**
 * @param {Session} session
 * @param {Models} models
 * @param {Vars} vars
*/
exports.uploadPhoto = async (session, models, vars) => {
    let foo = models.takephoto.photo;
    await session.screen('takephoto');
};
/**
 * @param {Session} session
 * @param {Models} models
 * @param {Vars} vars
*/
exports.home = async (session, models, vars) => {
    await session.screen('loginloadingcircle');
};