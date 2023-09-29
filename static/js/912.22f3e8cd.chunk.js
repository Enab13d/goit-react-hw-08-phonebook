"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[912],{4912:function(n,e,t){t.r(e),t.d(e,{default:function(){return An}});var r,i,o,a,s,d,l,c,u,m,g,h,p,x,f,b,Z,v,j,w,z,y,k,C,F,A,B=t(168),L=t(5706),D=t(5372),q=t(9126),P=L.Z.form(r||(r=(0,B.Z)(["\nwidth: 100%;\n\n\n  display: flex;\n  flex-direction: column;\n\n  border-radius: 8px;\n  padding: ",";\n"])),D.r.sizing(1)),E=L.Z.label(i||(i=(0,B.Z)(["\n  margin-bottom: ",";\n"])),D.r.sizing(2)),I=L.Z.input(o||(o=(0,B.Z)(["\n  margin-bottom: ",";\n  height: ",";\n  padding-left: ",";\n  padding-top: ",";\n  padding-bottom: ",";\n  background-color: ",";\n  border-radius: 4px;\n  font-size: 18px;\n  border: none;\n  &: last-of-type {\n    margin-bottom: ",";\n  }\n"])),D.r.sizing(2),D.r.sizing(5),D.r.sizing(2),D.r.sizing(1),D.r.sizing(1),D.r.colors.abmientWhite,D.r.sizing(4)),T=L.Z.button(a||(a=(0,B.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 16px;\n  width: 100%;\n  height: 36px;\n  border-radius: 8px;\n  border: none;\n  font-weight: 600;\n  background-color: ",";\n  color: white;\n  &:hover,\n  &:focus {\n    color: white;\n    background-color: ",";\n  }\n"])),D.r.colors.formBorder,D.r.colors.darkBlue),V=(0,L.Z)(q.LzJ)(s||(s=(0,B.Z)(["\nwidth: 24px;\nheight: 24px;\nmargin-left: ",";\n"])),D.r.sizing(2)),W=L.Z.div(d||(d=(0,B.Z)(["\nwidth: calc(100% - 18px);\npadding: ",";\nborder-radius: 8px;\n"," {\n  width: 380px;\n  margin-left: auto;\n  margin-right: auto;\n};\n  background-color: ",";\n  backdrop-filter: blur(12px);\n\n"])),D.r.sizing(5),D.r.mq[0],D.r.colors.transparentWhiteBg),N=t(8708),S=t(3855),M=function(n){return n.contacts.isLoading},J=function(n){return n.contacts.items},K=function(n){return n.contacts.isDeleting},Y=t(8174),$=(t(5462),t(184)),G=function(){var n=(0,S.I0)(),e=(0,S.v9)(J),t=(0,S.v9)(M),r=(0,S.v9)(K);return(0,$.jsxs)(P,{autoComplete:"off",onSubmit:function(t){t.preventDefault();var r=t.target.elements,i=r.name,o=r.number,a=i.value,s=e?e.some((function(n){return n.name.toLowerCase()===a.toLowerCase()})):null;if(s)return function(n){return Y.Am.warn("".concat(n," is already in contacts."),{position:"top-center",autoClose:2e3})}(a);var d={name:a,number:o.value};n((0,N.uK)(d)),Y.Am.success("".concat(a," has been added to Your contacts"),{autoClose:1e3}),t.target.reset()},children:[(0,$.jsx)(E,{htmlFor:"name",children:"Name"}),(0,$.jsx)(I,{type:"text",name:"name",id:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,$.jsx)(E,{htmlFor:"number",children:"Number"}),(0,$.jsx)(I,{type:"tel",name:"number",id:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,$.jsx)(T,{children:t?!r&&"Adding...":(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)("span",{children:"Add Contact"}),(0,$.jsx)(V,{title:"add contact"})]})})]})},R=L.Z.label(l||(l=(0,B.Z)(["\n  display: inline-block;\n  margin-bottom: ",";\n"])),D.r.sizing(3)),H=L.Z.input(c||(c=(0,B.Z)(["\n  width: 100%;\n  height: ",";\n  padding-left: ",";\n  padding-top: ",";\n  padding-bottom: ",";\n  background-color: ",";\n  border-radius: 4px;\n  border: none;\n"])),D.r.sizing(5),D.r.sizing(2),D.r.sizing(1),D.r.sizing(1),D.r.colors.abmientWhite),O=t(6319),Q=t(9129),U=function(){var n=(0,S.v9)(O.B8),e=(0,S.I0)();return(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(R,{htmlFor:"filter",children:[(0,$.jsx)(Q.CNP,{})," Find contacts by name"]}),(0,$.jsx)(H,{id:"filter",onChange:function(n){return e((0,O.Tv)(n.target.value))},value:n})]})},X=t(3433),_=L.Z.ul(u||(u=(0,B.Z)(["\n  width: 100%;\n  padding-left: 0;\n  list-style: none;\n  background-color: ",";\n  li:nth-of-type(even) {\n    background-color: ",";\n  }\n"])),D.r.colors.abmientWhite,D.r.colors.contactBg),nn=t(9439),en=t(8820),tn=t(3853),rn=L.Z.li(m||(m=(0,B.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: ",";\n  padding-right: ",";\n"])),D.r.sizing(2),D.r.sizing(2)),on=L.Z.button(g||(g=(0,B.Z)(["\n  width: 40px;\n  padding: ",";\n  border-radius: 8px;\n  border: none;\n  font-weight: 600;\n  background-color: ",";\n  color: white;\n  transition: background-color ","\n      ",",\n    color ","\n      ",";\n  &:hover,\n  &:focus {\n    color: ",";\n    background-color: ",";\n  }\n"])),D.r.sizing(1),D.r.colors.formBorder,D.r.transitionDuration,D.r.transitionTimingFunction,D.r.transitionDuration,D.r.transitionTimingFunction,D.r.colors.abmientWhite,D.r.colors.darkBlue),an=L.Z.div(h||(h=(0,B.Z)([""]))),sn=L.Z.p(p||(p=(0,B.Z)(["\n  font-weight: 600;\n  line-height: 0.8;\n"]))),dn=L.Z.p(x||(x=(0,B.Z)(["\nfont-size: 14px;\nline-height: 0.8;\nfont-weight: 600;\ncolor: ",";\n& \n"])),D.r.colors.phoneColor),ln=(0,L.Z)(en.VPh)(f||(f=(0,B.Z)(["\n  width: 20px;\n  height: 20px;\n"]))),cn=(0,L.Z)(tn.IYd)(b||(b=(0,B.Z)(["\n  width: 20px;\n  height: 20px;\n"]))),un=L.Z.div(Z||(Z=(0,B.Z)(["\n  display: flex;\n  column-gap: ",";\n"])),D.r.sizing(3)),mn=t(2791),gn=L.Z.div(v||(v=(0,B.Z)(["\nposition: fixed;\ntop: 0;\nleft: 0;\nwidth: 100vw;\nheight: 100vh;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nbackground-color: rgba(0, 0, 0, 0.8);\nz-index: 1200;\npointer-events: ",";\nopacity: ",";\ntransition: opacity "," ",";\n\ndiv {\n  transform: scale",";\n  transition: transform "," ",";\n}\n\n"])),(function(n){return n.expanded?"auto":"none"}),(function(n){return n.expanded?1:0}),D.r.transitionDuration,D.r.transitionTimingFunction,(function(n){return n.expanded?"(1)":"(0.7)"}),D.r.transitionDuration,D.r.transitionTimingFunction),hn=L.Z.div(j||(j=(0,B.Z)(["\nmax-width: calc(100vw - ",");\nmax-height: calc(100vh - ",");\n"])),D.r.sizing(12),D.r.sizing(6)),pn=L.Z.form(w||(w=(0,B.Z)(["\nwidth: calc(100% - 18px);\n  background-color: hsla(212, 5%, 47%, 1);\n  backdrop-filter: blur(6px);\n\n"," {\n  width: 380px;\n  margin-left: auto;\n  margin-right: auto;\n};\n  display: flex;\n  flex-direction: column;\n  border: 1px solid hsla(193, 35%, 89%, 1);\n  border-radius: 8px;\n  padding: ",";\n  \n"])),D.r.mq[0],D.r.sizing(4)),xn=L.Z.label(z||(z=(0,B.Z)(["\n  margin-bottom: ",";\n"])),D.r.sizing(2)),fn=L.Z.input(y||(y=(0,B.Z)(["\n  margin-bottom: ",";\n  background-color: hsla(193, 35%, 89%, 1);\n  border-radius: 4px;\n  padding-left: ",";\n  padding-top: ",";\n  padding-bottom: ",";\n  border: none;\n  &: last-of-type {\n    margin-bottom: ",";\n  }\n"])),D.r.sizing(2),D.r.sizing(2),D.r.sizing(2),D.r.sizing(2),D.r.sizing(4)),bn=L.Z.button(k||(k=(0,B.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 16px;\n  width: 100%;\n  height: 36px;\n  border-radius: 8px;\n  border: none;\n  font-weight: 600;\n  background-color: black;\n  color: hsla(193, 35%, 89%, 1);\n  &:hover,\n  &:focus {\n    color: white;\n    background-color: ",";\n  }\n  margin-bottom: ",";\n"])),D.r.colors.darkBlue,D.r.sizing(2)),Zn=(0,L.Z)(en.SV5)(C||(C=(0,B.Z)(["\nwidth: 20px;\nheight: 20px;\nmargin-left: 12px;\npointer-events: none;\n"]))),vn=t(4164),jn=function(n){var e=n.id,t=n.name,r=n.number,i=n.onModalClose,o=n.onClick,a=n.expanded;(0,mn.useEffect)((function(){return window.addEventListener("keydown",i),function(){window.removeEventListener("keydown",i)}}),[i]);var s=(0,S.I0)();return vn.createPortal((0,$.jsx)(gn,{onClick:o,id:"overlay",expanded:a,children:(0,$.jsx)(hn,{children:(0,$.jsxs)(pn,{autoComplete:"off",onSubmit:function(n){n.preventDefault();var t=n.target.elements,r=t.name,i=t.number,o=r.value;if(r.value!==r.defaultValue||i.value!==i.defaultValue){var a={name:o,number:i.value};s((0,N.mP)({id:e,contact:a})),Y.Am.success("Contact has been succesfully updated",{autoClose:1e3}),n.target.reset()}},children:[(0,$.jsx)(xn,{htmlFor:"name"}),(0,$.jsx)(fn,{type:"text",name:"name",id:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,defaultValue:t}),(0,$.jsx)(xn,{htmlFor:"number"}),(0,$.jsx)(fn,{type:"tel",name:"number",id:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,defaultValue:r}),(0,$.jsxs)(bn,{type:"submit",children:["Edit",(0,$.jsx)(cn,{style:{marginLeft:12}})]}),(0,$.jsxs)(bn,{type:"button",onClick:o,id:"close-modal",children:["Close",(0,$.jsx)(Zn,{})]})]})})}),document.querySelector("#modal-root"))},wn=t(4727),zn=function(n){var e=n.name,t=n.number,r=n.id,i=(0,S.I0)(),o=(0,S.v9)(K),a=(0,mn.useRef)(!1),s=(0,mn.useState)(!1),d=(0,nn.Z)(s,2),l=d[0],c=d[1],u=function(){return c(!1)};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(rn,{children:[(0,$.jsxs)(an,{children:[(0,$.jsx)(sn,{children:e}),(0,$.jsx)(dn,{children:t})]}),(0,$.jsxs)(un,{children:[(0,$.jsx)(on,{type:"button",onClick:function(){return c(!0)},children:(0,$.jsx)(cn,{title:"edit contact"})}),(0,$.jsx)(on,{type:"button",onClick:function(n){var e=n.currentTarget.id;e===r&&(a.current=!0,i((0,N.GK)(e)))},id:r,children:o&&a.current?(0,$.jsx)(wn.s5,{strokeColor:"white",width:"20"}):(0,$.jsx)(ln,{title:"remove contact"})})]})]},r),(0,$.jsx)(jn,{id:r,name:e,number:t,onModalClose:function(n){"Escape"===n.key&&u()},onClick:function(n){"overlay"!==n.target.id&&"close-modal"!==n.target.id||u()},expanded:l})]})},yn=(0,L.Z)(wn.s5)(F||(F=(0,B.Z)(["\n"]))),kn=L.Z.div(A||(A=(0,B.Z)(["\nmargin-left: 50%;\nmargin-top: 20%;\n"]))),Cn=function(){return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)("p",{children:"Loading contacts, please wait..."}),(0,$.jsx)(kn,{children:(0,$.jsx)(yn,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"48"})})]})},Fn=function(){var n=(0,S.I0)(),e=(0,S.v9)(M),t=(0,S.v9)(O.B8),r=(0,S.v9)(J);(0,mn.useEffect)((function(){n((0,N.yF)())}),[n]);var i=r?(0,X.Z)(r).filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())})):[];return(0,$.jsxs)($.Fragment,{children:[e&&!r.length&&(0,$.jsx)($.Fragment,{children:(0,$.jsx)(Cn,{})}),(0,$.jsx)(_,{children:i?i.map((function(n){var e=n.name,t=n.number,r=n.id;return(0,$.jsx)(zn,{id:r,name:e,number:t},r)})):null})]})},An=function(){return(0,$.jsxs)(W,{children:[(0,$.jsx)("h1",{children:"Phonebook"}),(0,$.jsx)(G,{}),(0,$.jsx)("h2",{children:"Contacts"}),(0,$.jsx)(U,{}),(0,$.jsx)(Fn,{})]})}}}]);
//# sourceMappingURL=912.22f3e8cd.chunk.js.map