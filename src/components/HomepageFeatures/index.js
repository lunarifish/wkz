import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "使用简单",
    Img: require("@site/static/img/easy_to_use.png").default,
    description: (
      <>
        采用直观的操作界面和模块化设计，无需专业培训即可快速上手
      </>
    ),
  },
  {
    title: "智能视觉",
    Img: require("@site/static/img/smart_vision.png").default,
    description: (
      <>
        配备先进的视觉识别系统，能够精准识别物体位置和形状，实现高效的抓取操作
      </>
    ),
  },
  {
    title: "功能强大",
    Img: require("@site/static/img/powerful_feat.png").default,
    description: (
      <>
        支持多种扩展功能，包括自动化生产、精密装配和智能检测，满足工业、科研等多领域需求
      </>
    ),
  },
];

function Feature({ Img, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img className={styles.featureImg} src={Img} />
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
