import React, { Component } from 'react';
import PostBlock from 'components/PostBlock';
import avatar from './images/ава.jpg';
import image from './images/1.jpg';
import image2 from './images/2.jpg';

const postArray = [
  {
    ava: avatar,
    img: image,
    nickname: 'Колористика и цветоведение',
    likes: 8,
    comments: [
      {
        name: 'Faith',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      },
    ],
  },
  {
    ava: avatar,
    img: image2,
    nickname: 'Колористика и цветоведение',
    likes: 3,
  },
];

class HomePage extends Component {
  render() {
    return (
      <div>
        {postArray.map(item => (
          <PostBlock
            avatar={item.ava}
            image={item.img}
            nickname={item.nickname}
            likes={item.likes}
            comments={item.comments}
          />
        ))}
      </div>
    );
  }
}

export default HomePage;
