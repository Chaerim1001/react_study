import React from "react";
import { PostSection, PostTitleDiv, PostTitle, PostListDiv, LoadingImg, LoadingDiv, PagingSection, PagenumberDiv } from './styledComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import loadingIcon from './loading.svg'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import EachPost from "./EachPost";

function ShowPostList({postList,loading, isPost, addPost}) { 
    return (
        <>
<PostSection>
                    <PostTitleDiv>
                        <FontAwesomeIcon onClick={ addPost } icon={faArrowsRotate} />
                        <PostTitle>익명게시판</PostTitle>
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </PostTitleDiv>
                            <PostListDiv>
                                {loading ? (
                                   <LoadingDiv>
                                       <LoadingImg src={loadingIcon} />
                                   </LoadingDiv>
                                ) : (isPost ? (<LoadingDiv>기록된 게시글 없음</LoadingDiv>) : (
                            <ul>
                                {postList.map((element) => (
                                    <EachPost key={element.id} title={element.title} replCount={ element.replCount }/>
                                ))}
                            
                                    </ul>
                                )

                                )}


                    </PostListDiv>
                </PostSection>    
                <PagingSection>
                    <PagenumberDiv><FontAwesomeIcon icon={faArrowLeft}/></PagenumberDiv>
                    <PagenumberDiv>2</PagenumberDiv>
                    <PagenumberDiv><FontAwesomeIcon icon={faArrowRight}/></PagenumberDiv>
            </PagingSection></>
    )
}

export default ShowPostList