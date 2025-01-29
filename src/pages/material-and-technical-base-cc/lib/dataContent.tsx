import {Images} from "@/components/images"
import {Slider} from "@/components/Slider"

import {
  dataSponsors_1,
  dataSponsors_2,
  dataSponsors_3,
  dataSponsors_4,
  dataSponsors_5,
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
    title: "№ 219. Лабораторія Мікропроцесорних систем та ІоТ.",
    content: (
      <>
        <Slider items={dataSponsors_3} type="row" />
      </>
    ),
  },
  {
    title: "Кабінет \"Метрології, стандартизації, сертифікації і вимірювальної техніки. Джерела живлення. Акустичні пристрої.\"",
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
]
