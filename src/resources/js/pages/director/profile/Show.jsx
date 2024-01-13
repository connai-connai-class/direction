import { AuthenticatedLayout } from "@layouts";
import Button from '@mui/material/Button';
import Avatar from "@mui/material/Avatar";



export default function DirectorProfileShow({ auth }) {
  return (
    <AuthenticatedLayout user={auth.user}>
      <div className="flex justify-between rounded-md p-5 ">

        <div className="w-1/2 rounded-md">
          <div id="profile" className="flex items-center border mb-10">
            <Avatar alt="profile" />
            <div className="mx-5">
              <h1>{auth.user.name}</h1>
              <h3>{auth.user.email}</h3>
            </div>
            <h3>ニックネーム</h3>
          </div>
          <div className="text">
            <div className="introdunction">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quae omnis facere consectetur, quidem culpa incidunt laborum sunt esse ea magni?
              Vitae recusandae deserunt veritatis perspiciatis commodi!
              Nihil eaque praesentium ducimus.
            </div>
          </div>
          <Button>シェアする</Button>
        </div>
        <div className="w-1/2 rounded-md">
          bbbbb
          <div className="container w-4/5 mx-auto border">
            <div className="card border rounded-md h-100 bg-blue-100">
              credit card
            </div>
            <div className="cardNumber my-5">
              <p>XXXXXX-XXXXX-XXX</p>
              <p>XXXXXX-XXXXX-XXX</p>
            </div>
            <div className="detail">
              <p>name:<textarea name="name" cols="30" rows="1" className="w-100%">name</textarea></p>
              <p>2024/01</p>
              <Button>追加</Button>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>


  )
}
