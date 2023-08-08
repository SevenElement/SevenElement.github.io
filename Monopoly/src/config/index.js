import * as log from '../libs/log.js'
let config = {}

/**
 * 建立配置
 */
export function setUpConfig(){
    let alias = config.alias + '_CONFIG'
    if(!window[alias]){
        return Promise.reject(`缺少必要的 ${alias} <游戏参数>配置`)
    }

    return new Promise((resolve,reject) => {
        Object.assign(config,window[alias])
        resolve(config);
    })
}

/**
 *
 * @param {[type]} key   [description]
 * @param {[type]} value [description]
 */
export function setConfig(key,value){
    config[key] = value
}
/**
 * 获取config
 * @param  {[type]} key [description]
 * @return {[type]}     [description]
 */
export function getConfig (key){
    return key ? config[key] : config
}
