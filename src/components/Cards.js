import React from 'react';
import { Card, CardContent, CardMedia, Typography, Accordion, AccordionSummary, AccordionDetails, MenuItem, Select, ButtonBase } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function DriverCard(props) {
    var driver = props.data
    return (
        <Card >
          <ButtonBase>
            <CardMedia component="img" src={driver.driverPicture} alt={driver.driverName} height={400} />
            <CardContent>
                <Typography variant="h4" component="h3">
                    {driver.driverName}
                </Typography>
                <Typography variant="body1" component="p">
                    Team: {driver.teamName}
                </Typography>
                <Typography variant="body1" component="p">
                    Position: {driver.position}
                </Typography>
                <Typography variant="body1" component="p">
                    Points: {driver.points}
                </Typography>
            </CardContent>
            </ButtonBase>
        </Card>
    )
}

function TeamCard(props) {
  const team = props.data;
  console.log(team.drivers)
  return (
    <Card>
      <ButtonBase>
      <CardMedia component="img" src={team.teamPicture} alt={team.teamName} />
      </ButtonBase>
      <CardContent>
        <Typography variant="h4" component="h3">
          {team.teamName}
        </Typography>
        <Typography variant="body1" component="p">
          Position: {team.position}
        </Typography>
        <Typography variant="body1" component="p">
          Points: {team.points}
        </Typography>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="drivers-content" id="drivers-header">
              Drivers:
          </AccordionSummary>
          <AccordionDetails>
              {team.drivers.map((driver, index) => (
                <MenuItem key={driver.driverName} value={driver.driverName}>
                  {driver.driverName}
                </MenuItem>
              ))}
          </AccordionDetails>
        </Accordion>
      </CardContent>
    </Card>
    
  );
}

export  {DriverCard,TeamCard}