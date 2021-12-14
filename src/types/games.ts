export interface GameDTO {
  game_id: number,
  year: number,
  game_number: number,
  date: string,
  month: number,
  opponent: string,
  home_or_away: string,
  innings: number,
  team_wins_after: number,
  team_losses_after: number,
  time: string,
  attendance: number,
  winning_pitcher: string,
  lossing_pitcher: string,
  saving_pitcher: string,
}

export interface GameYearDTO {
  [year: number]: GameDTO[];
}