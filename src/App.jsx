import React, {useState, useEffect, useRef} from 'react';
// import './App.css';
import styled from 'styled-components';

import { photos } from './photos';


const Container = styled.div`
width: 100%;
display: flex;
box-sizing: border-box;
`

const DevideDiv = styled.div`
width: 20%;
padding-right: 10px;
height: 100vh;

&:nth-child(5) {
  padding-right: 0;
}

@media screen and (max-width: 1200px) {
  width: 25%;
}

@media screen and (max-width: 800px) {
  width: 50%;
}

@media screen and (max-width: 400px) {
  width: 100%;
}
`

const Images = styled.img`
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
`;




function App() {
  const wrapRef = useRef();

  const [size, setSize] = useState(0);
  const [wideCount, setWideCount] = useState(5);


  useEffect(()=> {
    setSize(window.innerWidth);
  }, [])

  useEffect(()=> {
    // if(wrapRef.current) {
    //   wrapRef.current.addEventListener('resize', updateSize);
    // }

    // function updateSize() {
    //   setSize(wrapRef.current.offsetWidth)
    // }

    // return () => wrapRef.current.removeEventListener('resize', updateSize);
    const width = window.innerWidth;
    if(width > 1200) {
      setWideCount(5)
    } else if ( width < 1200 && width > 800) {
      setWideCount(4)
    } else if ( width < 800 && width > 400) {
      setWideCount(2)
    } else if ( width < 400 && width > 0) {
      setWideCount(1)
    }

    window.addEventListener('resize', updateSize);

    function updateSize() {
      setSize(window.innerWidth)
    }
    return () => window.removeEventListener('resize', updateSize);
  }, [window.innerWidth])



  // return (
  //   <Container >
  //     {Array(wideCount).fill("").map((item, index)=> {
  //       return (
  //         <DevideDiv>
  //           {photos.filter((item, index)=> {
  //             return (index % wideCount) === 0
  //           })}
  //         </DevideDiv>
  //       )
  //     })} 
  //   </Container>
  // )

    if(size < 1200 && size > 800) {
      return (
        <Container >
            <DevideDiv>
              {photos.filter((item, index)=> {
                return (index % 4) === 0
              }).map((item, index)=> {
                return (
                  <Images  key={item + index} src={item.src} alt=""/>
                )
              })}
            </DevideDiv>
            <DevideDiv>
              {photos.filter((item, index)=> {
                  return (index % 4) === 1
                }).map((item, index)=> {
                  return (
                    <Images key={item + index} src={item.src} alt=""/>
                  )
                })}
            </DevideDiv>
            <DevideDiv >
            {photos.filter((item, index)=> {
                return (index % 4) === 2
              }).map((item, index)=> {
                return (
                  <Images  key={item + index} src={item.src} alt=""/>
                )
              })}
            </DevideDiv>
            <DevideDiv >
            {photos.filter((item, index)=> {
                return (index % 4) === 3
              }).map((item, index)=> {
                return (
                  <Images  key={item + index} src={item.src} alt=""/>
                )
              })}
            </DevideDiv>
        </Container>
      );
    } else if (size > 400 && size < 800) {
      return (
        <Container>
            <DevideDiv >
              {photos.filter((item, index)=> {
                return (index % 2) === 0
              }).map((item, index)=> {
                return (
                  <Images  key={item + index} src={item.src} alt=""/>
                )
              })}
            </DevideDiv>
            <DevideDiv >
              {photos.filter((item, index)=> {
                  return (index % 2) === 1
                }).map((item, index)=> {
                  return (
                    <Images key={item + index} src={item.src} alt=""/>
                  )
                })}
            </DevideDiv>
        </Container>
      )
    } else if (size > 0 && size < 400) {
      return (
        <Container >
            <DevideDiv>
              {photos.filter((item, index)=> {
                return (index % 1) === 0
              }).map((item, index)=> {
                return (
                  <Images  key={item + index} src={item.src} alt=""/>
                )
              })}
            </DevideDiv>
        </Container>
      )
    }
    
    else {
      return (
        <Container >
            <DevideDiv >
              {photos.filter((item, index)=> {
                return (index % 5) === 0
              }).map((item, index)=> {
                return (
                  <Images  key={item + index} src={item.src} alt=""/>
                )
              })}
            </DevideDiv>
            <DevideDiv >
              {photos.filter((item, index)=> {
                  return (index % 5) === 1
                }).map((item, index)=> {
                  return (
                    <Images key={item + index} src={item.src} alt=""/>
                  )
                })}
            </DevideDiv>
            <DevideDiv >
            {photos.filter((item, index)=> {
                return (index % 5) === 2
              }).map((item, index)=> {
                return (
                  <Images  key={item + index} src={item.src} alt=""/>
                )
              })}
            </DevideDiv>
            <DevideDiv >
            {photos.filter((item, index)=> {
                return (index % 5) === 3
              }).map((item, index)=> {
                return (
                  <Images  key={item + index} src={item.src} alt=""/>
                )
              })}
            </DevideDiv>
            <DevideDiv >
            {photos.filter((item, index)=> {
                return (index % 5) === 4
              }).map((item, index)=> {
                return (
                  <Images  key={item + index} src={item.src} alt=""/>
                )
              })}
            </DevideDiv>
        </Container>
      );
    }
   
  
}

export default App;
