import{b as S,aW as I,cg as K,a2 as N,r as q,d as C,e as u,f as R,k as V,i as a,c as s,w as t,j as p,aZ as m,H as f,C as c,b2 as B,x as L,y as U,ch as $,ci as j,cj as z}from"./index-6fac5f50.js";import{S as F}from"./auth-efc4c23f.js";const w=l=>(L("data-v-37f10c0d"),l=l(),U(),l),T={class:"el-container is-vertical login-box login"},A=w(()=>a("header",{class:"el-header box-header"},"快捷登录",-1)),D={class:"el-main",style:{padding:"3px"}},E={class:"el-footer",style:{height:"90px"}},H=w(()=>a("span",{style:{color:"#ccc","font-weight":"300"}},[c(" 操作说明:"),a("br"),c("1.在维格云获取token及空间名称"),a("br"),c("2.启动chatflow服务端")],-1)),M={__name:"login",setup(l){const h=I(),_=K(),b=N(),g=q(),k={username:{required:!0,trigger:["blur","input"],message:"账号不能为空"},password:{required:!0,trigger:["blur","input"],message:"密码不能为空"}},e=C({username:"",password:"",loading:!1}),y=()=>{if(e.loading=!0,e.username="18798272054",e.password="admin123",!e.spacename||!e.token)window.$message.warning("请输入维格表空间名称及token"),e.loading=!1;else{const n=F({mobile:e.username,password:e.password,token:e.token,spacename:e.spacename,platform:"web"});console.debug("请求登录onLogin",n),n.then(o=>{console.debug("请求登录：",o),o.code===200?(window.$message.success("登录成功"),console.debug(`设置access_token缓存...
`),j(o.data.access_token,o.data.expires_in),console.debug(`连接ws...
`),z.connect(),console.debug(`载入用户设置...
`),h.loadSetting(),console.debug(`跳转到控制台...
`),console.debug("跳转到",_.query.redirect||"/"),b.push(_.query.redirect||"/").catch(r=>{console.error(r)})):window.$message.warning(o.message)}),n.finally(()=>{console.debug("登录请求结束"),e.loading=!1})}},d=n=>{n.preventDefault(),$(!0),g.value.validate(o=>{!o&&y()})};return(n,o)=>{const r=u("n-input"),v=u("n-button"),x=u("n-divider");return R(),V("section",T,[A,a("main",D,[s(p(B),{ref_key:"formRef",ref:g,size:"large",model:e,rules:k},{default:t(()=>[s(p(m),{path:"spacename","show-label":!1},{default:t(()=>[s(r,{placeholder:"请输入维格表spacename","show-password-on":"click",value:e.spacename,"onUpdate:value":o[0]||(o[0]=i=>e.spacename=i),onKeydown:f(d,["enter"])},null,8,["value","onKeydown"])]),_:1}),s(p(m),{path:"token","show-label":!1},{default:t(()=>[s(r,{placeholder:"请输入维格表token",type:"password","show-password-on":"click",value:e.token,"onUpdate:value":o[1]||(o[1]=i=>e.token=i),onKeydown:f(d,["enter"]),autocomplete:"current-password"},null,8,["value","onKeydown"])]),_:1}),s(v,{type:"primary",size:"large",block:"",class:"mt-t20",onClick:d,loading:e.loading},{default:t(()=>[c(" 立即登录 ")]),_:1},8,["loading"])]),_:1},8,["model"])]),a("footer",E,[s(x,{style:{height:"30px",margin:"0"}},{default:t(()=>[H]),_:1})])])}}},G=S(M,[["__scopeId","data-v-37f10c0d"]]);export{G as default};