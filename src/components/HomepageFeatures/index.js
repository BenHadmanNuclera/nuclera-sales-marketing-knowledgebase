import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Accessible Information",
    Svg: require("@site/static/img/urban-online-meeting.svg").default,
    description: (
      <>
        Knowledge management ensures that collective knowledge and information
        is captured and shared throughout an organization.
      </>
    )
  },
  {
    title: "Scalable",
    Svg: require("@site/static/img/urban-931.svg").default,
    description: (
      <>
        Knowledge management in the form of internal documentation ensures
        processes are replicable and protects against single points of failure.
      </>
    )
  },
  {
    title: "Faster Onboarding",
    Svg: require("@site/static/img/urban-tech-support.svg").default,
    description: (
      <>
        With great documentation new users/staff can get up-and-running faster
        than if they relied on pure instructor-led training
      </>
    )
  }
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
