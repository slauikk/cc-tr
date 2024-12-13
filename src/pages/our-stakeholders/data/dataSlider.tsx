import {ReactNode} from "react"

import {SlideItem} from "@/pages/student-leisure-time/ui/slide-item"

export interface ISponsors {
  img: string
}

export const dataSponsorsSource: ISponsors[][] = [
  [
    {img: "/assets/цифродім/1.png"},
    {img: "/assets/цифродім/2.png"},
    {img: "/assets/цифродім/3.png"},
    {img: "/assets/цифродім/4.png"},
  ],
]

export let dataSponsors: ReactNode[][] = [[]]

Array(dataSponsorsSource.length)
  .fill(null)
  .map(() => (dataSponsors = [...dataSponsors, []]))

dataSponsorsSource.map((e, i) => {
  e.map((el) => {
    const elem = <SlideItem {...el} />
    dataSponsors[i] = [...dataSponsors[i], elem]
  })
})

export const dataSponsorsSource_2: ISponsors[][] = [
  [
    {img: "/assets/роботодавці/1.jpg"},
    {img: "/assets/роботодавці/2.jpg"},
    {img: "/assets/роботодавці/3.jpg"},
    {img: "/assets/роботодавці/4.jpg"},
    {img: "/assets/роботодавці/5.jpg"},
    {img: "/assets/роботодавці/6.jpg"},
    {img: "/assets/роботодавці/7.jpg"},
    {img: "/assets/роботодавці/8.jpg"},
    {img: "/assets/роботодавці/9.jpg"},
    {img: "/assets/роботодавці/10.jpg"},
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
    {img: "/assets/orion/1.jpg"},
    {img: "/assets/orion/2.jpg"},
    {img: "/assets/orion/3.jpg"},
    {img: "/assets/orion/4.jpg"},
    {img: "/assets/orion/5.jpg"},
    {img: "/assets/orion/6.jpg"},
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
    {img: "/assets/цб/1.jpg"},
    {img: "/assets/цб/2.jpg"},
    {img: "/assets/цб/3.jpg"},
    {img: "/assets/цб/4.jpg"},
    {img: "/assets/цб/5.jpg"},
    {img: "/assets/цб/6.jpg"},
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
    {img: "/assets/колумбус/1.jpg"},
    {img: "/assets/колумбус/2.jpg"},
    {img: "/assets/колумбус/3.jpg"},
    {img: "/assets/колумбус/4.jpg"},
    {img: "/assets/колумбус/5.jpg"},
    {img: "/assets/колумбус/6.jpg"},
    {img: "/assets/колумбус/7.jpg"},
    {img: "/assets/колумбус/8.jpg"},
    {img: "/assets/колумбус/9.jpg"},
    {img: "/assets/колумбус/10.jpg"},
    {img: "/assets/колумбус/11.jpg"},
    {img: "/assets/колумбус/12.jpg"},
    {img: "/assets/колумбус/13.jpg"},
    {img: "/assets/колумбус/14.jpg"},
    {img: "/assets/колумбус/15.jpg"},
    {img: "/assets/колумбус/16.jpg"},
    {img: "/assets/колумбус/17.jpg"},
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
    {img: "/assets/6/1.jpg"},
    {img: "/assets/6/2.jpg"},
    {img: "/assets/6/3.jpg"},
    {img: "/assets/6/4.jpg"},
    {img: "/assets/6/5.jpg"},
    {img: "/assets/6/6.jpg"},
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