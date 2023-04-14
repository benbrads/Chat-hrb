"use strict";(self.webpackChunkchatHRB=self.webpackChunkchatHRB||[]).push([[1379],{1379:(d,o,s)=>{s.r(o),s.d(o,{hrb_radial_progress_meter:()=>l});var e=s(6604);const n_fgColor="#ffffff",n_bgColor="rgba(125,125,125,0.25)",r_fgColor="#11A63D",r_bgColor="rgba(125,125,125,0.5)",l=class{constructor(i){(0,e.r)(this,i),this.animationDone=(0,e.c)(this,"animationDone",7),this.viewDimension=0,this.viewBoxDimensions="",this.meterCenter=0,this.circumference=0,this.strokeDashArrayValue="",this.startLevel=0,this.currentLevel=0,this.radius=15,this.strokeWidth=5.5,this.fgColor=r_fgColor,this.bgColor=r_bgColor}calculateMeterAttrs(){this.radius="large"===this.size?50:15,this.strokeWidth="large"===this.size?18.66:5.5,this.fgColor="light"===this.theme?n_fgColor:r_fgColor,this.bgColor="light"===this.theme?n_bgColor:r_bgColor,this.viewDimension=2*this.radius+this.strokeWidth,this.viewBoxDimensions=`0 0 ${this.viewDimension} ${this.viewDimension}`,this.meterCenter=this.radius+this.strokeWidth/2,this.circumference=2*Math.PI*this.radius,this.strokeDashArrayValue=this.circumference+" "+this.circumference,this.startLevel=this.startPercentage>=0&&this.startPercentage<=100?this.circumference-this.startPercentage/100*this.circumference:0,this.currentLevel=this.currentPercentage>=0&&this.currentPercentage<=100?this.circumference-this.currentPercentage/100*this.circumference:0}componentWillRender(){this.calculateMeterAttrs(),this.displayLevel=this.displayLevel||this.startLevel,requestAnimationFrame(()=>{setTimeout(()=>{this.displayLevel=this.currentLevel})})}componentDidLoad(){this.meter.ontransitionend=()=>{this.animationDone.emit("animationDone")}}render(){return(0,e.h)(e.H,null,(0,e.h)("svg",{class:"radial-progress-meter",width:this.viewDimension,height:this.viewDimension,viewBox:this.viewBoxDimensions,"aria-hidden":"true",focusable:"false","data-automation-label":"radial-progress-meter"},(0,e.h)("circle",{cx:this.meterCenter,cy:this.meterCenter,r:this.radius,fill:"none",stroke:this.bgColor,"stroke-width":this.strokeWidth}),(0,e.h)("circle",{class:"meter",ref:i=>this.meter=i,cx:this.meterCenter,cy:this.meterCenter,r:this.radius,fill:"none",stroke:this.fgColor,"stroke-width":this.strokeWidth,"stroke-dasharray":this.circumference,"stroke-dashoffset":this.displayLevel,"stroke-linecap":"round"})),(0,e.h)("label",{htmlFor:"progress",class:"accessible-progress-meter","data-automation-label":"accessible-progress-meter"},"Progress",(0,e.h)("progress",{id:"progress",max:"100",value:this.currentPercentage},this.currentPercentage)))}};l.style=".radial-progress-meter{-webkit-transform:rotate(-85deg);transform:rotate(-85deg)}.accessible-progress-meter{clip:rect(1px, 1px, 1px, 1px);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.meter{-webkit-transition:stroke-dashoffset 1s 1s;transition:stroke-dashoffset 1s 1s}"}}]);