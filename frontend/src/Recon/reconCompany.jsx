import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function CompanyCard() {
  return (
    <Card sx={{  minWidth: 455, width: '300px', height: '275px', position: 'absolute', top: '150px', left: '545px', backgroundColor: '#F7F5F5' }} className="card">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         {/*Word of the Day*/}
        </Typography>
        <Typography variant="h5" component="div">
          Company
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Recon an entire company
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Website {bull} Email   <br/>
{bull} IP </Button>
      </CardActions>
    </Card>
  );
}