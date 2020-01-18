import React from "react"
import * as ComponentList from "../component"
import testJson from "../../bussiness/test/testui.json"

export function getAllChildren(packageUI, children = testJson.children){
    let allChildren = [];
    if(!children || children.length === 0){
        return allChildren;
    }
    if(children && children.length ===1 && children[0].type === "text"){
        return children[0].props.text;
    }
    children.forEach(item => {
        let newEle = React.createElement(getComponent(item.type), {id:item.id ,...item.props}, getAllChildren(packageUI, item.children));
        if(packageUI){
            newEle = React.createElement(getComponent(packageUI.type), {id:packageUI.id + item.id,...item.props, ...packageUI.props},  newEle);
        }
        allChildren.push(newEle);
    });
    return allChildren;
}

export function getComponent(name){
    if(!Object.keys(ComponentList).includes(name)){
        return name;
    }
    return ComponentList[name];
}