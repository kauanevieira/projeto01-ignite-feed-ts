import { Header } from "./components/Header";
import { Post, PostProps } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css';

interface Post extends PostProps {
  id: number;
}

const posts: Post[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/kauanevieira.png",
      name: "Kauane Vieira",
      role: "Web Developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'kauane.design / webdeveloper' },
    ],
    publishedAt: new Date('2023-02-13 16:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/kauanevieira.png",
      name: "John Doe",
      role: "Web Developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'kauane.design / webdeveloper' },
    ],
    publishedAt: new Date('2023-02-15 16:00:00')
  },
];

export function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )

}

