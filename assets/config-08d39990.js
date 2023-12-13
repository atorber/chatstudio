import{r,m as b,x as P,c as n,e as T,w as i,f as m,g as _,A as S,a as l,bb as w,i as y,y as g,X as U,a0 as D,l as A,bg as Q,F as h,W as x,a1 as C,bi as K,_ as R,aA as V,b6 as G,bj as W,b as I,bk as H,t as v,K as B,L}from"./index-8e0b9476.js";import"./AvatarCropper.vue_vue_type_style_index_0_scoped_9728916b_lang-55d0d351.js";const X={style:{width:"100%","text-align":"right"}},Y={__name:"EditorConfig",props:{modelValue:Boolean,formItems:Object},emits:["update:modelValue","close"],setup(o,{emit:u}){const k=o,M=u,d=r();let c=b();const t=r({});P(()=>k.formItems,e=>{console.log("newVal: ",e),e&&Array.isArray(e.items)&&(t.value=r({}),e.items.forEach(a=>{a.value==="true"?t[a.key]=!0:a.value==="false"?t[a.key]=!1:t[a.key]=a.value}),console.log("formModel: ",t))},{immediate:!0});const E={oldPassword:{required:!0,trigger:["blur","input"],message:"登录密码不能为空！"},newPassword:{required:!0,trigger:["blur","input"],message:"新密码不能为空！"},newPassword2:{required:!0,trigger:["blur","change"],validator(e,a){if(a){if(c.newPassword!=c.newPassword2)return new Error("两次密码填写不一致！")}else return new Error("确认密码不能为空！");return!0}}},O=r(!1),p=()=>{O.value=!0,console.log("model: ",t);for(const a in t)if(Object.hasOwnProperty.call(t,a)){const s=t[a];typeof s=="boolean"&&(t[a]=s?"true":"false"),s===void 0&&(t[a]="")}let e=K(t);e.then(a=>{a.code==200?(window.$message.success("密码修改成功"),M("update:modelValue",!1)):window.$message.warning(a.message)}),e.finally(()=>{O.value=!1})},f=e=>{e.preventDefault(),d.value.validate(a=>{!a&&p()})};return(e,a)=>(n(),T(l(C),{show:o.modelValue,preset:"card",title:o.formItems.name,class:"modal-radius",style:{"max-width":"400px"},"on-update:show":s=>{e.$emit("update:modelValue",s)}},{footer:i(()=>[m("div",X,[_(l(w),{type:"tertiary",onClick:a[0]||(a[0]=s=>e.$emit("update:modelValue",!1))},{default:i(()=>[S(" 取消 ")]),_:1}),_(l(w),{type:"primary",class:"mt-l15",loading:O.value,onClick:f},{default:i(()=>[S(" 保存修改 ")]),_:1},8,["loading"])])]),default:i(()=>[_(l(x),{ref_key:"formRef",ref:d,model:t.value,rules:E},{default:i(()=>[(n(!0),y(h,null,g(o.formItems.items,s=>(n(),T(l(U),{label:s.name,path:"item.key",key:s.key},{default:i(()=>[typeof s.value!="boolean"?(n(),T(l(D),{key:0,placeholder:s.desc,type:"text",value:s.value,"onUpdate:value":N=>s.value=N},null,8,["placeholder","value","onUpdate:value"])):A("",!0),typeof s.value=="boolean"?(n(),T(l(Q),{key:1,size:"medium",value:s.value,"onUpdate:value":N=>s.value=N},null,8,["value","onUpdate:value"])):A("",!0)]),_:2},1032,["label"]))),128))]),_:1},8,["model"])]),_:1},8,["show","title","on-update:show"]))}};const q=o=>(B("data-v-3f5b76c3"),o=o(),L(),o),F=q(()=>m("h3",{class:"title"},"系统配置",-1)),j={class:"view-box"},J={class:"content"},$={class:"name"},z={class:"desc text-ellipsis"},Z={class:"tools"},ee={__name:"config",setup(o){let u=r(!1),k={};V(),G(),r(!1);const M=(c,t)=>{console.log("editItem",t),k={name:c,items:t},u.value=!0},d=r({Wechaty:[{name:"Puppet",key:"WECHATY_PUPPET",value:"wechaty-puppet-service",desc:`可选值：
wechaty-puppet-wechat4u
wechaty-puppet-wechat
wechaty-puppet-xp
wechaty-puppet-engine\\\\u0000
wechaty-puppet-padlocal
wechaty-puppet-service`,syncStatus:"未同步",lastOperationTime:1698763176337,action:"选择操作",id:"recVIK4LlX2hu"},{name:"Token",key:"WECHATY_TOKEN",value:"",desc:"使用wechaty-puppet-padlocal、wechaty-puppet-service时需配置此token",syncStatus:"未同步",lastOperationTime:1698763176337,action:"选择操作",id:"recxfQW4LltPL"}],基础配置:[{name:"管理群ID",key:"ADMINROOM_ADMINROOMID",desc:"管理群的ID，只有在此群内发布管理指令才会生效",syncStatus:"未同步",lastOperationTime:1698763176338,action:"选择操作",id:"recSpVOJ2VpuK"},{name:"管理群名称",key:"ADMINROOM_ADMINROOMTOPIC",value:"",desc:"管理群名称，只有在此群内发布管理指令才会生效",syncStatus:"未同步",lastOperationTime:1698763176338,action:"选择操作",id:"recNMre3ekU7S"},{name:"机器人微信号",key:"BASE_BOT_ID",value:"",desc:"机器人微信号，登录成功后自动更新",syncStatus:"已同步",lastOperationTime:1701182607719,action:"选择操作",id:"rechx9jc0TYeb"},{name:"机器人微信昵称",key:"BASE_BOT_NAME",value:"",desc:"机器人微信昵称，登录成功后自动更新",syncStatus:"已同步",lastOperationTime:1701182607719,action:"选择操作",id:"recIxTLzzwq0F"}],维格表:[{name:"启用维格表",key:"VIKA_USEVIKA",value:"false",desc:"启用维格表托管配置",syncStatus:"未同步",lastOperationTime:1698763176338,action:"选择操作",id:"recsMTURF8f8b"},{name:"消息上传到维格表",key:"VIKA_UPLOADMESSAGETOVIKA",value:"true",desc:"开启后消息记录会自动上传到维格表的【消息记录】表",syncStatus:"未同步",lastOperationTime:1698763176338,action:"选择操作",id:"recCF9KeDlYfJ"}],智能问答:[{name:"启用自动问答",key:"AUTOQA_AUTOREPLY",value:"false",desc:"开启后可以使用微信对话平台只能问答",syncStatus:"未同步",lastOperationTime:1698763176338,action:"选择操作",id:"recOHPSV1UXed"}],微信对话开放平台:[{name:"Token",key:"WXOPENAI_TOKEN",desc:"微信对话开放平台中获取",syncStatus:"未同步",lastOperationTime:1698763176338,action:"选择操作",id:"rect1Ow10AyEV"},{name:"EncodingAESKey",key:"WXOPENAI_ENCODINGAESKEY",desc:"微信对话开放平台中获取",syncStatus:"未同步",lastOperationTime:1698763177863,action:"选择操作",id:"recqyJ7IfqiBf"},{name:"APPID",key:"WXOPENAI_APPID",desc:"微信对话开放平台中获取，应用ID",syncStatus:"未同步",lastOperationTime:1698763177863,action:"选择操作",id:"recL8wbMWUAhZ"},{name:"管理员ID",key:"WXOPENAI_MANAGERID",desc:"微信对话开放平台中获取",syncStatus:"未同步",lastOperationTime:1698763177863,action:"选择操作",id:"rec91DsuOOtFS"}],ChatGPT:[{name:"Key",key:"CHATGPT_KEY",desc:"openai平台获取",syncStatus:"未同步",lastOperationTime:1698763177863,action:"选择操作",id:"recquS5la77Zv"},{name:"Endpoint",key:"CHATGPT_ENDPOINT",desc:"openai平台获取",syncStatus:"未同步",lastOperationTime:1698763177863,action:"选择操作",id:"recEj8z5PEdIA"}],MQTT连接:[{name:"MQTT推送",key:"MQTT_MQTTMESSAGEPUSH",value:"true",desc:"开启后消息会发送到MQTT队列，需要先配置MQTT配置项",syncStatus:"未同步",lastOperationTime:1698763177864,action:"选择操作",id:"rec98hutN5hSo"},{name:"MQTT控制",key:"MQTT_MQTTCONTROL",value:"true",desc:"开启可以通过MQTT控制微信，需要先配置MQTT配置项",syncStatus:"未同步",lastOperationTime:1698763177864,action:"选择操作",id:"reck3GTU7v0bP"},{name:"用户名",key:"MQTT_USERNAME",desc:"MQTT连接配置信息，推荐使用百度云的物联网核心套件",syncStatus:"未同步",lastOperationTime:1698763177864,action:"选择操作",id:"recEzimaSrgid"},{name:"密码",key:"MQTT_PASSWORD",desc:"MQTT连接配置信息，推荐使用百度云的物联网核心套件",syncStatus:"未同步",lastOperationTime:1698763177864,action:"选择操作",id:"recbYcgDOygbW"},{name:"接入地址",key:"MQTT_ENDPOINT",value:"broker.emqx.io",desc:"MQTT连接配置信息，推荐使用百度云的物联网核心套件",syncStatus:"未同步",lastOperationTime:1698763177864,action:"选择操作",id:"recEDUfGkhWSH"},{name:"端口号",key:"MQTT_PORT",value:"8883",desc:"MQTT连接配置信息，推荐使用百度云的物联网核心套件",syncStatus:"未同步",lastOperationTime:1698763179331,action:"选择操作",id:"rec5OQN3xX3ih"},{name:"端口号SSL",key:"MQTT_PORT_SSL",value:"8084",desc:"MQTT连接配置信息，推荐使用百度云的物联网核心套件",syncStatus:"未同步",lastOperationTime:1698839126254,action:"选择操作",id:"recubXdlLFeXe"}],HTTP消息推送:[{name:"WebHook推送",key:"WEBHOOK_WEBHOOKMESSAGEPUSH",value:"false",desc:"TODO-开启后系统将机器人事件消息推送到指定的地址",syncStatus:"未同步",lastOperationTime:1698763179331,action:"选择操作",id:"rec0nOQfpNNUj"},{name:"地址",key:"WEBHOOK_URL",desc:"格式 http://baidu.com/abc,多个地址使用英文逗号隔开，使用post请求推送",syncStatus:"未同步",lastOperationTime:1698763179331,action:"选择操作",id:"recUWJLjmU2nO"},{name:"Token",key:"WEBHOOK_TOKEN",desc:"当填写token时优先使用token，其次用户名+密码，再次无鉴权请求",syncStatus:"未同步",lastOperationTime:1698763179331,action:"选择操作",id:"recHh8s81aZXO"},{name:"用户名",key:"WEBHOOK_USERNAME",desc:"当填写token时优先使用token，其次用户名+密码，再次无鉴权请求",syncStatus:"未同步",lastOperationTime:1698763179331,action:"选择操作",id:"recGReHNVx6N4"},{name:"密码",key:"WEBHOOK_PASSWORD",desc:"当填写token时优先使用token，其次用户名+密码，再次无鉴权请求",syncStatus:"未同步",lastOperationTime:1698763179331,action:"选择操作",id:"recVM7JzpC4Zq"}],语雀:[{name:"token",key:"YUQUE_TOKEN",desc:"语雀知识库token",syncStatus:"未同步",lastOperationTime:1698763179331,action:"选择操作",id:"recslxPL1lG3G"},{name:"空间名称",key:"YUQUE_NAMESPACE",desc:"语雀知识库空间名称",syncStatus:"未同步",lastOperationTime:1698763179331,action:"选择操作",id:"recQXRHkGA2tu"}],消息加密:[{name:"下发消息加密",key:"MESSAGE_ENCRYPT",value:"false",syncStatus:"未同步",lastOperationTime:1698763179331,action:"选择操作",id:"rec9DeXtq6PLY"},{name:"消息加密密钥",key:"MESSAGE_ENCODINGAESKEY",value:"X00fcQHkvRkNUdJefu4FD6pym2oIvs63Y5NP3pnZ5po",desc:"消息加密密钥，vika推送地址https://3sewxanjdvsbp.cfc-execute.bj.baidubce.com/mqtt",syncStatus:"未同步",lastOperationTime:1698763179331,action:"选择操作",id:"recL7JiypBJPv"}]});return W().then(({data:c})=>{d.value=r(c),console.log("configGroup: ",d.value)}),P(()=>d,c=>{console.log("configGroup 更新: ",c)},{immediate:!0}),(c,t)=>{const E=I("block"),O=I("n-button");return n(),y(h,null,[F,m("div",j,[(n(!0),y(h,null,g(d.value.value,(p,f)=>(n(),y("div",{class:"view-list",key:f},[m("div",J,[m("div",$,v(f),1),m("div",z,[(n(!0),y(h,null,g(p,e=>(n(),y("text",{class:"",selectable:"false",space:"false",decode:"false",key:e.id},[typeof e.value!="boolean"?(n(),T(E,{key:0},{default:i(()=>[S(v(e.name)+" : "+v(e.value||"未设置")+"     ",1)]),_:2},1024)):A("",!0),typeof e.value=="boolean"?(n(),T(E,{key:1},{default:i(()=>[S(v(e.name)+" : "+v(e.value?"开":"关")+"     ",1)]),_:2},1024)):A("",!0)]))),128))])]),m("div",Z,[_(O,{type:"primary",text:"",onClick:e=>M(f,p)},{default:i(()=>[S(" 修改 ")]),_:2},1032,["onClick"])])]))),128))]),_(Y,{modelValue:l(u),"onUpdate:modelValue":t[0]||(t[0]=p=>H(u)?u.value=p:u=p),formItems:l(k)},null,8,["modelValue","formItems"])],64)}}},se=R(ee,[["__scopeId","data-v-3f5b76c3"]]);export{se as default};