import React, { useState, useEffect } from 'react';
import { GrFacebook, GrInstagram } from 'react-icons/gr';

import Header from './components/Header';
import Button from './components/Button';
import Card from './components/Card';
import ContactForm from './components/ContactForm';
import CommentsSection from './components/CommentsSection';
import SplashScreen from './components/SplashScreen';

import GlobalStyle from './assets/styles/global';
import { 
  Container, 
  Section, 
  HomeSection, 
  HomeContainer, 
  CardBox, 
  FloatImages, 
  ContactContainer, 
  ContactBox, 
  Footer 
} from './styles';

import logo from './assets/img/logo.svg';
import bgImage from './assets/img/bg-home.png';
import garrafaImg from './assets/img/garrafa-guarana.png';
import lataImg from './assets/img/lata-guarana.png';
import lataImg2 from './assets/img/lata-guarana-2.png';


function App() {
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
  }, [])

  const products = [
    {
      id: 1,
      img: garrafaImg,
      productName: "Garrafa 350ml",
      description: "Lorem ipsum dolor sit amet"
    },
    {
      id: 2,
      img: lataImg,
      productName: "Garrafa 100ml",
      description: "Lorem ipsum dolor sit amet"
    }
  ];

  if (loading) {

    return (
        <>
          <GlobalStyle />
          <SplashScreen />
        </>
      ) 
  } else {

    return (
      <>
        <GlobalStyle />
        <Header />
        <HomeSection bgImage={bgImage} alt="Background Image">
          <Container>
            <HomeContainer>
  
              <div>
                <h1>Aqui um título de duas linhas</h1>
                <Button darkTheme={false}>Aqui um CTA</Button>
              </div>
  
              <img alt="Lata de Guaraná" src={lataImg} />
  
            </HomeContainer>  
          </Container>
        </HomeSection>
        <Section bgColor={'white'}>
  
          <h3>Produtos</h3>
          <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper, tortor sed vehicula.</p>
  
          <CardBox>
            {
              products.map(product => {
                return <Card key={product.id} img={product.img} productName={product.productName} description={product.description}/>
              })
            }
          </CardBox>
  
        </Section>
        <Section bgColor={'white'}>
          <Container>
            <CommentsSection />
          </Container>
        </Section>
        <Section bgColor={'green'}>
  
            <h3 className="experiment-title">Quer experimentar?</h3>
        
            <Button darkTheme={true} />
            <FloatImages>
              <img alt="Lata de Guaraná" src={lataImg} />
              <img alt="Lata de Guaraná" src={lataImg} />
              <img alt="Lata de Guaraná" src={lataImg2} />
            </FloatImages>
        </Section>
        <Section bgColor={'black'}>
            <Container>
              <ContactContainer>
                <ContactBox>
                  <h2>Fale Conosco.</h2>
                  <div>
                    <a href="#"><GrFacebook /></a>
                    <a href="#"><GrInstagram /></a>
                    <span></span>
                    <p>redes sociais</p>
                  </div>
                </ContactBox>
                <ContactForm />
              </ContactContainer>
            </Container>
        </Section>  
        <Footer>
            <Container>
  
              <p>Todos os direitos reservados © 2020 Conecta</p>
  
              <div className="projected-by">
                <p>PROJETADO POR</p>
                <img alt="Logo da Conecta" src={logo}/>
              </div>
  
            </Container>
        </Footer>
      </>
    );

  }

  
}

export default App;
