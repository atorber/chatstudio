import{b as k,a2 as C,r as h,d as I,bI as K,e as $,f as F,k as N,i as m,c as a,w as n,j as t,aZ as f,aF as g,H as w,C as c,q as V,v as q,t as E,b2 as R,x as T,y as U}from"./index-6fac5f50.js";import{b as B}from"./auth-efc4c23f.js";import{S as D,i as b,a as z}from"./common-13b39e4d.js";const M=l=>(T("data-v-820952a3"),l=l(),U(),l),P={class:"el-container is-vertical login-box forget"},j=M(()=>m("header",{class:"el-header box-header"},"找回密码",-1)),G={class:"el-main",style:{padding:"3px"}},H={class:"helper"},L={__name:"forget",setup(l){const p=C(),_=h(),y={sms_code:{required:!0,trigger:["blur","input"],message:"验证码不能为空！"},username:{required:!0,trigger:["blur","input"],validator(o,e){return e?b(e)?!0:new Error("请正确填写手机号！"):new Error("手机号不能为空！")}},password:{required:!0,trigger:["blur","input"],message:"密码不能为空！"}},d=h(0),v=new D("FORGET_PSW_SMS",120,o=>d.value=o),s=I({username:"",password:"",sms_code:"",loading:!1}),S=()=>{s.loading=!0;const o=B({mobile:s.username,password:s.password,sms_code:s.sms_code});o.then(e=>{e.code===200?(window.$message.success("密码修改成功"),setTimeout(()=>{p.push("/auth/login")},500)):window.$message.warning(e.message)}),o.finally(()=>{s.loading=!1})},i=o=>{o.preventDefault(),_.value.validate(e=>{!e&&S()})},x=()=>{if(!b(s.username)){window.$message.warning("请正确填写手机号");return}const o=z({mobile:s.username,channel:"forget_account"});o.then(e=>{e.code===200?(v.start(),window.$message.success("短信发送成功")):window.$message.warning(e.message)}),o.finally(()=>{s.loading=!1})};return K(()=>{v.clear()}),(o,e)=>{const u=$("n-button");return F(),N("section",P,[j,m("main",G,[a(t(R),{ref_key:"formRef",ref:_,size:"large",model:s,rules:y},{default:n(()=>[a(t(f),{path:"username","show-label":!1},{default:n(()=>[a(t(g),{placeholder:"登录账号/手机号",value:s.username,"onUpdate:value":e[0]||(e[0]=r=>s.username=r),maxlength:11,onKeydown:w(i,["enter"])},null,8,["value","onKeydown"])]),_:1}),a(t(f),{path:"sms_code","show-label":!1},{default:n(()=>[a(t(g),{placeholder:"验证码",maxlength:6,value:s.sms_code,"onUpdate:value":e[1]||(e[1]=r=>s.sms_code=r),onKeydown:w(i,["enter"])},null,8,["value","onKeydown"]),a(u,{tertiary:"",class:"mt-l5",onClick:x,disabled:d.value>0},{default:n(()=>[c(" 获取验证码 "),V(m("span",null,"("+E(d.value)+"s)",513),[[q,d.value>0]])]),_:1},8,["disabled"])]),_:1}),a(t(f),{path:"password","show-label":!1},{default:n(()=>[a(t(g),{placeholder:"设置密码",type:"password","show-password-on":"click",value:s.password,"onUpdate:value":e[2]||(e[2]=r=>s.password=r),onKeydown:w(i,["enter"])},null,8,["value","onKeydown"])]),_:1}),a(u,{type:"primary",size:"large",block:"",class:"mt-t20",onClick:i,loading:s.loading},{default:n(()=>[c(" 立即找回 ")]),_:1},8,["loading"])]),_:1},8,["model"]),m("div",H,[a(u,{text:"",color:"#409eff",onClick:e[3]||(e[3]=r=>t(p).push("/auth/register"))},{default:n(()=>[c(" 注册账号 ")]),_:1}),a(u,{text:"",color:"#409eff",onClick:e[4]||(e[4]=r=>t(p).push("/auth/login"))},{default:n(()=>[c(" 已有账号，立即登录? ")]),_:1})])])])}}},A=k(L,[["__scopeId","data-v-820952a3"]]);export{A as default};
