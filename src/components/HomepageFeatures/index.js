import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Welcome',
    Svg: require('@site/static/img/React-icon.svg').default,
    description: (
      <>
        Welcome to Mobile Programming course. This course is based on React Native library. Learning by doing is at the heart of this course.
      </>
    ),
   },
  {
    title: 'Schedule & Assignments',
    Svg: require('@site/static/img/assignments.svg').default,
    description: (
      <>
        This site contains the course material. The course schedule and assignments can be found from the course Moodle site.
      </>
    ),
 },
  {
    title: 'Course Project',
    Svg: require('@site/static/img/project.svg').default,
    description: (
      <>
        The final part of this course is the mobile programming project where you implement your own mobile app. 
        In this project, you will utilize all the skills that you will learn in this course.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
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

export default function HomepageFeatures() {
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
