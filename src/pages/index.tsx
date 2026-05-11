import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";
import React from "react";
import HomePageHero from "../components/HomePageHero";
import ProjectFeatures from "../components/ProjectFeatures";
import TechStack from "../components/TechStack";
import TeamSection from "../components/TeamSection";
import styles from "./index.module.css";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>TPM One</title>
        <meta name="description" content="Documentação oficial do TPM One – Gerenciamento de Máquinas e Ordens de Manutenção · Bosch ETS" />
      </Head>
      <HomePageHero />
      <main>
        <ProjectFeatures />
        <TechStack />
        <TeamSection />
      </main>
    </Layout>
  );
}