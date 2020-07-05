<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-light bg-white p-0 ">
    <router-link to="/" class="navbar-brand">ESOTERIC CARDS</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMain" aria-controls="navbarMain" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse" id="navbarMain">
      <ul class="navbar-nav w-100">
        <li class="nav-item dropdown initial">
          <a class="nav-link dropdown-toggle" id="playingCards" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Playing Cards
          </a>
          <div id="playingCardsDropdown" class="w-100 dropdown-menu m-0" aria-labelledby="playingCards">
            <div class="container-fluid">
              <div class="row">
                <div class="col-sm-2 my-3">
                  <div class="card">
                    <div class="card-body">
                      This is some text within a card body.
                    </div>
                  </div>
                  <router-link to="/playing-cards/:name" class="dropdown-item  text-center">
                    Theory11
                  </router-link>
                </div>
                <div class="col-sm-2 my-3">
                  <div class="card">
                    <div class="card-body">
                      This is some text within a card body.
                    </div>
                  </div>
                  <router-link to="/playing-cards/:name" class="dropdown-item  text-center">
                    USPCC
                  </router-link>
                </div>
                <div class="col-sm-2 my-3">
                  <div class="card">
                    <div class="card-body">
                      This is some text within a card body.
                    </div>
                  </div>
                  <router-link to="/playing-cards/:name" class="dropdown-item  text-center">
                    Ellusionist
                  </router-link>
                </div>
                <div class="col-sm-2 my-3">
                  <div class="card">
                    <div class="card-body">
                      This is some text within a card body.
                    </div>
                  </div>
                  <router-link to="/playing-cards/:name" class="dropdown-item  text-center">
                    Art of Play
                  </router-link>
                </div>
                <div class="col-sm-2 my-3">
                  <div class="card">
                    <div class="card-body">
                      This is some text within a card body.
                    </div>
                  </div>
                  <router-link to="/playing-cards/:name" class="dropdown-item  text-center">
                    Bisicle
                  </router-link>
                </div>
                <div class="col-sm-2 my-3">
                  <div class="card">
                    <div class="card-body">
                      This is some text within a card body.
                    </div>
                  </div>
                  <router-link to="/playing-cards/:name" class="dropdown-item  text-center">
                    Expert
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </li>   
        <li class="nav-item dropdown initial">
          <a class="nav-link dropdown-toggle" id="cardGames" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Card Games
          </a>
          <div id="cardGamesDropdown" class="w-100 dropdown-menu m-0" aria-labelledby="cardGames">
            <div class="container-fluid">
              <div class="row">
                <div class="col-sm-2 my-3">
                  <div class="card">
                    <div class="card-body">
                      This is some text within a card body.
                    </div>
                  </div>
                  <router-link to="/card-games/:name" class="dropdown-item  text-center">
                    Hearhtstone
                  </router-link>
                </div>
                <div class="col-sm-2 my-3">
                  <div class="card">
                    <div class="card-body">
                      This is some text within a card body.
                    </div>
                  </div>
                  <router-link to="/card-games/:name" class="dropdown-item  text-center">
                    Magic The Gathering
                  </router-link>
                </div>
                <div class="col-sm-2 my-3">
                  <div class="card">
                    <div class="card-body">
                      This is some text within a card body.
                    </div>
                  </div>
                  <router-link to="/card-games/:name" class="dropdown-item  text-center">
                    Legends of Runeterra
                  </router-link>
                </div>
                <div class="col-sm-2 my-3">
                  <div class="card">
                    <div class="card-body">
                      This is some text within a card body.
                    </div>
                  </div>
                  <router-link to="/card-games/:name" class="dropdown-item  text-center">
                    Gwent
                  </router-link>
                </div>
                <div class="col-sm-2 my-3">
                  <div class="card">
                    <div class="card-body">
                      This is some text within a card body.
                    </div>
                  </div>
                  <router-link to="/card-games/:name" class="dropdown-item  text-center">
                    Artifact
                  </router-link>
                </div>
                <div class="col-sm-2 my-3">
                  <div class="card">
                    <div class="card-body">
                      This is some text within a card body.
                    </div>
                  </div>
                  <router-link to="/card-games/:name" class="dropdown-item  text-center">
                    Yu-Gi-Oh
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </li>  
        <li class="nav-item">
          <router-link to="/tarot-cards" class="nav-link">Tarot Cards</router-link>
        </li> 
        <div class="input-group flex-grow-1 w-auto" id="global-app-search">
          <input class="form-control" type="text" value="" placeholder="Search...">
          <div class="input-group-append">
              <button class="btn " type="button" id="button-addon2">
                  <i class="fas fa-search"></i>
              </button>
          </div>
        </div>
        <li class="nav-item">
          <a class="nav-link" href="#" title="Favourite">
            <i class="fas fa-star"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" title="Refresh">
            <i class="fas fa-sync"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" title="Notifications">
            <i class="fas fa-bell"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" title="Settings">
            <i class="fas fa-cog"></i>
          </a>
        </li>
        <li class="nav-item dropdown" id="user-icon">
          <a class="nav-link dropdown-toggle" id="userSettings" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
      </ul>
    </div>
  </nav>
</div>
</template>

<script>

export default {
  name: 'TopBar',
  components: {

  },
  methods: {

  }
}
</script>
