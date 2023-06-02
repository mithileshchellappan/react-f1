import React from 'react';
import { Typography, Grid, TextField } from '@mui/material';
import { getDriverStandings, getTeamStandings } from '../api';
import './LandingPage.css';
import { DriverCard, TeamCard } from '../components/Cards';

const LandingPage = () => {
  const [driversData, setDriversData] = React.useState([]);
  const [teamData, setTeamData] = React.useState([]);
  const [isDataAvailable, setIsDataAvailable] = React.useState(false);
  const [searchText, setSearchText] = React.useState('');

  React.useEffect(() => {
    getDriverStandings().then((data) => setDriversData(data));
    getTeamStandings().then((data) => setTeamData(data));
    setIsDataAvailable(true);
    console.log(driversData);
    console.log(teamData);
  }, []);

  const filteredDriversData = driversData.filter(driver =>
    driver.driverName.toLowerCase().includes(searchText.toLowerCase())
  );

  const filteredTeamData = teamData.filter(team =>
    team.teamName.toLowerCase().includes(searchText.toLowerCase())
  );

  return isDataAvailable ? (
    <div className="landing-page">
      <Typography variant="h1" component="h1" align="center" gutterBottom>
        <i>Formula</i> <b>1</b>
      </Typography>

      <TextField
        type="text"
        label="Search"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
        variant="outlined"
      />

      <div className="section">
        <Typography variant="h4" component="h2" gutterBottom>
          Top Drivers
        </Typography>
        <Grid container spacing={2}>
          {filteredDriversData.map((driver, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <DriverCard data={driver} />
            </Grid>
          ))}
        </Grid>
      </div>

      <div className="section">
        <Typography variant="h4" component="h2" gutterBottom>
          Top Teams
        </Typography>
        <Grid container spacing={2}>
          {filteredTeamData.map((team, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <TeamCard data={team} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  ) : (
    <div className="loading-container">
      <Typography variant="h1" component="h1" align="center" gutterBottom>
        Loading...
      </Typography>
    </div>
  );
};

export default LandingPage;
