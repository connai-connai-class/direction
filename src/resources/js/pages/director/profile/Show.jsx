// import { useState } from "react";
import { useForm } from "@inertiajs/react";
import { AuthenticatedLayout } from "@layouts";
import Button from '@mui/material/Button';
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";



export default function DirectorProfileShow({ auth }) {

  // data変数の宣言はしなくていいの？
  const { patch, setData } =
    useForm({
      introduction: auth.user.introduction
    });

  const onSubmit = (e) => {
    e.preventDefault();
    patch(route("director.profile.update"));
  };

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
            <div className="introduction">
              <label>introduction:</label>
            </div>
          </div>
          <form onSubmit={onSubmit}>
            <TextField
              multiline
              type="text"
              name="introduction"
              rows={4}
              style={{ width: '400px' }}
              defaultValue={auth.user.introduction}
              onChange={e => setData('introduction', e.target.value)}
            />
            <div className="btn">
              <Button type="submit">シェアする</Button>
            </div>
          </form>
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
              <div className="flex items-center">name:<input name="name" className="w-full" /></div>
              <p>2024/01</p>
              <Button>追加</Button>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>


  )
}
