import { Profile } from "./components/Profile";

import Avatar from "./assets/perfil.jpg";

export default function App() {
  return (
    <div className="app">
      <Profile
        profileImg={Avatar}
        name="Vinicius Pereira"
        bio="Desenvolvedor JavaScript FullStack "
        email="viniciuspereiraa51@gmail.com"
        phone="(35) 997629493"
        githubUrl="https://github.com/ViniciusPereirx"
        linkedinUrl="https://www.linkedin.com/in/viniciuspereiradev/"
        twitterUrl="https://www.youtube.com/"
      />
    </div>
  );
}
