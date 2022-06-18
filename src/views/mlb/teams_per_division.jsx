import { Col, Container, Row, Text } from "@nextui-org/react";
import axios from "axios";
import React from "react";
import DivisionalTable from "../../components/divisional_table";
import '../../css/teams.css'
import TeamsHelper from "../../js/teams_helper";
const MLB_URL = process.env.REACT_APP_MLB_URL;
const TEAMS_URL = `${MLB_URL}named.team_all_season.bam?sport_code='mlb'&all_star_sw='N'&sort_order=name_asc&season='2022'`;
const helper = new TeamsHelper();
class TeamsPerDivision extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      al_east: [],
      al_center: [],
      al_west: [],
      nl_east: [],
      nl_center: [],
      nl_west: [],
    };
  }

  componentDidMount() {
    axios
      .get(TEAMS_URL)
      .then((res) => {
        var data = res.data.team_all_season.queryResults.row;
        const { nl_center, nl_east, nl_west, al_center, al_east, al_west } =
          helper.filterByDivision(data);
        this.setState({
          nl_center,
          nl_east,
          nl_west,
          al_center,
          al_east,
          al_west,
        });
      })
      .catch((err) => console.error(err));
  }
  render() {
    console.log(this.state)
    return <Container >
           <Text h2 className="title_division"> American League</Text>
        <Row gap={1} className="grid-teams">
            <Col>
            <DivisionalTable data = {this.state.al_east} division_name= 'AL East'/> 
            
            </Col>
            <Col>
            <DivisionalTable data = {this.state.al_center} division_name= 'AL Center'/> 
            
            </Col>
            <Col>
            <DivisionalTable data = {this.state.al_west} division_name= 'AL West'/> 
            
            </Col>
        </Row>
        <Text h2 className="title_division"> National League</Text>
        <Row gap={1} id='nl_grid'>
        <Col>
            <DivisionalTable data = {this.state.nl_east} division_name= 'NL East'/> 
            
            </Col>
            <Col>
            <DivisionalTable data = {this.state.nl_center} division_name= 'NL Center'/> 
            
            </Col>
            <Col>
            <DivisionalTable data = {this.state.nl_west} division_name= 'NL West'/> 
            
            </Col>
        </Row>
        
      
    </Container>;
  }

}

export default TeamsPerDivision;
