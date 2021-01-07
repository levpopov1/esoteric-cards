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
                <DropdownCard v-for="item in playingCardsVendors" v-bind:key="item.id" v-bind:item="item"/>
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
                <DropdownCard v-for="item in cardGamesCategories" v-bind:key="item.id" v-bind:item="item"/>
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
        <UserMenuDropdown/>
      </ul>
    </div>
  </nav>
</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import DropdownCard from "./DropdownCard";
import UserMenuDropdown from "./UserMenuDropdown";
export default {
  name: 'TopBar',
  computed: mapGetters(["allPlayingCards", "playingCardsCategories", "cardGamesCategories", "playingCardsVendors"]),
  components: {
    DropdownCard,
    UserMenuDropdown
  },
  methods: {
    ...mapActions(['fetchPlayingCardsVendors']),
    setPlayingCardsCategories: function(){
      console.log(this.allPlayingCards)

      return this.allPlayingCards.map(function(item){
        return item.vendor;
      });
    }
  },
  created(){
    this.fetchPlayingCardsVendors();
  }
}
</script>
