import { Header, Profile, Repositories } from "./components";
import styled from "styled-components";
import useGithub from "./hooks/github-hooks";

const Wrapper = styled.div`
padding: 20px 40px;`;

function App() {
  const { githubState } = useGithub();

  return (
    <Wrapper className="App">
      <Header />
      {githubState.hasError &&
        (
          <div className="alert alert-danger" role="alert">
            {githubState.error}
          </div>
        )
      }
      {githubState.hasUser &&
        (
          <>
            {githubState.loading ? (
              <p>Loading</p>
            ) : (
              <>
                <Profile />
                <Repositories />
              </>
            )}
          </>
        )
      }
    </Wrapper>
  );
}

export default App;
