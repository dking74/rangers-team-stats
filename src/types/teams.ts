import {
  BatYearResultDTO,
  PitchYearResultDTO,
} from './default';

export interface TeamBatYearResultDTO extends BatYearResultDTO {}
export interface TeamPitchYearResultDTO extends PitchYearResultDTO {}

export interface TeamStatsDTO {
  batting: TeamBatYearResultDTO;
  pitching: TeamPitchYearResultDTO;
}
  
export interface AllTeamStatsDTO {
  [year: number]: TeamStatsDTO;
}

export interface TeamPostseasonResultDTO {
  series_name: string,
  opponent: string,
  result: string,   
}
  
export interface TeamResultDTO {
  year: number,
  wins: number,
  losses: number,
  ties: number,
  division_place: number,
  attendance: number,
  postseason: TeamPostseasonResultDTO[]
}

export interface AllTeamResultDTO {
  [year: number]: TeamResultDTO;
}

export interface TeamManagementDTO {
  year: number,
  manager: string,
  general_manager: string,
  president: string,
}
  
export interface TeamCoachDTO {
  year: number,
  name: string,
  coach_type: string,
}
  
export type TeamPersonnelDTO = TeamManagementDTO & {
  coaches: TeamCoachDTO[];
}

export interface AllTeamPersonnelDTO {
  [year: number]: TeamPersonnelDTO;
}