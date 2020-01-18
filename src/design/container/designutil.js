import *as QRUtil from "../../runtime/framecore/uiframe/frameutils"
import UIModel from "../component/dragcomponent/uimodel.json"

let designData = undefined;
initModel();

export function getDragComponent(designData = getDefaultModel()) {
    let packageUI = {
        type: "Drag", id: "drag-", props: {
            style: {
                height: "max-content", width: "max-content", backgroundColor: '#fff', position: 'relative'
            },
            onMove: (offet) => {
                console.log("拖拽元素当前位置：", offet);
            }
        }
    }
    return QRUtil.getAllChildren(packageUI, designData.children);
}

export function saveDesignData(designKey, designData){
    designData[designKey] = designData;
}

export function getDesignData(designKey = "design-json"){
    return designData[designKey];
}

export function getDefaultModel(){
    return UIModel;
}

export function initModel(){
    if(designData){
        return;
    }
    designData = {"design-json": getDefaultModel()};
}

export function findNodeById(data, id){
    let result;
    if(!data){
        return result;
    }
    if(data && data.id === id){
        return data;
    }
    if(data.children){
        data.children.some(item => {
            result = findNodeById(item, id);
            if(result){
                return true;
            }
        });
    }
    return result;
}
