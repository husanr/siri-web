(self.webpackChunksiri_radiator=self.webpackChunksiri_radiator||[]).push([[922],{77445:function(n,e,t){"use strict";t.d(e,{Z:function(){return l}});var r,i=t(29439),o=t(72791),a=t(30168),c=t(63517).zo.div(r||(r=(0,a.Z)(["\n  display: flex;\n  justify-content: end;\n  align-items: center;\n\n  .pagination_btns {\n    display: flex;\n    background: #fff;\n    margin-right: 10px;\n\n    .btn_item {\n      padding: 12px 16px;\n      border: 1px solid #d7d7d7;\n      border-right: none;\n      color: #6c6c6c;\n      cursor: pointer;\n\n      &:hover {\n        color: #fff;\n        background: ",";\n      }\n    }\n    .nums {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      padding: 0;\n      width: 40px;\n    }\n    :last-child {\n      border-right:1px solid #d7d7d7;\n    }\n\n    .active {\n      color: #fff;\n      background: ",";\n    }\n    \n    .disable {\n      &:hover {\n        color: #6c6c6c;\n        background: #fff;\n      }\n    }\n  }\n\n  .pagination_index {\n    color: #6c6c6c;\n    width: 40px;\n    text-align: right;\n  }\n"])),(function(n){return n.theme.color.bgColor2}),(function(n){return n.theme.color.bgColor2})),s=t(80184),l=(0,o.memo)((function(n){var e=n.totalPage,t=n.handleChangeInd,r=(0,o.useState)(1),a=(0,i.Z)(r,2),l=a[0],d=a[1],u=e>7?7:e,p=(0,o.useState)([]),f=(0,i.Z)(p,2),h=f[0],x=f[1];(0,o.useEffect)((function(){x(Array.from({length:u},(function(n,e){return 1+e})))}),[u]);var g=function(n){if(n!==l){var r=[];switch(!0){case n<=4:r=Array.from({length:u},(function(n,e){return 1+e}));break;case n>4&&n<=e-3:r=Array.from({length:u},(function(e,t){return n-3+t}));break;case n>e-3:r=Array.from({length:u},(function(n,t){return e-t})).reverse();break;default:r=h}x(r),d(n),t(n-1)}};return(0,s.jsxs)(c,{children:[(0,s.jsxs)("div",{className:"pagination_btns",children:[(0,s.jsx)("div",{className:"btn_item "+(1===l?"disable":""),onClick:function(n){return g(1)},children:"First"}),h.map((function(n,e){return(0,s.jsx)("div",{className:"btn_item nums "+(l===n?"active":""),onClick:function(e){return g(n)},children:n},e)})),(0,s.jsx)("div",{className:"btn_item "+(l===e?"disable":""),onClick:function(n){return g(e)},children:"Last"})]}),(0,s.jsxs)("div",{className:"pagination_index",children:[l,"/",e]})]})}))},27922:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return h}});var r,i=t(1413),o=t(29439),a=t(72791),c=t(30168),s=t(63517).ZP.div(r||(r=(0,c.Z)(["\n  width: ",";\n  margin: auto;\n  padding: 30px 0;\n  .news_wrap {\n    margin-top: 50px;\n\n    .news_item {\n      /* width: calc(25% - 27.5px); */\n      height: 230px;\n      margin-bottom: 50px;\n      display: flex;\n\n      .img_wrap {\n        height: 100%;\n        position: relative;\n        cursor: pointer;\n        img {\n          width: auto;\n          height: 100%;\n        }\n        span {\n          position: absolute;\n          width: 116px;\n          height: 31px;\n          line-height: 31px;\n          text-align: center;\n          color: #FFF;\n          right: 15px;\n          top: 0px;\n          transform: translateY(-50%);\n          font-size: 12px;\n          background: ",";\n        }\n      }\n\n      .word_wrap {\n        width: 100%;\n        padding: 30px 30px 30px 50px;\n        border: 1px solid #F1F1F1;\n        p {\n          font-size: 18px;\n          line-height: 20px;\n          color: #444;\n          margin-bottom: 10px;\n          cursor: pointer;\n        }\n        span {\n          display: inline-block;\n          max-width: 800px;\n          font-size: 14px;\n          color: #555;\n        }\n        button {\n          margin-top: 20px;\n          width: 160px;\n          display: block;\n          border: none;\n          line-height: 50px;\n          font-size: 16px;\n          color: #555;\n          background: #fff;\n          border-radius: 3px;\n          transform: translateX(-20px);\n          transition: transform .3s; \n          cursor: pointer;\n          .anticon-arrow-right {\n            font-size: 16px;\n            color: #333;\n            margin-left: 6px;\n          }\n        }\n      }\n\n      transition: all ease 250ms;\n      &:hover {\n        .word_wrap {\n          button {\n            color: #fff;\n            background: ",";\n            transform: translate(0);\n            .anticon-arrow-right {\n              color: #fff;\n            }\n          }\n        }\n      }\n    }\n  }\n"])),(function(n){return n.theme.width.layoutWidth}),(function(n){return n.theme.color.bgColor2}),(function(n){return n.theme.color.bgColor2})),l=t(1381),d=t(89516),u=t(77445),p=t(57689),f=t(80184),h=(0,a.memo)((function(){var n=(0,a.useState)([]),e=(0,o.Z)(n,2),r=e[0],c=e[1];(0,a.useEffect)((function(){c(l.slice(0,8))}),[l]);var h=(0,a.useState)(0),x=(0,o.Z)(h,2),g=x[0],b=x[1],m=Math.ceil(l.length/8),w=(0,p.s0)(),v=function(n,e){var t,r,o=null===(t=l[8*g+e-1])||void 0===t?void 0:t.title,a=null===(r=l[8*g+e+1])||void 0===r?void 0:r.title;w("/contents",{state:{params:(0,i.Z)((0,i.Z)({},n),{},{prev:o,next:a})}})};return(0,f.jsxs)(s,{children:[(0,f.jsx)("ul",{className:"news_wrap",children:r.map((function(n,e){return(0,f.jsxs)("li",{className:"news_item",children:[(0,f.jsxs)("div",{className:"img_wrap",onClick:function(t){return v(n,e)},children:[(0,f.jsx)("img",{src:t(98074)("./"+n.img),alt:""}),(0,f.jsx)("span",{children:n.date})]}),(0,f.jsxs)("div",{className:"word_wrap",children:[(0,f.jsx)("p",{onClick:function(t){return v(n,e)},children:n.title}),(0,f.jsx)("span",{children:n.des}),(0,f.jsxs)("button",{onClick:function(t){return v(n,e)},children:["Read More ",(0,f.jsx)(d.Z,{})]})]})]},e)}))}),(0,f.jsx)(u.Z,{totalPage:m,handleChangeInd:function(n){return function(n){b(n),c(l.slice(8*n,8*n+8))}(n)}})]})}))},89516:function(n,e,t){"use strict";t.d(e,{Z:function(){return s}});var r=t(87462),i=t(72791),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},a=t(8711),c=function(n,e){return i.createElement(a.Z,(0,r.Z)({},n,{ref:e,icon:o}))};var s=i.forwardRef(c)},98074:function(n,e,t){var r={"./01.webp":46835,"./02.webp":75989,"./03.webp":44012,"./04.webp":32218,"./05.webp":69950,"./06.webp":88422,"./07.webp":82153,"./08.webp":95373,"./09.webp":77274,"./10.webp":6265,"./11.webp":12452,"./12.webp":14315,"./13.webp":92677,"./14.webp":19049,"./15.webp":94848,"./16.webp":12031,"./17.webp":22340,"./18.webp":90774,"./19.webp":3715,"./20.webp":53139};function i(n){var e=o(n);return t(e)}function o(n){if(!t.o(r,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return r[n]}i.keys=function(){return Object.keys(r)},i.resolve=o,n.exports=i,i.id=98074}}]);
//# sourceMappingURL=922.6406f592.chunk.js.map