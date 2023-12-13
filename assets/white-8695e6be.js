import{d as W,b6 as R,r as m,m as _,V,b as d,c as F,i as B,g as a,w as o,a as s,A as f,W as $,k as A,X as u,b8 as E,F as G,v as L,_ as M}from"./index-8e0b9476.js";import{T as O,u as j,B as J}from"./useForm-ee8571b5.js";import{S as K,a as X,b as z}from"./whitelist-93a61257.js";import{b as H}from"./columns-6ddd926c.js";import{P as Q}from"./PageTitle-51d0b4d1.js";import{P as Y}from"./PlusOutlined-a07f7215.js";import"./vuedraggable.umd-8e0bfff1.js";import"./SettingOutlined-c5ca1532.js";const Z=W({__name:"white",setup(ee){const w={name:{required:!0,trigger:["blur","input"],message:"请输入名称"},address:{required:!0,trigger:["blur","input"],message:"请输入地址"},date:{type:"number",required:!0,trigger:["blur","change"],message:"请选择日期"}},y=[{field:"name",labelMessage:"这是一个提示",component:"NInput",label:"序号",componentProps:{placeholder:"请输入记录ID",onInput:e=>{console.log(e)}},rules:[{required:!0,message:"请输入姓名",trigger:["blur"]}]},{field:"mobile",component:"NInputNumber",label:"手机",componentProps:{placeholder:"请输入手机号码",showButton:!1,onInput:e=>{console.log(e)}}},{field:"type",component:"NSelect",label:"类型",componentProps:{placeholder:"请选择类型",options:[{label:"好友",value:1},{label:"群",value:2}],onUpdateValue:e=>{console.log(e)}}},{field:"makeDate",component:"NDatePicker",label:"预约时间",defaultValue:118313526e4,componentProps:{type:"date",clearable:!0,onUpdateValue:e=>{console.log(e)}}},{field:"makeTime",component:"NTimePicker",label:"停留时间",componentProps:{clearable:!0,onUpdateValue:e=>{console.log(e)}}},{field:"status",label:"状态",slot:"statusSlot"},{field:"makeProject",component:"NCheckbox",label:"预约项目",componentProps:{placeholder:"请选择预约项目",options:[{label:"种牙",value:1},{label:"补牙",value:2},{label:"根管",value:3}],onUpdateChecked:e=>{console.log(e)}}},{field:"makeSource",component:"NRadioGroup",label:"来源",componentProps:{options:[{label:"网上",value:1},{label:"门店",value:2}],onUpdateChecked:e=>{console.log(e)}}}],k=R(),g=m(null),h=m(),i=m(!1),b=m(!1),n=_({app:"活动管理|act",type:"",id:"",alias:"",quota:100,info:""}),C=_({width:220,title:"操作",key:"action",fixed:"right",render(e){return V(O,{style:"button",actions:[{label:"删除",onClick:x.bind(null,e),ifShow:()=>!0,auth:["basic_list"]},{label:"编辑",onClick:S.bind(null,e),ifShow:()=>!0,auth:["basic_list"]}],dropDownActions:[{label:"启用",key:"enabled",ifShow:()=>!0},{label:"禁用",key:"disabled",ifShow:()=>!0}],select:l=>{window.$message.info(`您点击了，${l} 按钮`)}})}}),[le,{getFieldsValue:P}]=j({gridProps:{cols:"1 s:1 m:2 l:3 xl:4 2xl:4"},labelWidth:80,schemas:y});function N(){i.value=!0}const U=async e=>{const{data:l}=await X({...P(),...e,fieldName:"app",value:"活动管理|act"});return console.log("data",JSON.stringify(l)),l};function D(e){console.log(e)}function p(){h.value.reload()}function I(e){e.preventDefault(),b.value=!0,g.value.validate(async l=>{if(l)window.$message.error("请填写完整信息");else{const v=await z(n);console.log("新建res",v),window.$message.success("新建成功"),setTimeout(()=>{i.value=!1,p()})}b.value=!1})}function S(e){console.log("点击了编辑",e),k.push({name:"basic-info",params:{id:e.id}})}async function x(e){console.log("点击了删除",e);const l=await K({recordId:e.recordId});console.log("删除res",l),l.code===200?(window.$message.success("删除成功"),p()):window.$message.error("删除失败"),p()}return(e,l)=>{const v=d("n-icon"),c=d("n-button"),r=d("n-input"),T=d("n-space"),q=d("n-modal");return F(),B(G,null,[a(Q,{title:"白名单"}),a(s(E),{bordered:!1,class:"proCard"},{default:o(()=>[a(s(J),{columns:s(H),request:U,"row-key":t=>t.id,ref_key:"actionRef",ref:h,actionColumn:C,"onUpdate:checkedRowKeys":D,"scroll-x":1090},{tableTitle:o(()=>[a(c,{type:"primary",onClick:N},{icon:o(()=>[a(v,null,{default:o(()=>[a(s(Y))]),_:1})]),default:o(()=>[f(" 新建 ")]),_:1})]),toolbar:o(()=>[a(c,{type:"primary",onClick:p},{default:o(()=>[f("刷新数据")]),_:1})]),_:1},8,["columns","row-key","actionColumn"]),a(q,{show:i.value,"onUpdate:show":l[8]||(l[8]=t=>i.value=t),"show-icon":!1,preset:"dialog",title:"新建"},{action:o(()=>[a(T,null,{default:o(()=>[a(c,{onClick:l[7]||(l[7]=()=>i.value=!1)},{default:o(()=>[f("取消")]),_:1}),a(c,{type:"info",loading:b.value,onClick:I},{default:o(()=>[f("确定")]),_:1},8,["loading"])]),_:1})]),default:o(()=>[a(s($),{model:n,rules:w,ref_key:"formRef",ref:g,"label-placement":"left","label-width":125,class:"py-4"},{default:o(()=>[A(a(s(u),{label:"所属应用",path:"app"},{default:o(()=>[a(r,{placeholder:"请输入所属应用",value:n.app,"onUpdate:value":l[0]||(l[0]=t=>n.app=t)},null,8,["value"])]),_:1},512),[[L,!1]]),a(s(u),{label:"类型",path:"type"},{default:o(()=>[a(r,{placeholder:"可选项：好友、群",value:n.type,"onUpdate:value":l[1]||(l[1]=t=>n.type=t)},null,8,["value"])]),_:1}),a(s(u),{label:"昵称/群名称",path:"name"},{default:o(()=>[a(r,{placeholder:"请输入昵称/群名称",value:n.name,"onUpdate:value":l[2]||(l[2]=t=>n.name=t)},null,8,["value"])]),_:1}),a(s(u),{label:"好友ID/群ID(选填)",path:"type"},{default:o(()=>[a(r,{placeholder:"请输入好友ID/群ID",value:n.id,"onUpdate:value":l[3]||(l[3]=t=>n.id=t)},null,8,["value"])]),_:1}),a(s(u),{label:"好友备注(选填)",path:"alias"},{default:o(()=>[a(r,{placeholder:"请输入好友备注",value:n.alias,"onUpdate:value":l[4]||(l[4]=t=>n.alias=t)},null,8,["value"])]),_:1}),a(s(u),{label:"配额(选填)",path:"quota"},{default:o(()=>[a(r,{placeholder:"请输入配额",value:n.quota,"onUpdate:value":l[5]||(l[5]=t=>n.quota=t)},null,8,["value"])]),_:1}),a(s(u),{label:"备注说明(选填)",path:"info"},{default:o(()=>[a(r,{type:"textarea",placeholder:"请输入备注说明",value:n.info,"onUpdate:value":l[6]||(l[6]=t=>n.info=t)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["show"])]),_:1})],64)}}});const de=M(Z,[["__scopeId","data-v-c58cae86"]]);export{de as default};