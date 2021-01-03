<template>
  <li class="nav-item dropdown" id="user-icon">
    <a class="nav-link dropdown-toggle" id="userSettings" href="#" role="button" data-toggle="dropdown"
      aria-haspopup="true" aria-expanded="false">
      <i class="fas fa-user-circle" id="usericon"></i>
      <span class="label">user name</span>
    </a>
    <div id="userSettingsDropdown" class="dropdown-menu dropdown-menu-right" aria-labelledby="userSettings">
      <a class="dropdown-item d-flex align-items-center" href="/users/id">
        <i class="fa_left fas fa-user"></i>
        <span class="label">View Profile</span>
      </a>
      <div class="dropdown-divider"></div>
      <h6 class="dropdown-header">Admin panel</h6>
      <router-link to="/users" class="dropdown-item d-flex align-items-center">
        <i class="fa_left fas fa-users"></i>
        <span class="label">User list</span>
      </router-link>
      <a class="dropdown-item d-flex align-items-center" href="/admin/accesslog">
        <i class="fa_left fas fa-lock-open"></i>
        <span class="label">Access log</span>
      </a>
      <a class="dropdown-item d-flex align-items-center" href="/admin/devblog">
        <i class="fa_left fas fa-book"></i>
        <span class="label">Dev Blog</span>
      </a>
      <a class="dropdown-item d-flex align-items-center" href="#" target="_blank">
        <i class="fa_left fab fa-gitlab"></i>
        <span class="label">Release Schedule</span>
        <i class="fa_right fas fa-external-link-alt ml-auto"></i>
      </a>
      <div class="dropdown-divider"></div>
      <h6 class="dropdown-header">Settings</h6>
      <a class="dropdown-item d-flex align-items-center" href="/users/id/passwordchange">
        <i class="fa_left fas fa-lock"></i>
        <span class="label">Change password</span>
      </a>
      <div class="dropdown-divider"></div>
      <h6 class="dropdown-header">Preferences</h6>
      <form>
        <div class="dropdown-item-static d-flex align-items-center">
          <i class="fa_left fas fa-moon"></i>
          <span class="label">Dark Mode</span>
          <label class="switch ml-auto">
            <input type="checkbox">
            <span class="slider round"></span>
          </label>
        </div>
        <div class="dropdown-item-static d-flex align-items-center">
          <i class="fa_left fas fa-anchor"></i>
          <span class="label">Some other toggle</span>
          <label class="switch ml-auto">
            <input type="checkbox">
            <span class="slider round"></span>
          </label>
        </div>
        <div class="dropdown-item-static d-flex align-items-center">
          <i class="fa_left fas fa-anchor"></i>
          <span class="label">some other toggle</span>
          <label class="switch ml-auto">
            <input type="checkbox">
            <span class="slider round"></span>
          </label>
        </div>
        <div class="dropdown-item-static d-flex align-items-center">
          <i class="fa_left fas fa-anchor"></i>
          <span class="label">some other toggle</span>
          <label class="switch ml-auto">
            <input type="checkbox">
            <span class="slider round"></span>
          </label>
        </div>
      </form>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item d-flex align-items-center" href="/auth/logout">
        <i class="fa_left fas fa-door-open"></i>
        <span class="label">Log out</span>
      </a>
    </div>
  </li>
</template>

<script>
  export default {
    name: "UserMenuDropdown"
  }
</script>

<style>

</style>