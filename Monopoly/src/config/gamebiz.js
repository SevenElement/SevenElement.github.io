window.MONOPOLY_BIZ = {
    init: () => {
        return Promise.resolve()
    },
    lottery: () => {
        return new Promise( ( resolve, reject ) => {
            setTimeout(() => {
                resolve(Math.floor(Math.random() * 6) + 1)
            },1500 + Math.floor(Math.random() * 1500))
        })
        // return Promise.resolve(Math.floor(Math.random() * 6) + 1)
        // return Promise.resolve(1)
    },
    stop: (prizeId) => {

        switch (prizeId) {
            case 'prize1':
                alert(`获得奖品：饿了么大礼包`)
                break;
            case 'prize2':
                alert(`获得奖品：美团大礼包`)
                break;
            case 'prize3':
                alert(`获得奖品：阴阳师大礼包`)
                break;
            default:

        }
        return Promise.resolve()
    },
    destroy: () => {
        return Promise.resolve()
    }
}
