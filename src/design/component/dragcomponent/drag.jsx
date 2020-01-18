
import React from 'react'
import * as QRUtil  from "../../../utils/qrutil"
 
const addEvent = (el, event, handler) => {
	if (!el) return;
	if (el.attachEvent) {
	  	el.attachEvent('on' + event, handler);
	} else if (el.addEventListener) {
	  	el.addEventListener(event, handler, false);
	} else {
	  	el['on' + event] = handler;
	}
  };
  
const removeEvent = (el, event, handler) => {
	if (!el) return;
	if (el.detachEvent) {
	  	el.detachEvent('on' + event, handler);
	} else if (el.removeEventListener) {
	  	el.removeEventListener(event, handler, false);
	} else {
	  	el['on' + event] = null;
	}
};
 
/*拖拽组件*/
class Drag extends React.Component {
	constructor() {
		super();
		this.state = {
			/*定义两个值用来存放当前元素的left和top值*/
			needX: 0,
			needY: 0,
		}
	}
	/*定义鼠标下落事件*/
	fnDown = (e) => {
		if(!this.defaultX || ! this.defaultY){
			this.defaultX = QRUtil.getElementLeft(this.props.id);
			this.defaultY = QRUtil.getElementTop(this.props.id);
		}
		/*事件源对象兼容*/
		// /*定义鼠标移动事件*/
		addEvent(document, 'mousemove', this.fnMove);
		// /*定义鼠标抬起事件*/
		addEvent(document, 'mouseup', this.fnUp);
	}
	/*定义鼠标移动事件*/
	fnMove = (e) => {
		/*事件兼容*/
		const event = e || window.event;
		/*事件源对象兼容*/
		this.setState({
			needX: event.clientX - this.defaultX,
			needY: event.clientY - this.defaultY,
		});
		this.props.onMove({offsetX: this.state.needX, offsetY: this.state.needY});
	}
	fnUp = () => {
		removeEvent(document, 'mousemove', this.fnMove);
    	removeEvent(document, 'mouseup', this.fnUp);
	}
	render() {
		/*返回元素*/
		return (
			<div id={this.props.id} onMouseDown={this.fnDown} style={{
				width: this.props.style.width,
				height: this.props.style.height,
				backgroundColor: this.props.style.backgroundColor,
				position: this.props.style.position,
				left: this.state.needX,
				top: this.state.needY,
				// transform: `translate(${this.state.needX}px, ${this.state.needY}px)`,
				cursor: "pointer",
			}}
			>{this.props.children}</div>
		)
	}
}
export default Drag