module.exports = [
    {
        register: require('yar'),
        options: {
            maxCookieSize: 0,
            cookieOptions: {
                password: 'change_this',
                isSecure: false,
            },
            cache: {
                expiresIn: 3600000,
                cache: 'redis'
            }
        }
    }];