import React, { useState } from 'react';
import styled from  'styled-components'
import Draggable , { DraggableData }from 'react-draggable';
import {colors, fontSize}  from '../styles'
import { Sticker_BL1, Sticker_BL2, Sticker_BL3, Sticker_BL4, Sticker_BL5, Sticker_BL6,
    Drawing_1, Drawing_2, Drawing_3, Drawing_4, Drawing_5, Drawing_6, Drawing_7, Drawing_8, Drawing_9, Drawing_10, Drawing_11, Drawing_12, Drawing_13, Drawing_14, Drawing_15, Drawing_16, Drawing_17, Drawing_18,
    Ill_1 , Ill_2 ,Ill_3 ,Ill_4 ,Ill_5 ,Ill_6 ,Ill_7 ,Ill_8 ,Ill_9 ,Ill_10,Ill_11,Ill_12,Ill_13,Ill_14,Ill_15,Ill_16,Ill_17,Ill_18,Ill_B1,Ill_B2,Ill_B3,
    BodyTp_1 ,BodyTp_2, BodyTp_3, BodyTp_4, BodyTp_5, BodyTp_6, BodyTp_7, BodyTp_8, BodyTp_9,
    HeadTp_1, HeadTp_2, HeadTp_3, HeadTp_4, HeadTp_5, HeadTp_6 } 
from './StickerImg'


const CategoryText = styled.p`
    font-size: 1.45vw;
    font-weight: 600;
    letter-spacing: -1%;
    color: #fff;
    background-color: ${colors.mainOrange};
    padding: 0.98vw 0 0.98vw 1.88vw;
`
const DefaultImg = styled.img`
    height: 8.07vw;
    border: 0.05vw solid #9e9e9e;
    padding: 0.26vw;
    object-fit: cover;
    cursor: pointer;
`

const BigImg = styled.img`
    height: 15.88vw;
    border: 0.05vw solid #9e9e9e;
    /* padding: 0.78vw; */
    cursor: pointer;
`

const DisplayGrid = styled.div`
    width: 51.56vw;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    img.grid_2fr{
        grid-column: span 2;
    }
`

const StickerBoxWrap = styled.div`
    display: flex;
    margin: 9.21vw 5.67vw 8.69vw 5.67vw;
`

const ObjWrap = styled.div`
    width: 51.56vw;
`

const RecWrap = styled.div`
    position: fixed;
    right: 5.67vw;
    section{
        background-color: ${colors.mainIvory};
        width: 33.125vw;
        height: 38.54vw;
        overflow: hidden;
    }
    div.btn_wrap{
        margin-top: 1.92vw;
        display: flex;
        gap: 1.45vw;
    }
`

const ResetBtn = styled.button`
    border-radius: 50px;
    background-color: ${colors.mainOrange};
    color: #fff;
    font-size: 1.66vw;
    padding: 0.98vw 5.625vw;
`
const CraftingBtn = styled.button`
    border-radius: 50px;
    border: 0.1vw solid ${colors.mainOrange};
    font-size: 1.66vw;
    padding: 0.98vw 4.47vw;
`

const DraggableImg = styled.img`
    position: absolute;
    cursor: move;
    user-select: none;
    resize: both;
    overflow: auto;
    transform: ${({ rotate }) => `rotate(${rotate}deg)`};
`;


const Sticker = () => {

    const [selectedImages, setSelectedImages] = useState([]);

    // 이미지 클릭 시 <RecWrap>의 <section>에 추가
    const handleImageClick = (src) => {
        setSelectedImages((prevImages) => [
            ...prevImages,
            { src, id: Date.now(), top: 'center', left: 'center', rotate: 0 },
        ]);
    };

    

    return (
        <StickerBoxWrap>
            <ObjWrap>
                <div>
                    <CategoryText> Brand Logo </CategoryText>
                    <DisplayGrid>
                        <DefaultImg onClick={() => handleImageClick(Sticker_BL1)} src= {Sticker_BL1} />
                        <DefaultImg onClick={() => handleImageClick(Sticker_BL2)} src= {Sticker_BL2} />
                        <DefaultImg onClick={() => handleImageClick(Sticker_BL3)} src= {Sticker_BL3} />
                        <DefaultImg onClick={() => handleImageClick(Sticker_BL4)} src= {Sticker_BL4} />
                        <DefaultImg onClick={() => handleImageClick(Sticker_BL5)} src= {Sticker_BL5} />
                        <DefaultImg onClick={() => handleImageClick(Sticker_BL6)} src= {Sticker_BL6} />
                    </DisplayGrid>
                </div>
                <div>
                    <CategoryText> Brand Illustrator </CategoryText>
                    <DisplayGrid>
                        <DefaultImg onClick={() => handleImageClick(Ill_1)} src={Ill_1} />
                        <DefaultImg onClick={() => handleImageClick(Ill_2)} src={Ill_2} />
                        <DefaultImg onClick={() => handleImageClick(Ill_3)} src={Ill_3} />
                        <DefaultImg onClick={() => handleImageClick(Ill_4)} src={Ill_4} />
                        <DefaultImg onClick={() => handleImageClick(Ill_5)} src={Ill_5} />
                        <DefaultImg onClick={() => handleImageClick(Ill_6)} src={Ill_6} />
                        <DefaultImg onClick={() => handleImageClick(Ill_7)} src={Ill_7} />
                        <DefaultImg onClick={() => handleImageClick(Ill_8)} src={Ill_8} />
                        <DefaultImg onClick={() => handleImageClick(Ill_9)} src={Ill_9} />
                        <DefaultImg onClick={() => handleImageClick(Ill_10)} src={Ill_10} />
                        <DefaultImg onClick={() => handleImageClick(Ill_11)} src={Ill_11} />
                        <DefaultImg onClick={() => handleImageClick(Ill_12)} src={Ill_12} />
                        <DefaultImg onClick={() => handleImageClick(Ill_13)} src={Ill_13} />
                        <DefaultImg onClick={() => handleImageClick(Ill_14)} src={Ill_14} />
                        <DefaultImg onClick={() => handleImageClick(Ill_15)} src={Ill_15} />
                        <DefaultImg onClick={() => handleImageClick(Ill_16)} src={Ill_16} />
                        <DefaultImg onClick={() => handleImageClick(Ill_17)} src={Ill_17} />
                        <DefaultImg onClick={() => handleImageClick(Ill_18)} src={Ill_18} />
                        <BigImg className="grid_2fr"  onClick={() => handleImageClick(Ill_B1)} src={Ill_B1} />
                        <BigImg className="grid_2fr"  onClick={() => handleImageClick(Ill_B2)} src={Ill_B2} />
                        <BigImg className="grid_2fr"  onClick={() => handleImageClick(Ill_B3)} src={Ill_B3} />
                    </DisplayGrid>
                </div>
                <div>
                    <CategoryText> Brand Head Typo </CategoryText>
                    <DisplayGrid>
                        <DefaultImg className="grid_2fr" onClick={() => handleImageClick(HeadTp_1)} src={HeadTp_1} />
                        <DefaultImg className="grid_2fr" onClick={() => handleImageClick(HeadTp_2)} src={HeadTp_2} />
                        <DefaultImg className="grid_2fr" onClick={() => handleImageClick(HeadTp_3)} src={HeadTp_3} />
                        <DefaultImg className="grid_2fr" onClick={() => handleImageClick(HeadTp_4)} src={HeadTp_4} />
                        <DefaultImg className="grid_2fr" onClick={() => handleImageClick(HeadTp_5)} src={HeadTp_5} />
                        <DefaultImg className="grid_2fr" onClick={() => handleImageClick(HeadTp_6)} src={HeadTp_6} />
                    </DisplayGrid>
                </div>
                <div>
                    <CategoryText> Brand Body Typo </CategoryText>
                    <DisplayGrid>
                        <DefaultImg className="grid_2fr" onClick={() => handleImageClick(BodyTp_1)} src={BodyTp_1} />
                        <DefaultImg className="grid_2fr" onClick={() => handleImageClick(BodyTp_2)} src={BodyTp_2} />
                        <DefaultImg className="grid_2fr" onClick={() => handleImageClick(BodyTp_3)} src={BodyTp_3} />
                        <DefaultImg className="grid_2fr" onClick={() => handleImageClick(BodyTp_4)} src={BodyTp_4} />
                        <DefaultImg className="grid_2fr" onClick={() => handleImageClick(BodyTp_5)} src={BodyTp_5} />
                        <DefaultImg className="grid_2fr" onClick={() => handleImageClick(BodyTp_6)} src={BodyTp_6} />
                        <DefaultImg className="grid_2fr" onClick={() => handleImageClick(BodyTp_7)} src={BodyTp_7} />
                        <DefaultImg className="grid_2fr" onClick={() => handleImageClick(BodyTp_8)} src={BodyTp_8} />
                        <DefaultImg className="grid_2fr" onClick={() => handleImageClick(BodyTp_9)} src={BodyTp_9} />
                    </DisplayGrid>
                </div>
                <div>
                    <CategoryText> Drawing Element </CategoryText>
                    <DisplayGrid>
                        <DefaultImg onClick={() => handleImageClick(Drawing_1)} src= {Drawing_1} />
                        <DefaultImg onClick={() => handleImageClick(Drawing_2)} src= {Drawing_2} />
                        <DefaultImg onClick={() => handleImageClick(Drawing_3)} src= {Drawing_3} />
                        <DefaultImg onClick={() => handleImageClick(Drawing_4)} src= {Drawing_4} />
                        <DefaultImg onClick={() => handleImageClick(Drawing_5)} src= {Drawing_5} />
                        <DefaultImg onClick={() => handleImageClick(Drawing_6)} src= {Drawing_6} />
                        <DefaultImg onClick={() => handleImageClick(Drawing_7)} src= {Drawing_7} />
                        <DefaultImg onClick={() => handleImageClick(Drawing_8)} src= {Drawing_8} />
                        <DefaultImg onClick={() => handleImageClick(Drawing_9)} src= {Drawing_9} />
                        <DefaultImg onClick={() => handleImageClick(Drawing_10)} src= {Drawing_10} />
                        <DefaultImg onClick={() => handleImageClick(Drawing_11)} src= {Drawing_11} />
                        <DefaultImg onClick={() => handleImageClick(Drawing_12)} src= {Drawing_12} />
                        <DefaultImg onClick={() => handleImageClick(Drawing_13)} src= {Drawing_13} />
                        <DefaultImg onClick={() => handleImageClick(Drawing_14)} src= {Drawing_14} />
                        <DefaultImg onClick={() => handleImageClick(Drawing_15)} src= {Drawing_15} />
                        <DefaultImg onClick={() => handleImageClick(Drawing_16)} src= {Drawing_16} />
                        <DefaultImg onClick={() => handleImageClick(Drawing_17)} src= {Drawing_17} />
                        <DefaultImg onClick={() => handleImageClick(Drawing_18)} src= {Drawing_18} />
                    </DisplayGrid>
                </div>
            </ObjWrap>
            <RecWrap>
                <section>
                        {selectedImages.map((img) => (
                            <DraggableImg
                            key={img.id}
                            src={img.src}
                            alt="Selected Sticker"
                            style={{
                                top: img.top,
                                left: img.left,
                                width: '100px',
                                height: '100px',
                            }}
                            rotate={img.rotate}
                            />
                        ))}
                </section>
                <div className="btn_wrap"> 
                    <ResetBtn> Reset </ResetBtn>
                    <CraftingBtn> Crafting </CraftingBtn>
                </div>
            </RecWrap>
        </StickerBoxWrap>
    );
};

export default Sticker;