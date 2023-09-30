"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[912],{4912:function(n,e,t){t.r(e),t.d(e,{default:function(){return An}});var r,i,o,a,s,d,l,c,u,m,h,g,p,f,x,b,Z,j,v,w,z,y,k,C,F,A,L=t(168),B=t(5706),q=t(5372),D=t(9126),P=B.Z.form(r||(r=(0,L.Z)(["\nwidth: 100%;\n\n\n  display: flex;\n  flex-direction: column;\n\n  border-radius: 8px;\n  padding: ",";\n"])),q.r.sizing(1)),T=B.Z.label(i||(i=(0,L.Z)(["\n  margin-bottom: ",";\n"])),q.r.sizing(2)),V=B.Z.input(o||(o=(0,L.Z)(["\n  margin-bottom: ",";\n  height: ",";\n  padding-left: ",";\n  padding-top: ",";\n  padding-bottom: ",";\n  background-color: ",";\n  border-radius: 4px;\n  font-size: 18px;\n  border: none;\n  &: last-of-type {\n    margin-bottom: ",";\n  }\n"])),q.r.sizing(2),q.r.sizing(5),q.r.sizing(2),q.r.sizing(1),q.r.sizing(1),q.r.colors.abmientWhite,q.r.sizing(4)),E=B.Z.button(a||(a=(0,L.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 16px;\n  width: 100%;\n  height: 36px;\n  border-radius: 8px;\n  border: none;\n  font-weight: 600;\n  background-color: ",";\n  color: white;\n  &:hover,\n  &:focus {\n    color: white;\n    background-color: ",";\n  }\n"])),q.r.colors.formBorder,q.r.colors.darkBlue),I=(0,B.Z)(D.LzJ)(s||(s=(0,L.Z)(["\nwidth: 24px;\nheight: 24px;\nmargin-left: ",";\n"])),q.r.sizing(2)),M=B.Z.div(d||(d=(0,L.Z)(["\nwidth: calc(100% - 18px);\npadding: ",";\nborder-radius: 8px;\nmargin-top: ",";\n"," {\n  width: 380px;\n  margin-left: auto;\n  margin-right: auto;\n};\n  background-color: ",";\n  backdrop-filter: blur(12px);\n\n"])),q.r.sizing(5),q.r.sizing(7),q.r.mq[0],q.r.colors.transparentWhiteBg),W=t(8708),N=t(3855),S=function(n){return n.contacts.isLoading},J=function(n){return n.contacts.items},K=function(n){return n.contacts.isDeleting},Y=t(8174),$=t(184),G=function(){var n=(0,N.I0)(),e=(0,N.v9)(J),t=(0,N.v9)(S),r=(0,N.v9)(K);return(0,$.jsxs)(P,{autoComplete:"off",onSubmit:function(t){t.preventDefault();var r=t.target.elements,i=r.name,o=r.number,a=i.value,s=e?e.some((function(n){return n.name.toLowerCase()===a.toLowerCase()})):null;if(s)return function(n){return Y.Am.warn("".concat(n," is already in contacts."),{position:"top-center",autoClose:2e3})}(a);var d={name:a,number:o.value};n((0,W.uK)(d)),Y.Am.success("".concat(a," has been added to Your contacts"),{autoClose:1e3}),t.target.reset()},children:[(0,$.jsx)(T,{htmlFor:"name",children:"Name"}),(0,$.jsx)(V,{type:"text",name:"name",id:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,$.jsx)(T,{htmlFor:"number",children:"Number"}),(0,$.jsx)(V,{type:"tel",name:"number",id:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,$.jsx)(E,{children:t?!r&&"Adding...":(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)("span",{children:"Add Contact"}),(0,$.jsx)(I,{title:"add contact"})]})})]})},R=B.Z.label(l||(l=(0,L.Z)(["\n  display: inline-block;\n  margin-bottom: ",";\n"])),q.r.sizing(3)),H=B.Z.input(c||(c=(0,L.Z)(["\n  width: 100%;\n  height: ",";\n  padding-left: ",";\n  padding-top: ",";\n  padding-bottom: ",";\n  background-color: ",";\n  border-radius: 4px;\n  border: none;\n"])),q.r.sizing(5),q.r.sizing(2),q.r.sizing(1),q.r.sizing(1),q.r.colors.abmientWhite),O=t(6319),Q=t(9129),U=function(){var n=(0,N.v9)(O.B8),e=(0,N.I0)();return(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(R,{htmlFor:"filter",children:[(0,$.jsx)(Q.CNP,{})," Find contacts by name"]}),(0,$.jsx)(H,{id:"filter",onChange:function(n){return e((0,O.Tv)(n.target.value))},value:n})]})},X=t(3433),_=B.Z.ul(u||(u=(0,L.Z)(["\n  width: 100%;\n  padding-left: 0;\n  list-style: none;\n  background-color: ",";\n  li:nth-of-type(even) {\n    background-color: ",";\n  }\n"])),q.r.colors.abmientWhite,q.r.colors.contactBg),nn=t(9439),en=t(8820),tn=t(3853),rn=B.Z.li(m||(m=(0,L.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: ",";\n  padding-right: ",";\n"])),q.r.sizing(2),q.r.sizing(2)),on=B.Z.button(h||(h=(0,L.Z)(["\n  width: 40px;\n  padding: ",";\n  border-radius: 8px;\n  border: none;\n  font-weight: 600;\n  background-color: ",";\n  color: white;\n  transition: background-color ","\n      ",",\n    color ","\n      ",";\n  &:hover,\n  &:focus {\n    color: ",";\n    background-color: ",";\n  }\n"])),q.r.sizing(1),q.r.colors.formBorder,q.r.transitionDuration,q.r.transitionTimingFunction,q.r.transitionDuration,q.r.transitionTimingFunction,q.r.colors.abmientWhite,q.r.colors.darkBlue),an=B.Z.div(g||(g=(0,L.Z)([""]))),sn=B.Z.p(p||(p=(0,L.Z)(["\n  font-weight: 600;\n  line-height: 0.8;\n"]))),dn=B.Z.p(f||(f=(0,L.Z)(["\nfont-size: 14px;\nline-height: 0.8;\nfont-weight: 600;\ncolor: ",";\n& \n"])),q.r.colors.phoneColor),ln=(0,B.Z)(en.VPh)(x||(x=(0,L.Z)(["\n  width: 20px;\n  height: 20px;\n"]))),cn=(0,B.Z)(tn.IYd)(b||(b=(0,L.Z)(["\n  width: 20px;\n  height: 20px;\n"]))),un=B.Z.div(Z||(Z=(0,L.Z)(["\n  display: flex;\n  column-gap: ",";\n"])),q.r.sizing(3)),mn=t(2791),hn=B.Z.div(j||(j=(0,L.Z)(["\nposition: fixed;\ntop: 0;\nleft: 0;\nwidth: 100vw;\nheight: 100vh;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nbackground-color: rgba(0, 0, 0, 0.8);\nz-index: 1200;\npointer-events: ",";\nopacity: ",";\ntransition: opacity "," ",";\n\ndiv {\n  transform: scale",";\n  transition: transform "," ",";\n}\n\n"])),(function(n){return n.expanded?"auto":"none"}),(function(n){return n.expanded?1:0}),q.r.transitionDuration,q.r.transitionTimingFunction,(function(n){return n.expanded?"(1)":"(0.7)"}),q.r.transitionDuration,q.r.transitionTimingFunction),gn=B.Z.div(v||(v=(0,L.Z)(["\nwidth: calc(100vw - 38px);\nmargin-right: auto;\n"," {\n  width: 380px;\n  margin-left: auto;\n\n};\nmax-height: calc(100vh - ",");\n"])),q.r.mq[0],q.r.sizing(6)),pn=B.Z.form(w||(w=(0,L.Z)(["\nwidth: 100%;\n  background-color: hsla(212, 5%, 47%, 1);\n  backdrop-filter: blur(6px);\n\n"," {\n  width: 380px;\n  margin-left: auto;\n  margin-right: auto;\n};\n  display: flex;\n  flex-direction: column;\n  border: 1px solid hsla(193, 35%, 89%, 1);\n  border-radius: 8px;\n  padding: ",";\n  \n"])),q.r.mq[0],q.r.sizing(4)),fn=B.Z.label(z||(z=(0,L.Z)(["\n  margin-bottom: ",";\n"])),q.r.sizing(2)),xn=B.Z.input(y||(y=(0,L.Z)(["\n  margin-bottom: ",";\n  background-color: hsla(193, 35%, 89%, 1);\n  border-radius: 4px;\n  padding-left: ",";\n  padding-top: ",";\n  padding-bottom: ",";\n  border: none;\n  &: last-of-type {\n    margin-bottom: ",";\n  }\n"])),q.r.sizing(2),q.r.sizing(2),q.r.sizing(2),q.r.sizing(2),q.r.sizing(4)),bn=B.Z.button(k||(k=(0,L.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 16px;\n  width: 100%;\n  height: 36px;\n  border-radius: 8px;\n  border: none;\n  font-weight: 600;\n  background-color: black;\n  color: hsla(193, 35%, 89%, 1);\n  &:hover,\n  &:focus {\n    color: white;\n    background-color: ",";\n  }\n  margin-bottom: ",";\n"])),q.r.colors.darkBlue,q.r.sizing(2)),Zn=(0,B.Z)(en.SV5)(C||(C=(0,L.Z)(["\nwidth: 20px;\nheight: 20px;\nmargin-left: 12px;\npointer-events: none;\n"]))),jn=t(4164),vn=function(n){var e=n.id,t=n.name,r=n.number,i=n.onModalClose,o=n.hideModal,a=n.expanded;(0,mn.useEffect)((function(){return window.addEventListener("keydown",i),function(){window.removeEventListener("keydown",i)}}),[i]);var s=(0,N.I0)(),d=(0,N.v9)(J);return jn.createPortal((0,$.jsx)(hn,{expanded:a,children:(0,$.jsx)(gn,{children:(0,$.jsxs)(pn,{autoComplete:"off",onSubmit:function(n){n.preventDefault();var t=n.target.elements,r=t.name,i=t.number,a=r.value;if(r.value!==r.defaultValue||i.value!==i.defaultValue){var l={name:a,number:i.value},c=d?d.some((function(n){return n.name.toLowerCase()===a.toLowerCase()&&a.toLowerCase()!==r.defaultValue.toLowerCase()})):null;if(c)return Y.Am.warn("".concat(a," is already in contacts"));s((0,W.mP)({id:e,contact:l})),Y.Am.success("Contact has been succesfully updated",{autoClose:1e3}),n.target.reset(),o()}},children:[(0,$.jsx)(fn,{htmlFor:"name"}),(0,$.jsx)(xn,{type:"text",name:"name",id:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,defaultValue:t}),(0,$.jsx)(fn,{htmlFor:"number"}),(0,$.jsx)(xn,{type:"tel",name:"number",id:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,defaultValue:r}),(0,$.jsxs)(bn,{type:"submit",children:["Edit",(0,$.jsx)(cn,{style:{marginLeft:12}})]}),(0,$.jsxs)(bn,{type:"button",onClick:o,id:"close-modal",children:["Close",(0,$.jsx)(Zn,{})]})]})})}),document.querySelector("#modal-root"))},wn=t(4727),zn=function(n){var e=n.name,t=n.number,r=n.id,i=(0,N.I0)(),o=(0,N.v9)(K),a=(0,mn.useRef)(!1),s=(0,mn.useState)(!1),d=(0,nn.Z)(s,2),l=d[0],c=d[1],u=function(){return c(!1)};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(rn,{children:[(0,$.jsxs)(an,{children:[(0,$.jsx)(sn,{children:e}),(0,$.jsx)(dn,{children:t})]}),(0,$.jsxs)(un,{children:[(0,$.jsx)(on,{type:"button",onClick:function(){return c(!0)},children:(0,$.jsx)(cn,{title:"edit contact"})}),(0,$.jsx)(on,{type:"button",onClick:function(n){n.currentTarget.id===r&&(a.current=!0,i((0,W.GK)(n.currentTarget.id)))},id:r,children:o&&a.current?(0,$.jsx)(wn.s5,{strokeColor:"white",width:"20"}):(0,$.jsx)(ln,{title:"remove contact"})})]})]},r),(0,$.jsx)(vn,{id:r,name:e,number:t,onModalClose:function(n){"Escape"===n.key&&u()},hideModal:u,expanded:l})]})},yn=(0,B.Z)(wn.s5)(F||(F=(0,L.Z)(["\n"]))),kn=B.Z.div(A||(A=(0,L.Z)(["\nmargin-left: 50%;\nmargin-top: 20%;\n"]))),Cn=function(){return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)("p",{children:"Loading contacts, please wait..."}),(0,$.jsx)(kn,{children:(0,$.jsx)(yn,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"48"})})]})},Fn=function(){var n=(0,N.I0)(),e=(0,N.v9)(S),t=(0,N.v9)(O.B8),r=(0,N.v9)(J);(0,mn.useEffect)((function(){n((0,W.yF)())}),[n]);var i=r?(0,X.Z)(r).filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())})):[];return(0,$.jsxs)($.Fragment,{children:[e&&!r.length&&(0,$.jsx)($.Fragment,{children:(0,$.jsx)(Cn,{})}),(0,$.jsx)(_,{children:i?i.map((function(n){var e=n.name,t=n.number,r=n.id;return(0,$.jsx)(zn,{id:r,name:e,number:t},r)})):null})]})},An=function(){return(0,$.jsxs)(M,{children:[(0,$.jsx)("h1",{children:"Phonebook"}),(0,$.jsx)(G,{}),(0,$.jsx)("h2",{children:"Contacts"}),(0,$.jsx)(U,{}),(0,$.jsx)(Fn,{})]})}}}]);
//# sourceMappingURL=912.dc8caccd.chunk.js.map