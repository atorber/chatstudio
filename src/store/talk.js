import { defineStore } from "pinia";
import { ServeGetTalkList } from "@/api/chat";
import { formatTalkItem } from "@/utils/talk";
import { useEditorDraftStore } from "./index";

const ttime = (datetime) => {
  if (datetime === undefined || datetime === "") {
    return new Date().getTime();
  }

  return new Date(datetime.replace(/-/g, "/")).getTime();
};

export const useTalkStore = defineStore("talk", {
  state: () => ({
    // 加载状态[1:未加载;2:加载中;3:加载完成;4:加载失败;]
    loadStatus: 2,

    // 会话列表
    items: [],
  }),
  getters: {
    // 过滤所有置顶对话列表
    topItems: (state) => state.items.filter((item) => item.is_top === 1),

    // 对话列表
    talkItems: (state) =>
      state.items.sort((a, b) => ttime(b.updated_at) - ttime(a.updated_at)),

    // 消息未读数总计
    talkUnreadNum: (state) =>
      state.items.reduce((total, item) => total + parseInt(item.unread_num), 0),
  },
  actions: {
    findItem(index_name) {
      return this.items.find((item) => item.index_name === index_name);
    },

    // 更新对话节点
    updateItem(params) {
      const item = this.items.find(
        (item) => item.index_name === params.index_name
      );

      item && Object.assign(item, params);
    },

    // 新增对话节点
    addItem(params) {
      this.items = [params, ...this.items];
    },

    // 移除对话节点
    delItem(index_name) {
      const i = this.items.findIndex((item) => item.index_name === index_name);

      if (i >= 0) {
        this.items.splice(i, 1);
      }

      this.items = [...this.items];
    },

    // 更新对话消息
    updateMessage(params) {
      const item = this.items.find(
        (item) => item.index_name === params.index_name
      );

      if (item) {
        item.unread_num++;
        item.msg_text = params.msg_text;
        item.updated_at = params.updated_at;
      }
    },

    // 更新联系人备注
    setRemark(params) {
      const item = this.items.find(
        (item) => item.index_name === `1_${params.user_id}`
      );

      item && (item.remark = params.remark);
    },

    // 加载会话列表
    async loadTalkList() {
      this.loadStatus = 2;

      const response = await ServeGetTalkList();
      const editorDraftStore = useEditorDraftStore();
      const { code, data } = response;
      if (code === 200) {
        this.items = data.items.map((item) => {
          const value = formatTalkItem(item);

          const draft = editorDraftStore.items[value.index_name];
          if (draft) {
            value.draft_text = JSON.parse(draft).text || "";
          }

          if (value.is_robot === 1) {
            value.is_online = 1;
          }

          return value;
        });

        this.loadStatus = 3;
      } else {
        this.loadStatus = 4;
      }

      if (!code) {
        this.loadStatus = 4;
      }
    },
  },
});