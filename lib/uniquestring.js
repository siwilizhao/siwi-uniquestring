/**
 * @author [siwi]
 * @email [siwilizhao@siwi.me]
 * @create date 2018-03-29 02:39:12
 * @modify date 2018-03-29 02:39:12
 * @desc [生成指定长度的随机字符串]
*/
const crypto = require('crypto')
let instance = null
class UniqueString {
    constructor() {
        if (!instance) {
            instance = this
        }
        return instance
    }
    
    /**
     * 生成指定长度的随机字符串
     * @param {*} len 
     */
    async random (len) {
        if (typeof len !== 'number') {
            len = 32
        }
        return crypto.randomBytes(Math.ceil(len / 2)).toString('hex').slice(0, len)
    }
}

module.exports = new UniqueString()