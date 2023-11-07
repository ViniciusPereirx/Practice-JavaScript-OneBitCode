import { Profile } from "./components/Profile";

import Avatar from "./assets/perfil.jpg";

export default function App() {
  return (
    <>
      <Profile
        profileImg={Avatar}
        name="Vinicius Pereira"
        bio="Desenvolvedor FullStack"
        email="viniciuspereiraa51@gmail.com"
        phone="(35) 997629493"
        githubUrl="GitHub"
        linkedinUrl="LinkedIn"
        twitterUrl="Twitter"
      />
    </>
  );
}
