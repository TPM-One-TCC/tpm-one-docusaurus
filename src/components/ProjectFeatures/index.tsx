import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  // Ajustado para aceitar componentes SVG ou caminhos de imagem (string)
  Svg: React.ComponentType<React.ComponentProps<'svg'>> | string;
  description: ReactNode;
  highlight?: boolean;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Objetivo',
    Svg: require('@site/static/img/objective-icon.svg').default,
    description: (
      <>
        TPM One foi desenvolvido conjuntamente com a área de <strong>TPM (Manutenção Preventiva Total)</strong>,
        com o objetivo de criar uma solução concreta para gerenciamento de máquinas e ordens
        de manutenção dentro da planta de Campinas.
      </>
    ),
  },
  {
    title: 'Conexão com o SAP',
    // O PNG agora será tratado como string pelo componente Feature
    Svg: require('@site/static/img/sap-icon.png').default,
    description: (
      <>
        Nosso sistema utiliza uma conexão direta com o SAP através de queries SQL ORACLE, utilizado o DataLake Interno
        da <strong> Bosch </strong> para a conexão entre nosso sistema e os dados visualizados nas transações do SAP.
      </>
    ),
  },
  {
    title: 'Mapa 3D da planta',
    Svg: require('@site/static/img/map-3d-icon.svg').default,
    highlight: true,
    description: (
      <>
        Nossa visualização 3D dinâmica permite o rastreamento da hierarquia de produção da planta.
        Localize prédios instantaneamente e faça o drill-down até o nível da máquina para
        visualizar ordens de manutenção com total clareza visual.
      </>
    ),
  },
  {
    title: 'Decisão com IA',
    Svg: require('@site/static/img/ai-decision-icon.svg').default,
    description: (
      <>
        Através do modelo GPT 5.4, transformamos dados separados em inteligência estratégica,
        permitindo a priorização automatizada de ações críticas e uma tomada de decisão.
      </>
    ),
  },
];

function Feature({ title, Svg, description, highlight }: FeatureItem) {
  // Verifica se Svg é uma string (caminho de imagem) ou um componente
  const isImageString = typeof Svg === 'string';

  return (
    <div className={styles.featureItem}>
      <div className={styles.iconFrame}>
        {isImageString ? (
          <img
            src={Svg}
            className={clsx(styles.featureSvg, highlight && styles.mapSvg)}
            alt={title}
          />
        ) : (
          <Svg
            className={clsx(styles.featureSvg, highlight && styles.mapSvg)}
            role="img"
          />
        )}
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