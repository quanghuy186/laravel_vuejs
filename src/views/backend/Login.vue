<script setup></script>

<template>
  <div class="login-container">
    <div class="login-wrapper">
      <div class="panel-header">
        <h2 class="uk-text-center">Đăng nhập</h2>
        <p class="uk-text-center">Chào mừng đăng nhập vào hệ thống</p>
      </div>
      <div class="panel-body">
        <div class="form-row">
          <div class="label">Tên đăng nhập</div>
          <input class="input-text" type="text" placeholder="Tên đăng nhập" />
        </div>

        <div class="form-row uk-margin-small-top input-password">
          <div class="label">
            <div class="uk-flex uk-flex-between">
              <span>Mật khẩu</span>
              <a href="">Quên mật khẩu ?</a>
            </div>
          </div>
          <input type="text" class="input-text" placeholder="Mật khẩu" />
        </div>

        <div class="form-row uk-margin-small-top">
          <div class="uk-flex uk-flex-middle">
            <input type="checkbox" name="" id="" class="input-checkbox" />
            <span> Ghi nhớ mật khẩu?</span>
          </div>
        </div>

        <div class="form-row uk-margin-small-top uk-flex uk-flex-center">
          <div class="btn-login uk-text-center uk-button-primary btn">
            Đăng nhập
          </div>
        </div>

        <div class="panel-footer uk-margin-small-top">
          Bản quyền © 2011-2024 Laravel Holdings Inc
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-wrapper {
  max-width: 420px;
  margin: 100px auto;
  padding: 48px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0.125rem 0 rgba(10, 10, 10, 0.04);
}

.btn-login {
  width: 100%;
  padding: 4px 0;
  border-radius: 4px;
  box-shadow: 0 0.125rem 0 rgba(10, 10, 10, 0.04);
}

.btn-login:hover {
  cursor: pointer;
  opacity: 0.6;
  padding: 4px 0;
  border-radius: 4px;
  box-shadow: 0 0.125rem 0 rgba(10, 10, 10, 0.04);
}
</style>
