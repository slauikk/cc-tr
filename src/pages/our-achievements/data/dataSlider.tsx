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


export const dataSponsorsSource_3: ISponsors[][] = [
  [
    {img: "/assets/achievements/21.jpg"},
    {img: "/assets/achievements/22.jpg"},
    {img: "/assets/achievements/23.jpg"},
    {img: "/assets/achievements/24.jpg"},
    {img: "/assets/achievements/25.jpg"},
    {img: "/assets/achievements/26.jpg"},
    {img: "/assets/achievements/27.jpg"},
    {img: "/assets/achievements/28.jpg"},
    {img: "/assets/achievements/29.jpg"},
  ],
]

export let dataSponsors_3: ReactNode[][] = [[]]

Array(dataSponsorsSource_3.length)
  .fill(null)
  .map(() => (dataSponsors_3 = [...dataSponsors_3, []]))

dataSponsorsSource_3.map((e, i) => {
  e.map((el) => {
    const elem = <SlideItem {...el} />
    dataSponsors_3[i] = [...dataSponsors_3[i], elem]
  })
})



export const dataSponsorsSource_4: ISponsors[][] = [
  [
    {img: "/assets/achievements/101.jpg"},
    {img: "/assets/achievements/102.jpg"},
    {img: "/assets/achievements/103.jpg"},
    {img: "/assets/achievements/104.jpg"},
    {img: "/assets/achievements/105.jpg"},
    {img: "/assets/achievements/106.jpg"},
    {img: "/assets/achievements/107.jpg"},
    {img: "/assets/achievements/108.jpg"},
    {img: "/assets/achievements/109.jpg"},
    {img: "/assets/achievements/110.jpg"},
    {img: "/assets/achievements/111.jpg"},
    {img: "/assets/achievements/112.jpg"},
    {img: "/assets/achievements/113.jpg"},
    {img: "/assets/achievements/114.jpg"},
    {img: "/assets/achievements/115.jpg"},
  ],
]

export let dataSponsors_4: ReactNode[][] = [[]]

Array(dataSponsorsSource_4.length)
  .fill(null)
  .map(() => (dataSponsors_4 = [...dataSponsors_4, []]))

dataSponsorsSource_4.map((e, i) => {
  e.map((el) => {
    const elem = <SlideItem {...el} />
    dataSponsors_4[i] = [...dataSponsors_4[i], elem]
  })
})


export const dataSponsorsSource_5: ISponsors[][] = [
  [
    {img: "/assets/achievements/301.jpg"},
    {img: "/assets/achievements/302.jpg"},
    {img: "/assets/achievements/303.png"},
    {img: "/assets/achievements/304.png"},
    {img: "/assets/achievements/305.jpg"},
    {img: "/assets/achievements/306.jpg"},
    {img: "/assets/achievements/307.png"},
    {img: "/assets/achievements/308.png"},
  ],
]

export let dataSponsors_5: ReactNode[][] = [[]]

Array(dataSponsorsSource_5.length)
  .fill(null)
  .map(() => (dataSponsors_5 = [...dataSponsors_5, []]))

dataSponsorsSource_5.map((e, i) => {
  e.map((el) => {
    const elem = <SlideItem {...el} />
    dataSponsors_5[i] = [...dataSponsors_5[i], elem]
  })
})