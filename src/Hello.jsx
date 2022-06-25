import React from "react";
import "./Hello.css" // style 적용법 2. css 파일로 작성해 불러온 뒤 적용
import styled from "styled-components"; // style 적용법 3. styled-components 사용

function Hello() { 
    // style 적용법 1. 코드 내에 작성 -> 반드시 객체 형태
    const PracticeStyle = {
        marginTop: '10px',
        backgroundColor: 'blue'
    }

    // 버튼 형태의 리액트 컴포넌트를 가져와 스타일한다고 생각하면 된다.
    const StyleButton = styled.button`
            color: red;
            background-color: gray;
    `;
    return (<>
        1 <div style={PracticeStyle}> Hello World!!</div >
        2 <div className="red"> Hello World!!</div >
        3 <StyleButton>나만의 버튼</StyleButton>
    </>);
}

export default Hello;