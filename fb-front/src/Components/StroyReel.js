import React from 'react';
import Story from './Story';
import './StoryReel.css';

const img =
    'https://th.bing.com/th/id/OIP.QYPkl3ddD4zfX5sRna-QjAHaEK?w=300&h=180&c=7&o=5&dpr=1.25&pid=1.7';

const StroyReel = () => {
    return (
        <div className="storyReel">
            <Story
                image={img}
                profileSrc="https://wallpapercave.com/wp/pnKVlUw.jpg"
                title="Elia"
            />
            <Story
                image={img}
                profileSrc="https://avatars3.githubusercontent.com/u/30196405?s=460&u=6bd3c8280b827a0ea3f661fc7c0c65117b19bc61&v=4"
                title="Raymond"
            />
            <Story
                image={img}
                profileSrc="https://avatars3.githubusercontent.com/u/30196405?s=460&u=6bd3c8280b827a0ea3f661fc7c0c65117b19bc61&v=4"
                title="Joyce"
            />
        </div>
    )
}

export default StroyReel
