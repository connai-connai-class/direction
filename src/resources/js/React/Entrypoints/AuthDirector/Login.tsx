import LoginPage from "@pages/AuthDirctor/Login";
import { Props } from "@pages/AuthDirctor/Login/type";

export default function DirectorRegister(props: Props) {
  return (
    <>
      <LoginPage {...props} />
    </>
  );
}
