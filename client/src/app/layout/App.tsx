import { Box, Container, CssBaseline, Typography} from "@mui/material";
import { useState } from "react"
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { useActivities } from "../../lib/hooks/useActivities";


function App() {
  
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const {activities, isPending} = useActivities();

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities!.find(x => x.id === id));
  }

  const handlecancelActivity = () => {
    setSelectedActivity(undefined);
  }

  const handleopenForm = (id? : string) => {
    if (id) handleSelectActivity(id);
    else handlecancelActivity();
    setEditMode(true);
  }
  const handlecloseForm = () => {
    setEditMode(false);
  }

  return (
    <Box sx={{bgcolor: '#eeeeee', minHeight: '100vh' }}>
      <CssBaseline />
      <NavBar openForm={handleopenForm} />
      <Container maxWidth='xl' sx={{mt: 3}}>
        {!activities || isPending ? (
          <Typography>Loading...</Typography>
        ) : (
          <ActivityDashboard 
            activities={activities} 
            selectActivity={handleSelectActivity}
            cancelSelectActivity={handlecancelActivity}
            selectedActivity={selectedActivity}
            editMode={editMode}
            openForm={handleopenForm}
            closeForm={handlecloseForm}
         />
        )}
      </Container>
    </Box>
  )
}

export default App
