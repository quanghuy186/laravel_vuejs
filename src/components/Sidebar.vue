<script setup></script>

<template>
  <aside id="sidebar" class="app-sidebar">
    <div class="aside-head">
      <span class="image img-cover"
        ><img src="@/assets/backend/images/gau.jpg" alt=""
      /></span>
      <div class="name uk-margin-small-top">Đỗ Quang Huy</div>
      <div class="role">Quản trị viên</div>
    </div>

    <div class="aside-body">
      <ul class="uk-list uk-clearfix task-list">
        <li class="task-item">
          <span class="task-name">Home</span>
        </li>

        <li>
          <a href="">
            <div class="uk-flex uk-flex-middle nav-dashboard">
              <span class="uk-icon" uk-icon="home"></span>
              <span class="nav-label uk-margin-small-left">Dashboard</span>
              <span class="" uk-icon="chevron-left"></span>
            </div>
          </a>
        </li>

        <li>
          <a href="">
            <div class="uk-flex uk-flex-middle nav-dashboard">
              <span class="uk-icon" uk-icon="home"></span>
              <span class="nav-label uk-margin-small-left">QL bài viết</span>
              <span class="" uk-icon="chevron-left"></span>
            </div>
          </a>
        </li>

        <li>
          <a href="">
            <div class="uk-flex uk-flex-middle nav-dashboard">
              <span class="uk-icon" uk-icon="cart"></span>
              <span class="nav-label uk-margin-small-left">QL sản phẩm</span>
              <span class="" uk-icon="chevron-left"></span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped>
.app-sidebar {
  height: 1000px;
  width: 240px;
  color: #a3aed1;
  background-color: #111c43;
  padding: 16px;
}

.aside-head img {
  height: 48px;
  width: 48px;
  border-radius: 50%;
  display: inline-block;
}

.task-item {
  margin-top: 16px;
}

.nav-dashboard {
  color: #a3aed1;
}
</style>
