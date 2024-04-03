export interface Mission {
  mission_name: string;
  launch_year: number;
  details: string;
  mission_patch_small: string;
  flight_number: number;
  links: {
    mission_patch_small: string;
  };
  rocket: {
    rocket_name: string;
    rocket_type: string;
  }
  launch_site: {
    site_name_long: string;
  }


}