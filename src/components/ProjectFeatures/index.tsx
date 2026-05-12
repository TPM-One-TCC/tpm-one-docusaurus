import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Objetivo",
    Svg: require("@site/static/img/target-dart.svg").default,
    description: (
      <>
        TPM One foi desenvolvido com a área de <strong>TPM (Manutenção)</strong>,
        com o objetivo de desenvolver algo único e concreto para gerenciamento de máquinas e ordens de manutenção dentro da planta de campinas.
      </>
    )
  }

];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('co-1 col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function ProjectFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
