import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Matchup from '../components/Matchup'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'material-icons/iconfont/material-icons.css';

let matchup = {
  home_team: "Minnesota",
  away_team: "Maryland",
  home_logo: "http://a.espncdn.com/i/teamlogos/ncaa/500/135.png",
  away_logo: "http://a.espncdn.com/i/teamlogos/ncaa/500/120.png",
  home_mascot: "Golden Gophers",
  away_mascot: "Terpins"
}
// {
//   home_team: "Minnesota-Duluth",
//   away_team: "Michigan State",
//   home_logo: "http://a.espncdn.com/i/teamlogos/ncaa/500/134.png",
//   away_logo: "http://a.espncdn.com/i/teamlogos/ncaa/500/127.png",
//   home_mascot: "Bulldogs",
//   away_mascot: "Spartans"
// }

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fierce Football Feast Hub</title>
        <meta name="description" content="A place for the fierce football feast team to collaborate around picking games" />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Matchup props={matchup}/>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
