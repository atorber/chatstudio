import{_ as T,aA as N,r as b,s as B,p as H,x as J,o as F,b as p,ab as V,k as S,c as u,i as f,g as o,w as i,v as L,F as P,y as U,f as n,t as h,a,B as j,A,bv as O,bw as Q,at as D,K as E,L as K,bx as W,by as X,bz as Y,V as Z,a0 as ee,bA as se,bB as ne,e as oe,z as te,ad as G,ac as ae}from"./index-8e0b9476.js";import{_ as M}from"./no-data-bde0995b.js";import{C as R}from"./CheckSmall-3711700d.js";import{C as q}from"./Close-ffc0b0c5.js";const ce=l=>(E("data-v-de5bca49"),l=l(),K(),l),ie={style:{"min-height":"300px"}},le=ce(()=>n("img",{src:M,alt:""},null,-1)),re=["onClick"],de=["onClick"],pe={class:"username"},_e={class:"time"},ue={class:"remark text-ellipsis"},me={class:"tools"},ve={__name:"FriendApply",setup(l){const _=N(),r=b([]),k=b(!0),$=B("$user"),m=H(()=>_.isContactApply),v=(s=!1)=>{Q().then(t=>{t.code==200&&(r.value=t.data.items||[],s&&(_.isContactApply=!1))}).finally(()=>{k.value=!1})},x=s=>{$(s.user_id)},z=D(s=>{let t=window.$message.loading("请稍等，正在处理");W({apply_id:s.id,remark:s.nickname}).then(({code:c,message:y})=>{t.destroy(),c==200?(v(),window.$message.success("已同意")):window.$message.info(y)})},1e3),d=D(s=>{let t=window.$message.loading("请稍等，正在处理");X({apply_id:s.id,remark:"拒绝"}).then(({code:c,message:y})=>{t.destroy(),c==200?(v(),window.$message.success("已拒绝")):window.$message.info(y)})},1e3);return J(m,()=>{v(!1)}),F(()=>{v(!0)}),(s,t)=>{const c=p("n-empty"),y=p("im-avatar"),w=p("n-icon"),C=p("n-button"),I=V("loading");return S((u(),f("section",ie,[S(o(c,{size:"200",description:"暂无相关数据",style:{"margin-top":"10%"}},{icon:i(()=>[le]),_:1},512),[[L,r.value.length==0]]),(u(!0),f(P,null,U(r.value,e=>(u(),f("div",{class:"item",key:e.id},[n("div",{class:"avatar",onClick:g=>x(e)},[o(y,{size:40,src:e.avatar,username:e.nickname},null,8,["src","username"])],8,re),n("div",{class:"content pointer o-hidden",onClick:g=>x(e)},[n("div",pe,[n("span",null,h(e.nickname),1),n("span",_e,h(a(j)(e.created_at,"{m}/{d} {h}:{i}")),1)]),n("div",ue,"备注: "+h(e.remark),1)],8,de),n("div",me,[o(C,{onClick:g=>a(z)(e),strong:"",secondary:"",circle:"",type:"primary",size:"small"},{icon:i(()=>[o(w,{component:a(R)},null,8,["component"])]),_:2},1032,["onClick"]),o(a(O),{onPositiveClick:g=>a(d)(e)},{trigger:i(()=>[o(C,{strong:"",secondary:"",circle:"",type:"tertiary",size:"small"},{icon:i(()=>[o(w,{component:a(q)},null,8,["component"])]),_:1})]),default:i(()=>[A(" 确认要拒绝申请吗？ ")]),_:2},1032,["onPositiveClick"])])]))),128))])),[[I,k.value]])}}},ye=T(ve,[["__scopeId","data-v-de5bca49"]]);const ge=l=>(E("data-v-488d21bd"),l=l(),K(),l),he={style:{"min-height":"300px"}},fe=ge(()=>n("img",{src:M,alt:""},null,-1)),ke=["onClick"],$e=["onClick"],we={class:"username"},Ce={class:"time"},be={class:"remark text-ellipsis"},Ae={class:"tools"},xe={__name:"GroupApply",setup(l){const _=N(),r=b([]),k=b(!0),$=B("$user"),m=(d=!1)=>{Y().then(s=>{s.code==200&&(r.value=s.data.items||[])}).finally(()=>{k.value=!1})},v=d=>{$(d.user_id)},x=D(d=>{let s=window.$message.loading("请稍等，正在处理");ne({apply_id:d.id}).then(t=>{s.destroy(),t.code==200?window.$message.success("已同意"):window.$message.info(t.message),m()})},1e3),z=d=>{let s="",t=window.$dialog.create({title:"拒绝入群申请",content:()=>Z(ee,{defaultValue:"",placeholder:"请填写拒绝原因",style:{marginTop:"20px"},onInput:c=>s=c,autofocus:!0}),negativeText:"取消",positiveText:"提交",onPositiveClick:()=>(s.length&&(t.loading=!0,se({apply_id:d.id,remark:s}).then(c=>{t.destroy(),c.code==200?window.$message.success("已拒绝"):window.$message.info(c.message),m()})),!1)})};return F(()=>{m(!0),_.isGroupApply=!1}),(d,s)=>{const t=p("n-empty"),c=p("im-avatar"),y=p("n-tag"),w=p("n-icon"),C=p("n-button"),I=V("loading");return S((u(),f("section",he,[S(o(t,{style:{"margin-top":"10%"},size:"200",description:"暂无相关数据"},{icon:i(()=>[fe]),_:1},512),[[L,r.value.length==0]]),(u(!0),f(P,null,U(r.value,e=>(u(),f("div",{class:"item",key:e.id},[n("div",{class:"avatar",onClick:g=>v(e)},[o(c,{size:40,src:e.avatar,username:e.nickname},null,8,["src","username"])],8,ke),n("div",{class:"content pointer o-hidden",onClick:g=>v(e)},[n("div",we,[n("span",null,[o(y,{bordered:!1,size:"small",type:"primary"},{default:i(()=>[A(h(e.group_name),1)]),_:2},1024),A(" "+h(e.nickname),1)]),n("span",Ce,h(a(j)(e.created_at,"{m}/{d} {h}:{i}")),1)]),n("div",be,"备注: "+h(e.remark),1)],8,$e),n("div",Ae,[o(C,{onClick:g=>a(x)(e),strong:"",secondary:"",circle:"",size:"small",type:"primary"},{icon:i(()=>[o(w,{component:a(R)},null,8,["component"])]),_:2},1032,["onClick"]),o(C,{onClick:g=>z(e),strong:"",secondary:"",circle:"",type:"tertiary",size:"small"},{icon:i(()=>[o(w,{component:a(q)},null,8,["component"])]),_:2},1032,["onClick"])])]))),128))])),[[I,k.value]])}}},Se=T(xe,[["__scopeId","data-v-488d21bd"]]),ze={class:"el-container is-vertical height100"},Ie={class:"el-header me-view-header bdr-b"},De={class:"el-main me-scrollbar me-scrollbar-thumb"},Fe={__name:"apply",setup(l){const _=b("friend"),r={friend:ye,group:Se};return(k,$)=>(u(),f("section",ze,[n("header",Ie,[o(a(ae),{value:_.value,"onUpdate:value":$[0]||($[0]=m=>_.value=m)},{default:i(()=>[o(a(G),{name:"friend"},{default:i(()=>[A(" 好友申请 ")]),_:1}),o(a(G),{name:"group"},{default:i(()=>[A(" 入群申请 ")]),_:1})]),_:1},8,["value"])]),n("main",De,[(u(),oe(te(r[_.value])))])]))}};export{Fe as default};