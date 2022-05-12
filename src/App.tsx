import Post1 from './assets/images/post-1.png';
import Post2 from './assets/images/post-2.png';
import Post3 from './assets/images/post-3.png';
import Post4 from './assets/images/post-4.png';
import FirstSection from './components/firstsection';
import Header from './components/header';
import Container from './components/layouts/container';
import FirstContent from './components/layouts/firstcontent';
import LatestPosts from './components/layouts/latestposts';
import OtherPosts from './components/layouts/otherposts';
import MainContent from './components/maincontent';
import Post, { PostText } from './components/post';

function App() {
  return (
    <>
      <FirstContent>
        <Container>
          <Header />
          <FirstSection />
        </Container>
      </FirstContent>
      <MainContent>
        <Container>
          <LatestPosts>
            <Post
              src={Post1}
              alt="Post1"
              title="Começando no ReactJS em 2022"
              date="Janeiro 04, 2022"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean."
            />
            <div className="w-3/4 justify-self-end post-text-container">
              <PostText
                date="Janeiro 04, 2022"
                title="Conheça as principais técnicas para conseguir uma vaga internacional em programação"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique."
              />

              <PostText
                date="Janeiro 04, 2022"
                title="Veja a evolução do Front-end na prática"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. "
              />
            </div>
          </LatestPosts>
          <OtherPosts>
            <Post
              src={Post2}
              alt="Post1"
              title="10 dicas para conseguir a vaga desejada"
              date="Janeiro 04, 2022"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. "
            />

            <Post
              src={Post3}
              alt="Post1"
              title="Deixe seu código mais semântico com essas dicas"
              date="Janeiro 04, 2022"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. "
            />

            <Post
              src={Post4}
              alt="Post1"
              title="Use essas dicas nas suas aplicações mobile"
              date="Janeiro 04, 2022"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. "
            />
          </OtherPosts>
        </Container>
      </MainContent>
    </>
  );
}

export default App;
