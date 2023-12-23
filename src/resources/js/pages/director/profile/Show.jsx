import { AuthenticatedLayout } from "@layouts";
import { Box } from "@mui/material";
import Grid from '@mui/material/Grid';
import Container from "@mui/material/Container";



export default function DirectorProfileShow({ auth }) {
  return (
    <AuthenticatedLayout user={auth.user}>
      <div className="flex bg-blue-500 justify-around rounded-md">

        <div className="bg-red-500 w-2/5 ">
          <div id="profile" className="flex w-3/5 items-center bg-purple-500 mb-10">
            <div id="image" className="bg-pink-500 w-24 h-24 rounded-full">
              <p>image</p>
            </div>
            <h1>ディレクター名</h1>
          </div>

          <div className="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Quae omnis facere consectetur, quidem culpa incidunt laborum sunt esse ea magni?
            Vitae recusandae deserunt veritatis perspiciatis commodi!
            Nihil eaque praesentium ducimus.
          </div>
        </div>
        <div className="bg-green-500 w-2/5">bbbbb</div>
      </div>


      <Grid container style={{ border: '3px solid red', height: '500px' }}>
        <Grid item xs={6} style={{ border: '3px solid green', height: '300px' }}>
          <Grid style={{ border: '3px solid pink', marginLeft: '50px' }}>
            <Grid style={{ border: '3px solid green' }}>
              <Grid style={{ border: '3px solid black', width: '100px', height: '100px', borderRadius: '50%' }}>
                image
              </Grid>
              <Grid>ディレクター名</Grid>
            </Grid>
            <Box>ニックネーム</Box>
          </Grid>
          <Box style={{ border: '3px solid blue', marginLeft: '50px' }}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Ex distinctio eligendi deserunt esse, qui reprehenderit mollitia,
              voluptatibus eum pariatur repudiandae quam autem incidunt,
              sapiente quis officia! Eos, beatae ad. Aperiam.
            </p>
          </Box>
        </Grid>
        <Grid item={6} xs={6} style={{ border: '3px solid green' }}>
          <Container style={{ border: '3px solid blue' }}><p>aaa</p></Container>
        </Grid>
      </Grid>
    </AuthenticatedLayout>


  )
}
