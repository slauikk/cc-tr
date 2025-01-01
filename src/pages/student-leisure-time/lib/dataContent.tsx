import {Slider} from "@/components/Slider"

import {
  dataSponsors_1,
  dataSponsors_2,
  dataSponsors_3,
  dataSponsors_4,
} from "../data/dataSlider"

export const dataContent = [
  {
    content: (
      <>
        <p>
          Організація дозвілля студентів коледжу є одним із пріоритетних
          напрямів виховної роботи зі студентською молоддю. Студентам
          створюються умови до активної самореалізації у виховному і
          громадському житті коледжу, існує широкий спектр спортивних секцій та
          наукових гуртків.
        </p>
      </>
    ),
  },
  {
    content: (
      <>
        <p>
          Активну участь в організації студентського дозвілля беруть органи
          студентського самоврядування. Вони стають ініціаторами проведення
          різноманітних культурно-масових заходів, залучають студентство до
          волонтерської та благодійної діяльності, участі в соціальних проєктах
          і екологічних акціях, спортивних заходах.
        </p>
      </>
    ),
  },
  {
    content: (
      <>
        <Slider items={dataSponsors_1} type="row" />
      </>
    ),
  },
  {
    content: (
      <>
        <Slider items={dataSponsors_2} type="row" />
      </>
    ),
  },
  {
    content: (
      <>
        <Slider items={dataSponsors_3} type="row" />
      </>
    ),
  },
  {
    content: (
      <>
        <Slider items={dataSponsors_4} type="row" />
      </>
    ),
  },
]
