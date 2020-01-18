/**
 * 获取元素的top位置
 * @param {元素id} id 
 */
export function getElementTop(id) {
    let element = document.getElementById(id);
    var actTop = element.offsetTop;
    var current = element.offsetParent;
    while(current !== null){
        actTop += current.offsetTop;
        current = current.offsetParent;
    }
    return actTop;
}

/**
 * 获取元素的left位置
 * @param {元素} id 
 */
export function getElementLeft(id) {
    let element = document.getElementById(id);
    var actLeft = element.offsetLeft;
    var current = element.offsetParent;
    while(current !== null){
        actLeft += current.offsetLeft;
        current = current.offsetParent;
    }
    return actLeft;
}