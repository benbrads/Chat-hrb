"use strict";(self.webpackChunkchatHRB=self.webpackChunkchatHRB||[]).push([[8617],{8617:(v,l,r)=>{r.r(l),r.d(l,{hrb_img:()=>g});var o=r(6604),d=r(6120),n=r(9892);const c={baseClassname:"hrb-img",loadingOptions:{auto:"auto",eager:"eager",lazy:"lazy"}},g=class{constructor(a){(0,o.r)(this,a),this.hrbImgWillLoad=(0,o.c)(this,"hrbImgWillLoad",7),this.hrbImgDidLoad=(0,o.c)(this,"hrbImgDidLoad",7),this.hrbError=(0,o.c)(this,"hrbError",7),this.fit=!0,this.pLoading="lazy",this.fallbackTimeout=null,this.isLazy=this.pLoading===c.loadingOptions.lazy,this.validateLoadingProp=()=>{const{pLoading:i}=this;Object.values(c.loadingOptions).includes(i)||console.error(`<hrb-img /> : "${i}" is not a valid p-loading value`)},this.clearFallbackTimeout=()=>{const{fallbackTimeout:i}=this;i&&(clearTimeout(i),this.fallbackTimeout=null)},this.addIO=()=>{const{load:i,removeIO:t}=this;n.h?(t(),this.io=new IntersectionObserver(s=>{s[0].isIntersecting&&(i(),t())}),this.io.observe(this.el)):this.fallbackTimeout=setTimeout(()=>i(),200)},this.removeIO=()=>{const{io:i}=this;i&&(i.disconnect(),this.io=void 0)},this.load=()=>{const{hrbImgWillLoad:i,src:t,srcset:s}=this;this.loadSrc=t,this.loadSrcset=s,i.emit()},this.onLoad=()=>{const{hrbImgDidLoad:i}=this;this.hasLoaded=!0,i.emit()},this.onError=()=>{const{hrbError:i}=this;i.emit()}}srcChanged(){const{addIO:a,isLazy:i,src:t,srcset:s}=this;t&&i&&!s&&!n.a&&a()}componentDidLoad(){const{addIO:a,isLazy:i,src:t,srcset:s,validateLoadingProp:h}=this;h(),t&&i&&!s&&!n.a&&a()}disconnectedCallback(){this.removeIO(),this.clearFallbackTimeout()}render(){const{alt:a,fit:i,hasLoaded:t,height:s,isLazy:h,loadSrc:L,loadSrcset:f,onLoad:_,onError:O,pLoading:p,src:I,srcset:m,width:C}=this,{baseClassname:e}=c,E=(0,d.g)([`${e}`,t&&`${e}--is-loaded`]),y=(0,d.g)([`${e}__img`,t&&`${e}__img--is-loaded`,i?`${e}__img--fit`:`${e}__img--fit-false`]),b=h&&!m&&!n.a;return(0,o.h)(o.H,{class:E},(0,o.h)("img",{src:b?L:I,alt:a||"",onLoad:_,onError:O,class:y,srcset:b?f:m,loading:p,height:s,width:C}))}get el(){return(0,o.g)(this)}static get watchers(){return{src:["srcChanged"]}}};g.style=".hrb-img{background-color:#d6dae0;display:block;-o-object-fit:contain;object-fit:contain;width:auto}.hrb-img.hrb-img--is-loaded{background-color:transparent}.hrb-img__img{display:block;opacity:0;-webkit-transition:all 0.2s cubic-bezier(0.33, 0.66, 0.66, 1);transition:all 0.2s cubic-bezier(0.33, 0.66, 0.66, 1)}.hrb-img__img--fit{height:auto;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit;width:100%}.hrb-img__img--is-loaded{opacity:1}"}}]);