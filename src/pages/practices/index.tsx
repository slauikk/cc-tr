import clsx from "clsx"
import {FC} from "react"

import {Loading} from "@/components/loading"

import {PageItem} from "../../components/page-item"
import {PageLayout} from "../../layouts"

import styles from "./index.module.scss"
import {dataContent} from "./lib/dataContent"
import {getFromGoogleSheets} from "@/utils/geFromGoogleSheets"

interface IPractices {}

export const Practices: FC<IPractices> = () => {
  const googleSheet = getFromGoogleSheets("Практики")

  return (
    <PageLayout title="Практики">
      {dataContent.map((e, i) => (
        <PageItem {...e} key={i} />
      ))}
    </PageLayout>
  )
}
