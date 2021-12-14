<template>
  <div id="team-personnel" class="team-personnel-container text-left mt-4 mb-3" v-if="show">
    <Header title="Team Personnel" />
    <b-container fluid>
      <b-row>
        <b-col cols="12" sm="6" class="p-0">
          <!-- President label -->
          <div class="team-personnel__section">
            <label class="team-personnel--title">President:</label>
            <label>{{ president }}</label>
          </div>
          <!-- General Manager label -->
          <div class="team-personnel__section">
            <label class="team-personnel--title">General Manager:</label>
            <label>{{ general_manager }}</label>
          </div>
          <!-- Manager label -->
          <div class="team-personnel__section">
            <label class="team-personnel--title">Manager:</label>
            <label>{{ manager }}</label>
          </div>
        </b-col>
        <b-col cols="12" sm="6" class="p-0">
          <div class="team-personnel__section">
            <label class="team-personnel--title d-block">Coaches:</label>
            <label v-for="coach in coaches" :key="coach.name" class="d-block">
              {{ `${coach.name} (${coach.type})` }}
            </label>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { State } from 'vuex-class';

import Header from '../Header.vue';
import Table from '../Table.vue';

import { TeamCoachDTO, TeamPersonnelDTO } from '../../types/teams';

@Component({
  components: {
    Header,
    Table,
  }
})
export default class TeamPersonnel extends Vue {
  @State teamPersonnel: TeamPersonnelDTO;

  get show(): boolean {
    return this.teamPersonnel && Object.keys(this.teamPersonnel).length > 0;
  }

  get manager(): string {
    return this.teamPersonnel?.manager;
  }

  get general_manager(): string {
    return this.teamPersonnel?.general_manager;
  }

  get president(): string {
    return this.teamPersonnel?.president;
  }

  get coaches(): Array<{ name: string, type: string}> {
    return this.teamPersonnel?.coaches.map((coach: TeamCoachDTO) => {
      return { name: coach.name, type: coach.coach_type };
    });
  }
}
</script>

<style lang="scss">
.team-personnel {
  &__section {
    margin-bottom: 10px;
    label {
      margin: 0;
      padding: 0;
      display: block;
    }
  }
  &--title {
    font-weight: bold;
    width: 200px;
  }
}
</style>