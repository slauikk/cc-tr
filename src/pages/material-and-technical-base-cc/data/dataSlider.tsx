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

export const dataSponsorsSource_4: ISponsors[][] = [
  [
    {img: "/assets/material-and-technical-base-cc/4/1.jpg"},
    {img: "/assets/material-and-technical-base-cc/4/2.jpg"},
    {img: "/assets/material-and-technical-base-cc/4/3.jpg"},
    {img: "/assets/material-and-technical-base-cc/4/4.jpg"},
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
    {img: "/assets/material-and-technical-base-cc/5/1.jpg"},
    {img: "/assets/material-and-technical-base-cc/5/2.jpg"},
    {img: "/assets/material-and-technical-base-cc/5/3.jpg"},
    {img: "/assets/material-and-technical-base-cc/5/4.jpg"},
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

export const dataSponsorsSource_6: ISponsors[][] = [
  [
    {img: "/assets/material-and-technical-base-cc/6/1.png"},
    {img: "/assets/material-and-technical-base-cc/6/2.png"},
    {img: "/assets/material-and-technical-base-cc/6/3.png"},
    {img: "/assets/material-and-technical-base-cc/6/4.png"},
  ],
]

export let dataSponsors_6: ReactNode[][] = [[]]

Array(dataSponsorsSource_6.length)
  .fill(null)
  .map(() => (dataSponsors_6 = [...dataSponsors_6, []]))

dataSponsorsSource_6.map((e, i) => {
  e.map((el) => {
    const elem = <SlideItem {...el} />
    dataSponsors_6[i] = [...dataSponsors_6[i], elem]
  })
})

export const dataSponsorsSource_7: ISponsors[][] = [
  [
    {img: "/assets/material-and-technical-base-cc/7/1.jpg"},
    {img: "/assets/material-and-technical-base-cc/7/2.jpg"},
    {img: "/assets/material-and-technical-base-cc/7/3.jpg"},
    {img: "/assets/material-and-technical-base-cc/7/4.jpg"},
    {img: "/assets/material-and-technical-base-cc/7/5.jpg"},
  ],
]

export let dataSponsors_7: ReactNode[][] = [[]]

Array(dataSponsorsSource_7.length)
  .fill(null)
  .map(() => (dataSponsors_7 = [...dataSponsors_7, []]))

dataSponsorsSource_7.map((e, i) => {
  e.map((el) => {
    const elem = <SlideItem {...el} />
    dataSponsors_7[i] = [...dataSponsors_7[i], elem]
  })
})