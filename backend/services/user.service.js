let service = {};
service.login = login;

async function login(){
    try {
        return true;
    } catch (err) {
        return Promise.reject({error: 'Unable to login. Try again later!'});
    }
}

module.exports = service;