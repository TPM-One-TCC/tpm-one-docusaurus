import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
  highlight?: boolean;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Objetivo',
    Svg: require('@site/static/img/objective-icon.svg').default,
    description: (
      <>
        TPM One foi desenvolvido com a área de <strong>TPM (Manutenção Preventiva Total)</strong>,
        com o objetivo de criar uma solução concreta para gerenciamento de máquinas e ordens
        de manutenção dentro da planta de Campinas.
      </>
    ),
  },
  {
    title: 'Conexão com o SAP',
    Svg: require('@site/static/img/database-icon.svg').default,
    description: (
      <>
        Integração com a base de dados do SAP por meio do RedLake, centralizando informações
        importantes para a rotina de manutenção.
      </>
    ),
  },
  {
    title: 'Mapa 3D da planta',
    Svg: require('@site/static/img/map-3d-icon.svg').default,
    highlight: true,
    description: (
      <>
        Visualização do mapa 3D para localizar máquinas, acompanhar áreas da planta e facilitar
        a leitura operacional do ambiente.
      </>
    ),
  },
  {
    title: 'Decisão com IA',
    Svg: require('@site/static/img/ai-decision-icon.svg').default,
    description: (
      <>
        Criação de informações inteligentes para apoiar análises, identificar prioridades e
        melhorar a tomada de decisão.
      </>
    ),
  },
];

function Feature({ title, Svg, description, highlight }: FeatureItem) {
  return (
    <div>
      <div className={styles.iconFrame}>
        <Svg className={clsx(styles.featureSvg, highlight && styles.mapSvg)} role="img" />
        {highlight && <span className={styles.mapBadge}>3D</span>}
      </div>

      <div className={styles.featureContent}>
        <Heading as="h3">
          {title}
        </Heading>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

export default function ProjectFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featureGrid}>
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
