import { Text} from "@nextui-org/react";
import React from 'react';
import axios from "axios";
import {useParams} from 'react-router-dom'
import general_placeholder from '../../assets/general_placeholder.png'

import TeamsHelper from "../../js/teams_helper";
import '../../css/team_details.css'

const MLB_URL = process.env.REACT_APP_MLB_URL;
const TEAMS_URL = `${MLB_URL}named.team_all_season.bam?sport_code='mlb'&all_star_sw='N'&sort_order=name_asc&season='2022'`;
const helper = new TeamsHelper();
const info = {
    name:'',
    stadium:''

}

function TeamDetails (){
    let { id } = useParams();

    return (
        <div>
           <InfoTeam id={id}/>
        </div>
      );
}

class InfoTeam extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            info:info
        }
    }
    componentDidMount() {
        // Get info for a single team request doesn´n exits 
        axios
          .get(TEAMS_URL)
          .then((res) => {
            var data = res.data.team_all_season.queryResults.row;
          const team = helper.getTeamDetails(data,this.props.id)
         this.setState({
            info:team
         })
          })
          .catch((err) => console.error(err));
      }
      
    render() { 
   
        return (
            <section id="header_details">
           
                 <img
              src={general_placeholder}
              alt="js logo"
              id='img_team'
            />
             <section id='data'>
                 <Text h4>Stadium</Text>
                 <Text h4>Stadium</Text> 
             </section>
            </section>
        )
    }
}

export default TeamDetails;