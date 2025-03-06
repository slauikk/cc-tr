import {Images} from "@/components/images"
import {Slider} from "@/components/Slider"

import {
  dataSponsors_1,
  dataSponsors_2,
  dataSponsors_3,
  dataSponsors_4,
  dataSponsors_5,
  dataSponsors_6,
  dataSponsors_7,
} from "../data/dataSlider"

export const dataContent = [
  {
    title: "Телекомунікаційно-інформаційних мереж та пристроїв. Компютерної електроніки. Електротехніки та електроніки.",
    content: (
      <>
        <Slider items={dataSponsors_1} type="row" />
      </>
    ),
  },
  {
    title: "Пристроїв НВЧ та антен. Електронних пристроїв та мікроелектроніки. Засобів охорони.",
    content: (
      <>
        <Slider items={dataSponsors_2} type="row" />
      </>
    ),
  },
  {
    title: "Мікропроцесорних систем та ІоТ.",
    content: (
      <>
        <Slider items={dataSponsors_3} type="row" />
      </>
    ),
  },
  {
    title: "\"Метрології, стандартизації, сертифікації і вимірювальної техніки. Джерела живлення. Акустичні пристрої.\"",
    content: (
      <>
        <Slider items={dataSponsors_4} type="row" />
      </>
    ),
  },
  {
    title: "Схемотехніки раідотехнічних пристроїв. Основ телебачення. Радіопрймальних пристроїв. Радіотехнічних систем.",
    content: (
      <>
        <Slider items={dataSponsors_5} type="row" />
      </>
    ),
  },
  {
    title: "Електротехніки та матеріалознавства.",
    content: (
      <>
        <Slider items={dataSponsors_6} type="row" />
      </>
    ),
  },
  {
    title: "Конструювання та технології виробництва РЕА Систем автоматизованого проектування",
    content: (
      <>
        <Slider items={dataSponsors_7} type="row" />
      </>
    ),
  },
]
