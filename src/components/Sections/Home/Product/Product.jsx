import React from 'react'
import FullButton from '../../../Buttons/FullButton';
import ProjectBox from '../../../Elements/ProjectBox';
import styled from "styled-components";

function Product() {
    return (
        <Wrapper id="projects">
            <div className="whiteBg">
                <div className="container">
                    <HeaderInfo>
                        <h1 className="playfair-display-font1 pb-4 font40 extraBold">Some Of Our Best Product</h1>
                        <p className="font13">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                            <br />
                            labore et dolore magna aliquyam erat, sed diam voluptua.
                        </p>
                    </HeaderInfo>
                    <div className="row textCenter">
                        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                            <ProjectBox
                                img="adoni/cards/cards1.jpg"
                                title="Industrial Shock Absorber"
                                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                                action={() => alert("clicked")}
                            />
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                            <ProjectBox
                                img="adoni/cards/cards2.jpg"
                                title="Hydraulic Feed Rate Controller"
                                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                                action={() => alert("clicked")}
                            />
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                            <ProjectBox
                                img="adoni/cards/cards3.jpg"
                                title="Linear Motion Slider"
                                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                                action={() => alert("clicked")}
                            />
                        </div>
                    </div>

                    <div className="row flexCenter">
                        <div style={{ margin: "50px 0", width: "200px" }}>
                            <FullButton title="Load More" action={() => alert("clicked")} />
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper >
    )
}

export default Product


const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;

