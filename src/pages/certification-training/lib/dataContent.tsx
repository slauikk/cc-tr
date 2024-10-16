import { ReactNode } from 'react';



import { Slider } from "@/components/Slider";


const certificatesData: ReactNode[][] = [
  [
    <img src="src/assets/qualification/1.jpg" style={{width: 'auto', height: '300px'}}/>,
    <img src="src/assets/qualification/2.jpg" style={{width: 'auto', height: '300px'}}/>,
    <img src="src/assets/qualification/3.png" style={{width: 'auto', height: '300px'}}/>,
    <img src="src/assets/qualification/4.png" style={{width: 'auto', height: '300px'}}/>,
    <img src="src/assets/qualification/5.png" style={{width: 'auto', height: '300px'}}/>,
  ],
  [
    <img src="src/assets/qualification/6.jpg" style={{width: 'auto', height: '300px'}}/>,
    <img src="src/assets/qualification/7.png" style={{width: 'auto', height: '300px'}}/>,
    <img src="src/assets/qualification/8.jpg" style={{width: 'auto', height: '300px'}}/>,
    <img src="src/assets/qualification/9.png" style={{width: 'auto', height: '300px'}}/>,
    <img src="src/assets/qualification/10.png" style={{width: 'auto', height: '300px'}}/>,
  ],
  [
    <img src="src/assets/qualification/11.png" style={{width: 'auto', height: '300px'}}/>,
    <img src="src/assets/qualification/12.png" style={{width: 'auto', height: '300px'}}/>,
    <img src="src/assets/qualification/13.png" style={{width: 'auto', height: '300px'}}/>,
    <img src="src/assets/qualification/14.jpg" style={{width: 'auto', height: '300px'}}/>,
    <img src="src/assets/qualification/15.png" style={{width: 'auto', height: '300px'}}/>,
  ],
  [
    <img src="src/assets/qualification/16.png" style={{width: 'auto', height: '300px'}}/>,
    <img src="src/assets/qualification/17.png" style={{width: 'auto', height: '300px'}}/>,
    <img src="src/assets/qualification/18.png" style={{width: 'auto', height: '300px'}}/>,
    <img src="src/assets/qualification/19.png" style={{width: 'auto', height: '300px'}}/>,
    <img src="src/assets/qualification/20.png" style={{width: 'auto', height: '300px'}}/>,
  ],
  [
    <img src="src/assets/qualification/21.png" style={{width: 'auto', height: '300px'}}/>,
    <img src="src/assets/qualification/22.jpg" style={{width: 'auto', height: '300px'}}/>,
    <img src="src/assets/qualification/23.png" style={{width: 'auto', height: '300px'}}/>,
  ],
]

export const dataContent = [
  {
    title: "Сертифікати:",
    content: (
      <>
        <Slider items={certificatesData} type="row" />
      </>
    ),
  },
  {
    title: "Для якісної реалізації цього напрямку викладачі комісії:",
    content: (
      <>
        <p>
          <ul>
            <li>
              Систематично вдосконалюють професійні, психолого-педагогічні
              знання, методичну майстерність, розвивають принципи педагогічної
              співпраці, надають методичну допомогу молодим викладачам
            </li>
            <li>
              Підвищують фаховий рівень шляхом ознайомлення з досягненнями у
              галузі сучасної радіоелектроніки та комп’ютерної техніки, з
              передовими технологіями у цих галузях
            </li>
            <li>
              Працюють над вдосконаленням професійно-педагогічної майстерності,
              розвитком навчально-методичної та матеріальної бази дисциплін
              радіотехнічного циклу
            </li>
            <li>
              Розвивають та поглиблюють співпрацю з виробничими підприємствами,
              приватними фірмами, навчальними закладами подібного професійного
              спрямування всієї України
            </li>
          </ul>
        </p>
      </>
    ),
  },
  {
    title:
      "Для якісної реалізації навчального процесу  викладачі  циклової комісії проходять : \n",
    content: (
      <>
        <h2>Онлайн-курси, вебінари :</h2>
        <ul>
          <li>
            Тернопільський комунальний методичний центр науково-освітніх
            інновацій та моніторингу
          </li>
          <li>
            ТОВ Академія цифрового розвитку «Цифрові інструменти Google для
            освіти»
          </li>
          <li>
            Спілка голів обласних рад директорів закладів фахової передвищої
            освіти України сертифікат учасника Всеукраїнського методичного
            обєднання викладачів Радіотехніки та телекомунікаційних технологій
            закладів фахової передвищої
          </li>
          <li>Платформа відкритих онлайн-курсів PROMETHEUS та EdEra</li>
          <li>
            Міністерство освіти і науки України науково-методичний центр вищої
            та фахової передвищої освіти
          </li>
        </ul>
        <h2>Стажування:</h2>
        <ul>
          <li>
            В вищих навчальних закладах в Тернопільському національному
            технічному університет імені Івана Пулюя , кафедра радіотехнічних
            систем а також в Тернопільському національного педагогічного
            університету імені Володимира Гнатюка.
          </li>
          <li>На підприємствах- ПП «Колумбус» та ТКБР «Стріла».</li>
        </ul>
      </>
    ),
  },
]
