<template>
  <div class="player-info mx-auto">
    <b-container fluid="sm" class="player-info--container">
      <b-row align-h="center">
        <b-col cols="12" lg="8" class="player-info--container__col">
          <b-row align-h="center">
            <b-col cols="12" class="name-title half-border">
              <h3>{{ playerName }}</h3>
            </b-col>
          </b-row>
          <b-row align-h="center" class="mt-3">
            <b-col cols="6" sm="4" class="player-info--col">
              <label class="player-info--col__label">Age:</label>
              <label class="player-info--col__data">{{ playerData.age }}</label>
            </b-col>
            <b-col cols="6" sm="4" class="player-info--col">
              <label class="player-info--col__label">DOB:</label>
              <label class="player-info--col__data">{{ playerData.dob }}</label>
            </b-col>
            <b-col cols="6" sm="4" class="player-info--col">
              <label class="player-info--col__label">Country:</label>
              <label class="player-info--col__data">{{ playerData.country }}</label>
            </b-col>
            <b-col cols="6" sm="4" class="player-info--col">
              <label class="player-info--col__label">Positions:</label>
              <label class="player-info--col__data">{{ playerData.position }}</label>
            </b-col>
            <b-col cols="6" sm="4" class="player-info--col">
              <label class="player-info--col__label">Height:</label>
              <label class="player-info--col__data">{{ playerData.height }}</label>
            </b-col>
            <b-col cols="6" sm="4" class="player-info--col">
              <label class="player-info--col__label">Weight:</label>
              <label class="player-info--col__data">{{ playerData.weight }}lbs</label>
            </b-col>
            <b-col cols="6" sm="4" class="player-info--col">
              <label class="player-info--col__label">Bats:</label>
              <label class="player-info--col__data">{{ playerData.bats }}</label>
            </b-col>
            <b-col cols="6" sm="4">
              <label class="player-info--col__label">Throws:</label>
              <label class="player-info--col__data">{{ playerData.throws }}</label>
            </b-col>
            <b-col cols="6" sm="4">
              <label class="player-info--col__label">Years Experience:</label>
              <label class="player-info--col__data">{{ playerData.years }}</label>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';
import { State } from 'vuex-class';

import { PlayerDetail, PlayerDTO } from '../../../types/players';

@Component({})
export default class PlayerInfo extends Vue {
  @State currentPlayerInfo: PlayerDTO;

  get playerName(): string {
    return `${this.currentPlayerInfo.first_name} ${this.currentPlayerInfo.last_name}`;
  }

  get playerData(): PlayerDetail {
    const {
      first_name,
      last_name,
      ...playerData
    } = this.currentPlayerInfo;

    return playerData;
  }
}
</script>

<style lang="scss">
@import "../../../scss/variables.scss";

.name-title {
  background-color: $secondary;
  color: white;
  text-align: center;
  border-radius: 5px;
}

.border {
  border: 1px solid $secondary;
}
.half-border{ 
  border-bottom: 1px solid $secondary;
}

.player-info {
  &--col {
    margin-bottom: 10px;
    &__label {
      display: block;
      font-size: 10px;
      font-style: italic;
      font-weight: bold;
      margin-bottom: 2px;
    }
  }
  &--container {
    &__col {
      border-radius: 6px;
      @extend .border;
    }
  }
}
</style>