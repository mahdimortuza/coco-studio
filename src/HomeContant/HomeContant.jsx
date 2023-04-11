import React from 'react';


import './HomeContent.css'
import Hero from '../components/Hero';
import Memories from '../components/Memories/Memories';
import Styles from '../components/Styles/Styles';
import Join from '../components/Join';
import Review from '../components/Review/Review';
import FollowUs from '../components/FollowUs';
import Recently from '../components/Recently/Recently';
import SliderFeature from '../components/SliderFeature/SliderFeature'
import AnimatedButton from '../components/AnimaterdButton/AnimatedButton';


const HomeContant = () => {
    return (
        <div className=''>
            <Hero></Hero>
            <Memories></Memories>
            <Styles></Styles>
            <SliderFeature></SliderFeature>
            <Join></Join>
            <Review></Review>
            <FollowUs></FollowUs>
            <Recently></Recently>
        </div>
    );
};

export default HomeContant;