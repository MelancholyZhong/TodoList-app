import Button from '@mui/material/Button'
import { Paper, Box, Rating, Grid, Container} from '@mui/material'
import Typography from '@mui/material/Typography'
import { TodoItem } from '../context/TodoStore';
import { useNavigate } from 'react-router-dom';

interface FinishedCardProps {
  item: TodoItem,
  handleRemove:(id:string)=>void,
}


export const FinishedCard: React.FC<FinishedCardProps> = function FinishedCard ({item, handleRemove}) {
    const navigate = useNavigate();

  return(
    <Paper elevation={3}>
      <Box paddingX={5} paddingY={3}>
        <Typography gutterBottom variant='h5' component='div' align='center'>
          {item.title}
        </Typography>
        <Grid container>
          
          <Grid item xs={6}>
            <Rating name="half-rating-read" defaultValue={3} precision={1} value={item.importance} readOnly/>
          </Grid>
          <Grid item xs={6}>
            <Typography variant='body1' align='right' marginTop={0.3}>
              {item.duedate}
            </Typography>
          </Grid>
        </Grid>
        <Typography variant='body1' color='text.secondary' align='left'>
            {item.description}
        </Typography>
        <Box
          m={1}
          display="flex"
          justifyContent='space-evenly'
          alignItems="center"
          >
          <Button variant="contained" color='primary' size='medium' onClick={()=>{navigate(`/${item.id}`)}}>
            Edit
          </Button>
          <Button variant="contained" color='secondary' size='medium' onClick={()=>{handleRemove(item.id)}}>Delete</Button>
        </Box>
      </Box>
    </Paper>
  )
};