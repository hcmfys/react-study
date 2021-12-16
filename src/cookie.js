/**
 * @description 格式化cookie选项
 * @param Obj
 */
export function formatCookie(Obj = {}) {
    const objKeys = Object.keys(Obj);
    if (objKeys.length < 1) return '';

    let str = '';

    // eslint-disable-next-line array-callback-return
    objKeys.map(item => {
        const value = Obj[item];
        value && (str += `;${item}=${value}`);
    });
    return str;
}

/**
 * @description js原生设置cookie
 * @param Obj
 * @param {String} Obj.name 给你要设置的cookie起个名字(key)
 * @param {String} Obj.value cookie的具体内容(value)
 * @param {String} Obj.maxAge 设置cookie的相对过期时间，单位：s
 * @param {String} Obj.expire 设置cookie的绝对过期时间(国际标准时间)，单位：s
 * @param {Boolean} Obj.secure 设置cookie是否只通过https传输
 */
export function setCookie(Obj = {}) {
    if (!Obj.name) return '';

    let cookieStr = `${Obj.name}=${Obj.value}` + formatCookie({
        'path': Obj.path || '',
        'max-age': Obj.maxAge || 0,
        'expires': Obj.expire || ''
    });

    Obj.secure === true && (cookieStr += ';secure');
    document.cookie = cookieStr;
}

/**
 * @description js原生获取指定cookie
 * @param name 获取指定cookie
 */
export function getCookie(name) {
    const cookies = document.cookie;
    if (!cookies) return '';

    const oCookie = {};
    const cookieArr = cookies.split(';');
    for (let item of cookieArr) {
        const index = item.indexOf('=');
        oCookie[item.slice(0, index).trim()] = item.slice(index + 1);
    }

    return oCookie[name];
}

/**
 * @description js原生删除指定cookie
 * @param name
 */
export function removeCookie(name) {
    setCookie({
        name,
        value: '',
        maxAge: -1
    });
}



/**
// maxAge调用示例
setCookie({
    name: 'test',
    value: 'test',
    maxAge: 10 // 单位s
});

// expire调用示例
let ex = new Date();
ex.setSeconds(100);
setCookie({
    name: 'test',
    value: 'test',
    expire: ex.toUTCString()
});

// 仅https传输调用示例
setCookie({
    name: 'test',
    value: 'test',
    maxAge: 10, // 单位s
    secure: true
});

 */