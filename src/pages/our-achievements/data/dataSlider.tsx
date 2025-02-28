import {ReactNode} from "react"

import {SlideItem} from "../ui/slide-item"

export interface ISponsors {
  img: string
}

export const dataSponsorsSource_1: ISponsors[][] = [
  [
    {img: "/assets/achievements/10.jpg"},
    {img: "/assets/achievements/11.jpg"},
    {img: "/assets/achievements/12.jpg"},
    {img: "/assets/achievements/13.jpg"},
    {img: "/assets/achievements/14.png"},
  ],
]

export let dataSponsors_1: ReactNode[][] = [[]]

Array(dataSponsorsSource_1.length)
  .fill(null)
  .map(() => (dataSponsors_1 = [...dataSponsors_1, []]))

dataSponsorsSource_1.map((e, i) => {
  e.map((el) => {
    const elem = <SlideItem {...el} />
    dataSponsors_1[i] = [...dataSponsors_1[i], elem]
  })
})