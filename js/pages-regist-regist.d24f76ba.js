(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-regist-regist"],{"1de5":function(t,e,i){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"21cf":function(t,e,i){"use strict";i.r(e);var n=i("9fd2"),a=i("bf03");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("8d91");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"dc6c8610",null,!1,n["a"],r);e["default"]=c.exports},3564:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"header"},[t.showBack?i("v-uni-view",{staticClass:"return",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toreturn.apply(void 0,arguments)}}},[i("v-uni-image",{staticClass:"back_img",attrs:{src:"/static/back.png",mode:""}})],1):t._e(),t.showBackHome?i("v-uni-view",{staticClass:"return",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toHome.apply(void 0,arguments)}}},[i("v-uni-image",{staticClass:"back_img",attrs:{src:"/static/back.png",mode:""}})],1):t._e(),i("v-uni-view",{staticClass:"title"},[t._v(t._s(t.msg))]),t.search?i("v-uni-view",{staticClass:"img_search",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goSearch.apply(void 0,arguments)}}},[i("v-uni-image",{staticClass:"search_Img",attrs:{src:"/static/search-white.png",mode:""}})],1):t._e(),t.saveModify?i("v-uni-view",{staticClass:"saveModify",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.ceshi.apply(void 0,arguments)}}},[t._v("保存修改")]):t._e()],1)},o=[]},"4d5f":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".header[data-v-3f980e82]{display:flex;align-items:center;padding-bottom:%?10?%}.header .title[data-v-3f980e82]{width:auto;height:%?34?%;line-height:%?34?%;font-size:%?36?%;color:#f7f7f7;margin:%?100?% auto 0}.return .back_img[data-v-3f980e82]{width:%?22?%;height:%?38?%;line-height:%?38?%;position:absolute;left:%?30?%;top:%?100?%}.header .img_search[data-v-3f980e82]{width:%?38?%;height:%?38?%;position:absolute;right:%?30?%;top:%?100?%}.header .img_search .search_Img[data-v-3f980e82]{width:%?38?%;height:%?38?%;display:block;position:absolute\n\t/* right: 30rpx;\n\ttop: 114rpx */}.header .saveModify[data-v-3f980e82]{font-size:%?32?%;color:#f7f7f7;width:auto;height:%?38?%;position:absolute;right:%?30?%;top:%?100?%}",""]),t.exports=e},5977:function(t,e,i){"use strict";var n=i("e61d"),a=i.n(n);a.a},"7f51":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"Head",data:function(){return{}},props:{showBack:{type:Boolean,default:!0},showBackHome:{type:Boolean,default:!1},msg:{type:String,default:""},search:{type:Boolean,default:!1},saveModify:{type:Boolean,default:!1}},methods:{ceshi:function(){this.$emit("toupload")},toreturn:function(){uni.navigateBack({})},toHome:function(){uni.switchTab({url:"/pages/home/home"})},goSearch:function(){uni.navigateTo({url:"/pages/search/search"})}}};e.default=n},8227:function(t,e,i){var n=i("825e");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("0b509339",n,!0,{sourceMap:!1,shadowMode:!1})},"825e":function(t,e,i){var n=i("24fb"),a=i("1de5"),o=i("c04b");e=n(!1);var r=a(o);e.push([t.i,".regist_page[data-v-dc6c8610]{width:%?750?%;background:url("+r+") no-repeat center 0;background-size:%?750?% 100%}.user_Invitation[data-v-dc6c8610]{width:%?640?%;height:%?88?%;margin:%?40?% auto %?30?%;background-color:#1c1625;display:flex;align-items:center;opacity:.8;border-radius:5px}.registerError[data-v-dc6c8610]{width:%?640?%;min-height:%?80?%;margin:%?40?% auto %?30?%}.registerError_text[data-v-dc6c8610]{font-size:%?28?%;color:#c40303}.user_cellphone[data-v-dc6c8610],\n.user_Verification[data-v-dc6c8610],\n.user_psd[data-v-dc6c8610],\n.user_confirm[data-v-dc6c8610]{width:%?640?%;height:%?88?%;margin:0 auto %?30?%;background-color:#1c1625;display:flex;align-items:center;opacity:.8;border-radius:5px}.user_cellphone>uni-label>span[data-v-dc6c8610],\n.user_Verification>uni-label>span[data-v-dc6c8610],\n.user_psd>uni-label>span[data-v-dc6c8610],\n.user_confirm>uni-label>span[data-v-dc6c8610]{color:#c40303;margin-right:.2rem}.user_Invitation uni-label[data-v-dc6c8610]{width:auto;height:%?26?%;line-height:%?26?%;font-size:%?28?%;margin-left:%?72?%;color:#f7f7f7}.user_cellphone>uni-label[data-v-dc6c8610],\n.user_confirm>uni-label[data-v-dc6c8610]{width:auto;height:%?26?%;line-height:%?26?%;font-size:%?28?%;margin-left:%?34?%;color:#f7f7f7}.user_Verification uni-label[data-v-dc6c8610]{width:auto;height:%?26?%;line-height:%?26?%;font-size:%?28?%;margin-left:%?62?%;color:#f7f7f7}.user_cellphone uni-input[data-v-dc6c8610],\n.user_psd uni-input[data-v-dc6c8610],\n.user_Invitation uni-input[data-v-dc6c8610],\n.user_confirm uni-input[data-v-dc6c8610]{width:%?420?%;height:%?88?%;font-size:%?28?%;box-sizing:border-box;background-color:#1c1625;margin-left:%?30?%;color:#666}.user_Verification uni-input[data-v-dc6c8610]{width:%?260?%;height:%?88?%;font-size:%?28?%;box-sizing:border-box;background-color:#1c1625;margin-left:%?30?%;color:#666}.user_Verification .for_verify[data-v-dc6c8610]{width:%?142?%;height:%?88?%;line-height:%?88?%;color:#f153a1;font-size:%?28?%}.load_page .user_psd[data-v-dc6c8610]{width:%?640?%;height:%?88?%;margin:%?30?% auto 0;display:flex;align-items:center;background-color:#1c1625;opacity:.8\n\t/* background-color: red */}.user_psd uni-label[data-v-dc6c8610]{width:auto;height:%?26?%;line-height:%?26?%;font-size:%?28?%;margin-left:%?34?%;color:#f7f7f7}.sub[data-v-dc6c8610]{display:block;width:%?640?%;height:%?98?%;line-height:%?98?%;background:linear-gradient(270deg,#9547fe,#f153a1);border-radius:%?48?%;margin:%?81?% auto 0;font-size:%?32?%;color:#f7f7f7}\n\n/*  */.mima[data-v-dc6c8610]{width:%?584?%;height:%?30?%;display:flex;align-items:center;margin:%?40?% %?90?% %?84?% %?76?%}.mima_left[data-v-dc6c8610]{width:auto;height:%?30?%;display:flex;align-items:center}.delete_btn[data-v-dc6c8610]{\n\t/* \tdisplay: block; */width:%?30?%;height:%?30?%;border:1px solid #f7f7f7;border-radius:50%;margin-right:%?16?%}.mima_left .active[data-v-dc6c8610]{width:%?20?%;height:%?20?%;border-radius:50%}.mima_left .actived[data-v-dc6c8610]{background:#9547fe;width:%?30?%;height:%?30?%;border-radius:50%}.mima_left uni-label[data-v-dc6c8610]{width:auto;height:%?24?%;line-height:%?24?%;color:#f7f7f7;font-size:%?24?%}.regis_btn[data-v-dc6c8610]{width:%?236?%;height:%?34?%;line-height:%?34?%;font-size:%?32?%;color:#f7f7f7;border-bottom:1px solid #f7f7f7;margin:0 auto}",""]),t.exports=e},"8d91":function(t,e,i){"use strict";var n=i("8227"),a=i.n(n);a.a},"90ea":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("a1f5")),o=n(i("e674")),r={name:"regist",components:{Head:a.default},data:function(){return{WinHeight:"",invitation:"",phone:"",code:"",inviteCode:null,password:"",confirm:"",key:"",btntxt:"获取验证码",time:60,btn_check:!1,actived:"actived",active:"active",registerError:"",isVerificationCodes:!1}},onLoad:function(){this.getphoneHeight()},methods:{selected_btn:function(){this.btn_check=!this.btn_check},onInviteInput:function(t){this.inviteCode=t.detail.value},onPhoneInput:function(t){this.phone=t.detail.value},onCodeInput:function(t){this.code=t.detail.value},onKeyInput:function(t){this.password=t.detail.value},onConfirmInput:function(t){this.confirm=t.detail.value},checkPhone:function(){return""==this.phone?(this.registerError="请输入手机号",!1):/^1[3456789]\d{9}$/.test(this.phone)?(this.registerError="",!0):(this.registerError="请输入正确手机号码",!1)},checkCode:function(){return""==this.code?(this.registerError="请输入验证码",!1):/^[0-9]{4}$/.test(this.code)?(this.registerError="",!0):(this.registerError="请输入正确的验证码",!1)},checkPsd:function(){var t=/^(?=.*[A-Za-z])(?=.*\d)[^]{6,16}$/,e=/^[0-9]*$/;return""==this.password?(this.registerError="请输入密码",!1):!t.test(this.password)||e.test(this.password)?(this.registerError="密码至少6-16个字符,至少1个字母,且不能为纯数字",!1):(this.registerError="",!0)},checkAffirmPsd:function(){return""==this.confirm?(this.registerError="请输入确认密码",!1):this.confirm!=this.password?(this.registerError="两次输入的密码不相同",!1):(this.registerError="",!0)},find_verification:function(){var t=this;this.checkPhone()&&!this.isVerificationCodes?uni.request({url:o.default+"api/verificationCodes",data:{mobile:this.phone},method:"POST",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){t.key=e.data.key,t.isVerificationCodes=!0,400==e.statusCode?uni.showModal({content:e.data.message,showCancel:!1,duration:2e3}):200==e.statusCode&&(t.times=setInterval((function(){t.time--,t.btntxt=t.time+"秒",-1==t.time&&(t.time=60,t.btntxt="重新发送",t.isVerificationCodes=!1,clearInterval(t.times))}),1e3))}}):this.phone&&this.isVerificationCodes?uni.showToast({icon:"none",title:"请等待".concat(this.time,"秒后获取验证码")}):this.registerError="请先输入正确的手机号再发送验证码"},checkAllIsNull:function(){return""==this.phone?(this.registerError="请输入手机号",!1):""==this.code?(this.registerError="请输入验证码",!1):""==this.password?(this.registerError="请输入密码",!1):""!=this.confirm||(this.registerError="请输入确认密码",!1)},submit:function(){1==this.btn_check&&this.checkPhone()&&this.checkCode()&&this.checkPsd()&&this.checkAffirmPsd()?uni.request({url:o.default+"api/users",data:{password:this.password,password_confirmation:this.confirm,verification_key:this.key,verification_code:this.code,invite_code:this.inviteCode},method:"POST",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){400==t.statusCode?uni.showModal({content:t.data.message,showCancel:!1,duration:2e3}):201==t.statusCode&&uni.navigateTo({url:"../load/load"})}}):0==this.btn_check?uni.showModal({content:"请先同意用户协议",showCancel:!1,duration:2e3}):this.checkAllIsNull()}}};e.default=r},"9fd2":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"regist_page",style:{height:t.WinHeight+"px"}},[i("Head",{attrs:{msg:"注册"}}),i("v-uni-form",{attrs:{action:"",method:"post"}},[i("v-uni-view",{staticClass:"registerError"},[i("v-uni-text",{staticClass:"registerError_text"},[t._v(t._s(t.registerError))])],1),i("v-uni-view",{staticClass:"user_Invitation"},[i("v-uni-label",{attrs:{for:"tel"}},[t._v("邀请码")]),i("v-uni-input",{attrs:{type:"text",name:"invitation",placeholder:"填写获得观影特权",maxlength:"8"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.onInviteInput.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"user_cellphone"},[i("v-uni-label",{attrs:{for:"phone"}},[i("span",[t._v("*")]),t._v("手机号码")]),i("v-uni-input",{attrs:{type:"number",name:"phone",id:"phone",placeholder:"填写手机号码",maxlength:"11"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.onPhoneInput.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.checkPhone.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"user_Verification"},[i("v-uni-label",{attrs:{for:"code"}},[i("span",[t._v("*")]),t._v("验证码")]),i("v-uni-input",{attrs:{type:"number",name:"code",placeholder:"填写验证码",maxlength:"4"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.onCodeInput.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.checkCode.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"for_verify",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.find_verification.apply(void 0,arguments)}}},[t._v(t._s(t.btntxt))])],1),i("v-uni-view",{staticClass:"user_psd"},[i("v-uni-label",{attrs:{for:"password"}},[i("span",[t._v("*")]),t._v("登录密码")]),i("v-uni-input",{attrs:{type:"text",name:"password",id:"password",password:"true",placeholder:"输入密码",maxlength:"16"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.onKeyInput.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.checkPsd.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"user_confirm "},[i("v-uni-label",{attrs:{for:"confirm "}},[i("span",[t._v("*")]),t._v("确认密码")]),i("v-uni-input",{attrs:{type:"text",name:"confirm",id:"confirm",password:"true",placeholder:"确认密码",maxlength:"16"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirmInput.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.checkAffirmPsd.apply(void 0,arguments)}}})],1),i("v-uni-button",{staticClass:"sub",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("注册")])],1),i("v-uni-view",{staticClass:"mima"},[i("v-uni-view",{staticClass:"mima_left"},[i("v-uni-view",{staticClass:"delete_btn"},[i("v-uni-view",{class:[1==t.btn_check?"actived":" active"],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selected_btn.apply(void 0,arguments)}}})],1),i("v-uni-label",{attrs:{for:"jizhu"}},[t._v("我已阅读同意《用户许可协议》")])],1)],1),i("v-uni-navigator",{attrs:{url:"../load/load"}},[i("v-uni-view",{staticClass:"regis_btn"},[t._v("已有账号 去登录")])],1)],1)},o=[]},a1f5:function(t,e,i){"use strict";i.r(e);var n=i("3564"),a=i("b750");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("5977");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"3f980e82",null,!1,n["a"],r);e["default"]=c.exports},b750:function(t,e,i){"use strict";i.r(e);var n=i("7f51"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},bf03:function(t,e,i){"use strict";i.r(e);var n=i("90ea"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},c04b:function(t,e,i){t.exports=i.p+"static/img/login_back.317c11b1.jpg"},e61d:function(t,e,i){var n=i("4d5f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("d227718e",n,!0,{sourceMap:!1,shadowMode:!1})}}]);