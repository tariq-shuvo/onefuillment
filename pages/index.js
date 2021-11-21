import Banner from '../components/home/Banner'
import HowItWorks from '../components/home/HowItWorks'
import Benefits from '../components/home/Benefits'
import Supply from '../components/home/Supply'
import Connect from '../components/home/Connect'
import Industries from '../components/home/Industries'
import Layout from '../components/Layout'
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
        <Banner />
        <HowItWorks />
        <Benefits />
        <Supply />
        <Connect />
        <Industries />
    </Layout>
  )
}
