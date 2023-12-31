import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easy to use",
    Svg: require("@site/static/img/easy.svg").default,
    description: (
      <>
        Just create your service, declare into a Registry and consume with the{" "}
        <a href="/docs/latest/quickstart#say-hello-with-useprovider">
          Reprovider Hook
        </a>
        .
      </>
    ),
  },
  {
    title: "Dependecy Injection",
    Svg: require("@site/static/img/dependency_injection.svg").default,
    description: (
      <>
        Reprovider use the <b>Dependency Injection</b> principle for insert the
        services into components without needed instantiate the classes.
      </>
    ),
  },
  {
    title: "Redux Integration",
    Svg: require("@site/static/img/buildux.svg").default,
    description: (
      <>
        You can use Redux and Inject services in thunks and reducers using
        <a href="docs/latest/buildux/overview"> Buildux </a>
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
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

export default function HomepageFeatures(): JSX.Element {
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
