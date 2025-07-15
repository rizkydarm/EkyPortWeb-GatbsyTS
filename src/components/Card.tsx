import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid2, Skeleton } from '@mui/material';
import { PortfolioItem } from '../firebase';
import ImageFire from './ImageFire';

interface SimpleDialogProps {
  open: boolean;
  handleClose: () => void;
  images?: string[];
}

function SimpleDialog(props: SimpleDialogProps) {
  const { handleClose, open, images } = props;

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <Dialog open={open}
      onClose={handleClose}
      scroll="paper"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      maxWidth="xl"
      fullWidth
    >
      <DialogTitle id="scroll-dialog-title" style={{ fontWeight: 'bold', color: 'black' }} >IMAGES</DialogTitle>
      <DialogContent dividers>
        <Grid2 container id="scroll-dialog-description"
          rowSpacing={2} columnSpacing={2} 
          style={{ overflowY: 'auto' }}>
          {(images ?? []).map((image, index) => (
            <Grid2 size={12 / 4} key={index}>
              <ImageFire image={image} />
            </Grid2>
          ))}
        </Grid2>
      </DialogContent>
      <DialogActions>
        <Button style={{ fontWeight: 'bold', color: 'black' }} onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}


const PortfolioCard: React.FC<{ portfolioItem: PortfolioItem }> = ({ portfolioItem }) => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card variant='outlined' sx={{ height: 300 }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
        <div>
          <Typography variant="h5" component="div" fontWeight={'bold'}>
            {portfolioItem.title}
          </Typography>
          <Typography
            sx={{
              color: 'text.secondary',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {portfolioItem.description}
          </Typography>
        </div>
        <Box sx={{ flexGrow: 1 }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
          {portfolioItem.icons?.map((icon) => {
            switch (icon) {
              case 'flutter':
                return <img src={"/flutter.svg"} alt={icon} 
                  width={32} height={40} />;
              case 'apple':
                return <img src={"/apple.svg"} alt={icon} 
                  width={40} height={40} />;
              case 'android':
                return <img src={"/android.svg"} alt={icon} 
                  width={40} height={40} />;
              case 'python':
                return <img src={"/python.svg"} alt={icon} 
                  width={40} height={40} />;
              case 'cpp':
                return <img src={"/cpp.svg"} alt={icon} 
                  width={40} height={40} />;
              default:
                return null;
            }
          })}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', flexDirection: 'row', gap: '16px' }}>
          <Button href={`${portfolioItem.link}`} target="_blank" rel="noopener noreferrer" variant='outlined'
            sx={{
              width: '100%',
              color: 'primary', fontWeight: 'bold'
            }}
          >
            Source Code
          </Button>
          <Button
            variant='outlined'
            sx={{
              width: '100%',
              color: 'primary',
              fontWeight: 'bold'
            }}
            onClick={() => handleClickOpen()}
          >
            Images
          </Button>
          <SimpleDialog
            open={open}
            handleClose={handleClose}
            images={portfolioItem.images}
          />
        </div>
      </CardContent>
    </Card>
  );
}

export default PortfolioCard;