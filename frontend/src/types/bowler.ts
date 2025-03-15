export type bowler = {
  bowlerId: number;
  bowlerFirstName: string;
  bowlerMiddleInit: string;
  bowlerLastName: string;
  team: {
    teamID: number;
    teamName: string;
  };
  bowlerAddress: string;
  bowlerCity: string;
  bowlerZip: number;
  bowlerState: string;
  bowlerPhoneNumber: string;
};
