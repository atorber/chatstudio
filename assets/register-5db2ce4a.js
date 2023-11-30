import{b as x,a2 as K,r as h,d as C,bI as I,e as $,f as R,k as N,i as g,c as a,w as r,j as n,aZ as c,aF as m,H as p,C as f,q,v as E,t as T,b2 as U,x as V,y as B}from"./index-6fac5f50.js";import{a as D}from"./auth-efc4c23f.js";import{S as F,i as b,a as z}from"./common-13b39e4d.js";const M=d=>(V("data-v-f8fedcea"),d=d(),B(),d),j={class:"el-container is-vertical login-box reister"},G=M(()=>g("header",{class:"el-header box-header"},"账号注册",-1)),H={class:"el-main",style:{padding:"3px"}},L={class:"helper"},Z={__name:"register",setup(d){const w=K(),_=h(),y={nickname:{required:!0,trigger:["blur","input"],message:"昵称不能为空！"},username:{required:!0,validator(o,e){return e?b(e)?!0:new Error("请正确填写手机号！"):new Error("手机号不能为空！")},trigger:["blur","input"]},password:{required:!0,trigger:["blur","input"],message:"密码不能为空！"},sms_code:{required:!0,trigger:["blur","input"],message:"验证码不能为空！"}},i=h(0),v=new F("REGISTER_SMS",60,o=>{i.value=o}),s=C({nickname:"",username:"",password:"",sms_code:"",loading:!1}),k=()=>{s.loading=!0;const o=D({nickname:s.nickname,mobile:s.username,password:s.password,sms_code:s.sms_code,platform:"web"});o.then(e=>{e.code===200?(window.$message.success("注册成功"),setTimeout(()=>{w.push("/auth/login")},500)):window.$message.warning(e.message)}),o.finally(()=>{s.loading=!1})},l=o=>{o.preventDefault(),_.value.validate(e=>{!e&&k()})},S=()=>{if(!b(s.username)){window.$message.warning("请正确填写手机号");return}const o=z({mobile:s.username,channel:"register"});o.then(e=>{e.code===200?(v.start(),window.$message.success("短信发送成功"),e.data.is_debug&&(s.sms_code=e.data.sms_code,setTimeout(()=>{window.$message.success("已开启验证码自动填充")},1e3))):window.$message.warning(e.message)}),o.finally(()=>{s.loading=!1})};return I(()=>{v.clear()}),(o,e)=>{const u=$("n-button");return R(),N("section",j,[G,g("main",H,[a(n(U),{ref_key:"formRef",ref:_,size:"large",model:s,rules:y},{default:r(()=>[a(n(c),{path:"username","show-label":!1},{default:r(()=>[a(n(m),{placeholder:"请输入手机号",value:s.username,"onUpdate:value":e[0]||(e[0]=t=>s.username=t),maxlength:11,onKeydown:p(l,["enter"])},null,8,["value","onKeydown"])]),_:1}),a(n(c),{path:"sms_code","show-label":!1},{default:r(()=>[a(n(m),{placeholder:"验证码",value:s.sms_code,"onUpdate:value":e[1]||(e[1]=t=>s.sms_code=t),maxlength:6,onKeydown:p(l,["enter"])},null,8,["value","onKeydown"]),a(u,{tertiary:"",class:"mt-l5",onClick:S,disabled:i.value>0},{default:r(()=>[f(" 获取验证码 "),q(g("span",null,"("+T(i.value)+"s)",513),[[E,i.value>0]])]),_:1},8,["disabled"])]),_:1}),a(n(c),{path:"nickname","show-label":!1},{default:r(()=>[a(n(m),{placeholder:"设置昵称",value:s.nickname,"onUpdate:value":e[2]||(e[2]=t=>s.nickname=t),onKeydown:p(l,["enter"])},null,8,["value","onKeydown"])]),_:1}),a(n(c),{path:"password","show-label":!1},{default:r(()=>[a(n(m),{placeholder:"设置密码",type:"password","show-password-on":"click",value:s.password,"onUpdate:value":e[3]||(e[3]=t=>s.password=t),onKeydown:p(l,["enter"])},null,8,["value","onKeydown"])]),_:1}),a(u,{type:"primary",size:"large",block:"",class:"mt-t20",onClick:l,loading:s.loading},{default:r(()=>[f(" 立即注册 ")]),_:1},8,["loading"])]),_:1},8,["model"]),g("div",L,[a(u,{text:"",color:"#409eff",onClick:e[4]||(e[4]=t=>n(w).push("/auth/forget"))},{default:r(()=>[f(" 找回密码 ")]),_:1}),a(u,{text:"",color:"#409eff",onClick:e[5]||(e[5]=t=>n(w).push("/auth/login"))},{default:r(()=>[f(" 已有账号，立即登录? ")]),_:1})])])])}}},P=x(Z,[["__scopeId","data-v-f8fedcea"]]);export{P as default};
