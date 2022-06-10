import React from 'react';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList =[
        {
            id: 1,
            name:'Nhạc Hoa Thịnh Hành',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w240_r16x9_jpeg/thumb_video/4/d/b/f/4dbf769079e956c3d104130af83ae2c5.jpg'
        },
        {
            id: 2,
            name:'Nhạc hay mỗi ngày',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w240_r16x9_jpeg/thumb_video/0/e/1/6/0e16e5af7a5209005fac0e145be09f88.jpg'
        },
        {
            id: 3,
            name:'Nhạc hot Tiktok',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/a/2/3/5/a235ec5802bb4c614095c38be91d6457.jpg'
        },
    ]
    return (
        <div>
            <h2>Can you like it</h2>
            <AlbumList albumList={albumList}/>
        </div>
    );
}

export default AlbumFeature;