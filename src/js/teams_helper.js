export default class TeamsHelper {
  filterByDivision(data) {
    var al_east = []
    var al_center = []
    var al_west = []

    var nl_east = []
    var nl_center = []
    var nl_west = []
    data.forEach((value) => {
      switch (value.division_id) {
        case "201":
          al_east.push(value);
          break;
        case "202":
          al_center.push(value);

          break;
        case "200":
          al_west.push(value);

          break;
        case "204":
          nl_east.push(value);

          break;
        case "205":
          nl_center.push(value);

          break;
        case '203':
          nl_west.push(value);

          break;

        default:
          break;
      }
    });
    return { al_east, al_center, al_west, nl_center, nl_east, nl_west };
  }
  getTeamDetails(data,id){
    return data.filter(value => value.team_id === id)

  }
}
