const facebook = '../assets/images/icon-facebook.svg';
const twitter = '../assets/images/icon-twitter.svg';
const instagram = '../assets/images/icon-instagram.svg';
const youTube = '../assets/images/icon-youtube.svg';

const pos = '../assets/images/icon-up.svg'
const neg = '../assets/images/icon-down.svg'

const profiles = [
  {
    icon: facebook,
    className: 'facebook',
    username: '@nathanf',
    followers: '1987',
    type: 'followers',
    growth: [true, pos, '12']
  },
  {
    icon: twitter,
    className: 'twitter',
    username: '@nathanf',
    followers: '1044',
    type: 'followers',
    growth: [true, pos, '99']
  },
  {
    icon: instagram,
    className: 'instagram',
    username: '@realnathanf',
    followers: '11k',
    type: 'followers',
    growth: [true, pos, '1099']
  },
  {
    icon: youTube,
    className: 'youtube',
    username: 'Nathan F.',
    followers: '8239',
    type: 'subscribers',
    growth: [false, neg, 144]
  }
];

const overviews = [
  {
    icon: facebook,
    className: 'facebook',
    heading: 'Page Views',
    num: '87',
    growth: [true, pos, '3%']
  },
  {
    icon: facebook,
    className: 'facebook',
    heading: 'Likes',
    num: '52',
    growth: [true, pos, '2%']
  },
  {
    icon: instagram,
    className: 'instagram',
    heading: 'Likes',
    num: '5462',
    growth: [true, pos, '2257%']
  },
  {
    icon: instagram,
    className: 'instagram',
    heading: 'Profile Views',
    num: '52k',
    growth: [true, pos, '1375%']
  },
  {
    icon: twitter,
    className: 'twitter',
    heading: 'Retweets',
    num: '117',
    growth: [true, pos, '303%']
  },
  {
    icon: twitter,
    className: 'twitter',
    heading: 'Likes',
    num: '507',
    growth: [true, pos, '553%']
  },
  {
    icon: youTube,
    className: 'youtube',
    heading: 'Likes',
    num: '107',
    growth: [false, neg, '19%']
  },
  {
    icon: youTube,
    className: 'youtube',
    heading: 'Total Views',
    num: '1407',
    growth: [false, neg, '12%']
  }
];