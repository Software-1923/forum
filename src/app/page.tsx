import Post from 'src/components/Post/Post';
import { posts } from './data';
import { Timestamp } from 'firebase/firestore';

export default function Home() {
  return (
    <div className="m-5 flex justify-center">
      <main className="flex max-w-[800px] flex-col items-start gap-5">
        {posts.map((item, index) => {
          return (
            <Post
              key={index}
              topic={item.topic}
              topicPhotoURL={item.topicPhotoURL}
              userName={item.user}
              title={item.title}
              content={item.content}
              createdAt={Timestamp.now()}
              vote={0}
            />
          );
        })}
      </main>
    </div>
  );
}
