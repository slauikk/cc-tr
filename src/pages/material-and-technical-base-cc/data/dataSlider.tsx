import {ReactNode} from "react"

import {SlideItem} from "../ui/slide-item"

export interface ISponsors {
  img: string
}

export const dataSponsorsSource_1: ISponsors[][] = [
  [
    {img: "/assets/material-and-technical-base-cc/1/1.jpg"},
    {img: "/assets/material-and-technical-base-cc/1/2.jpg"},
    {img: "/assets/material-and-technical-base-cc/1/3.jpg"},
    {img: "/assets/material-and-technical-base-cc/1/4.jpg"},
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
    {img: "/assets/material-and-technical-base-cc/2/1.jpg"},
    {img: "/assets/material-and-technical-base-cc/2/2.jpg"},
    {img: "/assets/material-and-technical-base-cc/2/3.jpg"},
    {img: "/assets/material-and-technical-base-cc/2/4.jpg"},
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
    {img: "/assets/material-and-technical-base-cc/219/1.jpg"},
    {img: "/assets/material-and-technical-base-cc/219/2.jpg"},
    {img: "/assets/material-and-technical-base-cc/219/3.jpg"},
    {img: "/assets/material-and-technical-base-cc/219/4.jpg"},
    {img: "/assets/material-and-technical-base-cc/219/5.jpg"},
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
