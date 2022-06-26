import {
    Main,
    MediaDiv,
} from './styledComponent';

import { darkTheme, GlobalStyles, lightTheme } from './styles';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import Header from './Header';
import Slogun from './Slogun';
import ShowPostList from './ShowPostList';
import Footer from './Footer';

function App() {
    const initialPostList = [
        { id: 1, title: '멋쟁이 사자처럼', replCount: 222 },
        { id: 2, title: '서울여대 10기', replCount: 11 },
        { id: 3, title: '일요일 정기세션', replCount: 33 },
        { id: 4, title: '최고', replCount: 323},
        { id: 5, title: '멋쟁이', replCount: 242 },
        { id: 6, title: '짱짱', replCount: 52}
    ];
    const [darkMode, setDarkMode] = useState(true);
    const [loading, setLoading] = useState(false);
    const [isPost, setIsPost] = useState(false);

    const [postList, setPostList] = useState(initialPostList);
    const addPost = () => { 
        setPostList((postList) => 
            [...postList,  { id: 7, title: '잘래', replCount: 72}]
        )
    }
    return (
        <>
            <ThemeProvider theme={ darkMode ? darkTheme : lightTheme}>
            <GlobalStyles />
                <MediaDiv>
                    <Header darkMode={ darkMode } setDarkMode={setDarkMode} />
                    <Main>
                        <Slogun/>
                        <ShowPostList postList={postList} loading={loading} isPost={isPost} addPost={ addPost }/>
        </Main>
            <Footer />
                </MediaDiv>
            </ThemeProvider>
    </>);
}

export default App;