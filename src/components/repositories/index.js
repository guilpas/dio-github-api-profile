import React, { useEffect, useState} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useGithub from "../../hooks/github-hooks";
import RepositoryItem from "../repository-item";


function Repositories() {
    const { githubState, getUserRepos, getUserStarred } = useGithub();
    const [hasUserSearchrepos, setHasUserSearchrepos] = useState(false);

    useEffect(() => {
        if (githubState.user.login) {
          getUserRepos(githubState.user.login);
          getUserStarred(githubState.user.login);
        }
        setHasUserSearchrepos(githubState.repositories);
    
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [githubState.user.login]);
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Repositories</Tab>
                    <Tab>Starred</Tab>
                </TabList>

                <TabPanel>
                    {githubState.repositories.map(
                        (repository) => <RepositoryItem 
                        description={repository.description} 
                        title={repository.name} 
                        full_name={repository.full_name} 
                        url={repository.html_url} 
                        rid={repository.id} 
                        key={repository.id}/>
                    )}
                </TabPanel>
                <TabPanel>
                {githubState.starred.map(
                        (repository) => <RepositoryItem 
                        description={repository.description} 
                        title={repository.name} 
                        full_name={repository.full_name} 
                        url={repository.html_url} 
                        rid={repository.id} 
                        key={repository.id}/>
                    )}
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Repositories
