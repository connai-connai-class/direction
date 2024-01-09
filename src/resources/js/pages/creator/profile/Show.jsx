import { AuthenticatedLayout } from "@/components/layouts";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button"

export default function CreatorProfileShow({ auth }) {

  console.log(auth);

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
            <div className="hobby my-5">
              スキルの説明：
            </div>
          </div>
          <Button>シェアする</Button>
        </div>
        <div className="w-1/2 rounded-md">bbbbb</div>
      </div>
    </AuthenticatedLayout>
  )
}
