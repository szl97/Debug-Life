import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
  gradient: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: '🐛 Catch Error',
    icon: '🔍',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    description: (
      <>
        捕获人生中的异常与错误，识别那些隐藏在日常中的系统性问题。
        就像调试代码一样，发现并修复生活中的 bug。
      </>
    ),
  },
  {
    title: '📝 Code Review',
    icon: '✨',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    description: (
      <>
        审视自己的人生代码，重构不合理的思维模式和行为习惯。
        持续优化，让生活运行得更加高效和优雅。
      </>
    ),
  },
  {
    title: '🚀 Refactor Life',
    icon: '💡',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    description: (
      <>
        像重构代码一样重构人生，清理技术债务，优化人生架构。
        用工程师的思维方式，系统性地改进生活质量。
      </>
    ),
  },
];

function Feature({title, icon, description, gradient}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div
          className={styles.featureIcon}
          style={{ background: gradient }}
        >
          <span className={styles.iconEmoji}>{icon}</span>
        </div>
        <div className={styles.featureContent}>
          <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresHeader}>
          <Heading as="h2" className={styles.featuresMainTitle}>
            用代码思维，调试人生
          </Heading>
          <p className={styles.featuresSubtitle}>
            Debug Life - 一本关于如何用工程师思维优化生活的实践指南
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
