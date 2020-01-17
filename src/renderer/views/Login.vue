<template>
  <div>
    <mu-container class="container">
      <mu-form ref="form" :model="validateForm" class="mu-demo-form">
        <mu-form-item label="用户名" help-text="用户名不能为空，不能是汉字" prop="username" :rules="usernameRules">
          <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
        </mu-form-item>
        <mu-form-item label="密码" prop="password" help-text="密码不能是汉字" :rules="passwordRules">
          <mu-text-field type="password" v-model="validateForm.password" prop="password"></mu-text-field>
        </mu-form-item>
        <mu-form-item prop="isAgree">
          <mu-checkbox label="记住密码" v-model="validateForm.isAgree"></mu-checkbox>
        </mu-form-item>
        <mu-form-item>
          <mu-button color="primary" @click="submit">提交</mu-button>
          <mu-button @click="clear">重置</mu-button>
        </mu-form-item>
      </mu-form>
      <mu-paper :z-depth="1" class="demo-date-picker bottom">
        <mu-date-picker :date.sync="date"></mu-date-picker>
      </mu-paper>
    </mu-container>
    <Alert :alert1="alert">
      <p>{{tips}}</p>
    </Alert>
  </div>
</template>

<script>
import Alert from "../components/Alert";
export default {
  data() {
    return {
      usernameRules: [
        { validate: val => !!val, message: "必须填写用户名" },
        { validate: val => val.length >= 3, message: "用户名长度大于3" }
      ],
      passwordRules: [
        { validate: val => !!val, message: "必须填写密码" },
        {
          validate: val => val.length >= 3 && val.length <= 10,
          message: "密码长度大于3小于10"
        }
      ],
      validateForm: {
        username: "",
        password: "",
        isAgree: true
      },
      date: undefined,
      alert: false,
      tips: ""
    };
  },
  components: {
    Alert
  },
  mounted(){
    this.$router.push('/home')
  },
  methods: {
    submit() {
      this.$refs.form.validate().then(result => {
        console.log("form valid: ", result);
        if (result) {
          console.log(this.validateForm);
          // Ajax请求
          if (this.validateForm.isAgree) {
            this.$db.find(
              {
                _id: this.validateForm.username
              },
              (err, res) => {
                console.log(res);
                if (
                  res.length !== 0 &&
                  res[0].content.password === this.validateForm.password
                ) {
                  console.log(res);
                  // TODO
                  // ajax 请求
                  // 如果本地缓存密码和数据库密码不一样
                  // if (true) {
                  //   // 执行这段代码
                  //   this.$db.insert(
                  //     {
                  //       _id: this.validateForm.username,
                  //       content: this.validateForm
                  //     },
                  //     (error, ret) => {
                  //       if (ret) {
                  //         console.log(ret);
                  //         return;
                  //         this.$router.push("/home");
                  //       }
                  //     }
                  //   );
                  // }
                  // END
                  this.$router.push("/home");
                  return;
                } else if (
                  res.length !== 0 &&
                  res[0].content.password !== this.validateForm.password
                ) {
                  this.tips = "密码错误";
                  this.alert = !this.alert;
                  return;
                } else {
                  // TODO
                  // ajax 请求
                  // 如果本地缓存密码和数据库密码不一样
                  if (true) {
                    // 执行这段代码
                    this.$db.insert(
                      {
                        _id: this.validateForm.username,
                        content: this.validateForm
                      },
                      (error, ret) => {
                        if (ret) {
                          this.$router.push("/home");
                          return ;
                        }
                      }
                    );
                  }
                  // END
                }
              }
            );
          } else {
            this.alert = !this.alert;
            this.tips = "记住密码下次免登录";
            // TODO
            // ajax 请求
            // 如果本地缓存密码和数据库密码不一样
            // if (true) {
            //   // 执行这段代码
            //   this.$db.insert(
            //     {
            //       _id: this.validateForm.username,
            //       content: this.validateForm
            //     },
            //     (error, ret) => {
            //       if (ret) {
            //         console.log(ret);
            //         return;
            //         this.$router.push("/home");
            //       }
            //     }
            //   );
            // }
            // END
            setTimeout(() => {
              this.$router.push("/home");
            }, 2000);
          }
        }
      });
    },
    clear() {
      this.$refs.form.clear();
      this.validateForm = {
        username: "",
        password: "",
        isAgree: false
      };
    }
  }
};
</script>

<style lang='scss' scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
.mu-demo-form {
  width: 100%;
  max-width: 460px;
  margin-right: 100px;
}
</style>