import React, { Component } from 'react';
import PostBlock from 'components/PostBlock';
import ava from 'containers/AccountPage/images/3.jpg';
import image from './images/1.jpg';
import image2 from './images/2.jpg';

const postArray = [
  {
    ava,
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
    ava,
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
            ava={item.ava}
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
