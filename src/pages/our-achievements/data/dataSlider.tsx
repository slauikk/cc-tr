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


export const dataSponsorsSource_2: ISponsors[][] = [
  [
    {img: "/assets/achievements/1.png"},
    {img: "/assets/achievements/2.png"},
    {img: "/assets/achievements/3.png"},
    {img: "/assets/achievements/4.png"},
    {img: "/assets/achievements/5.png"},
    {img: "/assets/achievements/6.png"},
    {img: "/assets/achievements/7.png"},
  ],
]

export let dataSponsors_2: ReactNode[][] = [[]]

Array(dataSponsorsSource_2.length)
  .fill(null)
  .map(() => (dataSponsors_2 = [...dataSponsors_2, []]))

dataSponsorsSource_2.map((e, i) => {
  e.map((el) => {
    const elem = <SlideItem {...el} />
    dataSponsors_2[i] = [...dataSponsors_2[i], elem]
  })
})