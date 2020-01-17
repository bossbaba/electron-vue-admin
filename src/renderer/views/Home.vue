<template>
  <div>
    <mu-appbar style="width: 100vw;">
      <mu-button slot="right" icon class="marginright20">
        <mu-badge circle color="transparent" class="bage">
          <span slot="content" class="dot"></span>
          <mu-menu cover>
            <mu-icon value="message"></mu-icon>
            <mu-list slot="content">
              <mu-list-item button>
                <mu-list-item-title class="center">
                  <mu-icon value="settings"></mu-icon>
                  <span>系统消息</span>
                </mu-list-item-title>
              </mu-list-item>
              <mu-list-item button>
                <mu-list-item-title class="center">
                  <mu-icon value="hearing"></mu-icon>
                  <span>其他消息</span>
                </mu-list-item-title>
              </mu-list-item>
            </mu-list>
          </mu-menu>
        </mu-badge>
      </mu-button>

      <mu-avatar slot="right" style="margin-right:20px;cursor:pointer;">
        <img src="https://muse-ui.org/img/uicon.ac3913bf.jpg" />
      </mu-avatar>
      <mu-button icon slot="right" @click="open = !open">
        <mu-icon value="menu"></mu-icon>
      </mu-button>
    </mu-appbar>

    <mu-drawer
      style="background:#f5f5f5;"
      :z-depth="24"
      :open.sync="open"
      :docked="docked"
      :right="position === 'right'"
    >
      <mu-list>
        <mu-list-item button>
          <mu-list-item-title class="drawer-font">
            <mu-flex>
              <mu-icon color="#09f" class="marginr24" value="dashboard"></mu-icon>
              <span>商品管理</span>
            </mu-flex>
          </mu-list-item-title>
        </mu-list-item>
        <mu-list-item button @click="gotoLogin">
          <mu-list-item-title>
            <mu-flex>
              <mu-avatar class="marginr24" size="24">
                <img src="https://muse-ui.org/img/uicon.ac3913bf.jpg" />
              </mu-avatar>
              <span class="drawer-font">退出当前账号</span>
            </mu-flex>
          </mu-list-item-title>
        </mu-list-item>
        <mu-list-item button @click="cleanCache">
          <mu-list-item-title class="drawer-font">
            <mu-flex>
              <mu-icon color="red" class="marginr24" value="remove_circle"></mu-icon>
              <span>清除缓存</span>
            </mu-flex>
          </mu-list-item-title>
        </mu-list-item>
        <mu-list-item @click="alertModal" button>
          <mu-list-item-title class="drawer-font">
            <mu-flex>
              <mu-icon color="red" class="marginr24" value="power_settings_new"></mu-icon>
              <span>关闭</span>
            </mu-flex>
          </mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </mu-drawer>
    <Dialog title="提示" :openAlert="showmodal" @close="closeModal" @agree="agreeModel">
      <p>确认关闭？</p>
    </Dialog>
    <div class="button">
      <mu-button color="primary" @click="openWindow">打开新的web窗口</mu-button>
    </div>
  </div>
</template>

<script>
import Dialog from "../components/Dialog";
import { app, BrowserWindow } from "electron";
export default {
  data() {
    return {
      open: false,
      position: "right",
      docked: false,
      date: undefined,
      showmodal: false
    };
  },
  components: {
    Dialog
  },
  mounted() {
    // this.$db.find({ _id: "logininfo" }, function(err, ret) {
    //   // docs contains Earth
    //   console.log(err, ret);
    // });
  },
  methods: {
    openWindow() {
      this.$router.push('/index')
    },
    alertModal() {
      this.showmodal = true;
    },
    closeModal() {
      this.showmodal = false;
    },
    agreeModel() {
      this.showmodal = false;
    },
    cleanCache() {
      this.$db.remove({}, { multi: true }, (err, ret) => {
        console.log(err, ret);
      });
    },
    gotoLogin() {
      this.$router.replace("/");
    },
    handleSortChange({ name, order }) {
      this.list = this.list.sort((a, b) =>
        order === "asc" ? a[name] - b[name] : b[name] - a[name]
      );
    }
  }
};
</script>

<style lang='scss' scoped>
.drawer-font {
  font-size: 12px;
}
.marginr24 {
  margin-right: 24px;
}
.bottom {
  position: absolute;
  bottom: 0;
}
.container {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.marginright20 {
  margin-right: 20px;
}
.bage {
  z-index: 9999;
  .dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #f00;
  }
}
</style>