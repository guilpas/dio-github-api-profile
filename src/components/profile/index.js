import React from 'react'
import * as S from "./styled"
import useGithub from "../../hooks/github-hooks";

function Profile() {
    const { githubState } = useGithub();

    return (
        <div className="card flex-row flex-wrap">
            <S.WrapperImg src={githubState.user.avatar_url} alt="..." />
            <div className="card-body">
                <h2 className="card-title">{githubState.user.name}</h2>
                <h4 className="card-text">Username: <a href={githubState.user.html_url} target="blank" className="link-dark">{githubState.user.login}</a></h4>
                {githubState.user.company &&
                    <h4 className="card-text">Company: {githubState.user.company}</h4>
                }
                {(githubState.user.blog != "") &&
                    <h4 className="card-text">Blog: <a href={githubState.user.blog} target="blank" className="link-dark">{githubState.user.blog}</a></h4>
                }
                <div className="d-flex flex-row">
                <S.Counts title="Followers" counts={githubState.user.followers} />
                <S.Counts title="Following" counts={githubState.user.following} />
                <S.Counts title="Gists" counts={githubState.user.public_gists} />
                <S.Counts title="Repos" counts={githubState.user.public_repos} />
                </div>

            </div>
        </div>
    )
}

export default Profile
