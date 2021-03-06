import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { loadBlogData } from '../lib/post';
import PostSection from '../common/post-section';

export default function Home({ featured }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <div className={styles.meContainer}>
          <div className={styles.meColumn}>
            <div className={styles.title}>
              Jonah <br/>
              Schüller
            </div>
            <h4 className={styles.subtitle}>SOFTWARE DEVELOPER</h4>
            {/* <p className={styles.meText}>
              I love to explore the world of ☁️ cloud computing.
            </p> */}

            <GitHubButton/>
          </div>
          <div className="meColumn right">
            <img src="/me.png" className={styles.avatar}/>
          </div>

        </div>
        <About/>

        <Blog posts={featured.posts}/>

        
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}


const GitHubButton = () => {
  return (
    <a href="https://www.github.com/Bohne9" target="_blank">
    <div className={styles.githubContainer}>
      <span style={{color: "#FFF"}}>
        <FontAwesomeIcon width="25px" icon={faGithub} />
      </span>
      <span className={styles.githubText}>
        Follow me on GitHub
      </span>
    </div>
    </a>
  )
}

const Blog = ({ posts }) => {
  return (
    <div className={styles.contentContainer}>
      <Link href="/blog">
        <div className={styles.header}>
          &#x2192; Blog
        </div>
      </Link>
      <PostSection posts={posts} />
    </div>
  )
}

const About = () => {
  return (
    <div className={styles.contentContainer}>
        <div className={styles.header}>
          &#x2192; About
        </div>

        <p>
          Hey there! 👋 <br/> <br/>
          My name is Jonah Schüller. Currently, I am studying
          computer science at RWTH Aachen University. 🤓
          I am very interrested in computer science. Things I like the most are iOS mobile development, cloud computing, DevOps and web development but I also enjoy machine learning and data science. <br/> <br/>
          Besides computer science I love to play the electric guitar and make music. 🎸
        </p>
    </div>
  )
}

export const getStaticProps = async () => {
  let blogContent = loadBlogData()

  const featured = blogContent.find(item => item.category === 'Featured')

  return {
    props: {
      featured: featured
    }
  }
}