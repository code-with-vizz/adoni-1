// import React from 'react'

// function MaterialTask() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default MaterialTask


import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/MuiAlert';


function Alerts(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function MaterialTask() {
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const primaryButtonStyle = {
    backgroundColor: '#AA00FF', // Custom color
    color: '#FFFFFF', // Text color
    // Add any other styles you need
  };

  return (
    <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alerts onClose={handleClose} severity="warning">
          We need your attention! Your plan requires an update.
        </Alerts>
      </Snackbar>
      <div>Your Current Plan is Basic</div>
      <div>Active until Dec 09, 2021</div>
      <Button variant="contained" color="primary" style={primaryButtonStyle}>
        UPGRADE PLAN
      </Button>
      <Button variant="contained" color="secondary">
        CANCEL SUBSCRIPTION
      </Button>
    </div>
  );
}
