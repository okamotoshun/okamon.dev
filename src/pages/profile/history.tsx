import { useState } from 'react'
import Image from 'next/image'
import 'react-step-progress-bar/styles.css'
import { ProgressBar, Step } from 'react-step-progress-bar'
import styles from '../../styles/profile/history.module.css'
import { BaseHead } from '@/components/BaseHead'

const textList = [
  {
    year: '1996 -',
    text: ['ポケモンの一大ブームの中千葉県にて生まれる。'],
    percent: 0,
  },
  {
    year: '2003 - 2017 学生時代',
    text: [
      '小中高とサッカークラブに所属。クラスに1人はいるTheサッカー少年でした。',
      '今でも週一でフットサルをしているので絶賛蹴友募集中です！！！',
      'プレースタイルは現代サッカーでは活躍できなそうな昔の10番タイプ(笑)',
      '<br/>',
      '専門時代は、都内の調理学校で2年間イタリア料理を学ぶ。',
      'このタイミングで一人暮らしを始め金なし貧乏生活が始まる。',
    ],
    percent: 25,
  },
  {
    year: '2017 - 2021 コック時代',
    text: [
      '西麻布の某イタリア料理店に就職',
      '毎日怒られながらもなんだかんだ楽しく働く(人生の水も甘いも経験)',
      '<br/>',
      '家庭の事情で実家に戻る',
      '向かいの家のおじちゃんの紹介で育った町の給食センターに転職。',
      'なんだかんだで3年半働き、料理長としておばちゃん達と力を合わせ毎日3000食を提供。',
    ],
    percent: 50,
  },
  {
    year: '2021 - エンジニア時代',
    text: [
      'コロナの自粛期間に興味のあったプログラミング学習をスタート。',
      '予想以上に面白く、たくさん開発が出来そうな受託企業へ転職。',
      '<br/>',
      '仕事では主にフロント周りを担当(バックエンドはLambda書くぐらい、、、)',
      '自分が提案したアイデアが形になり、褒めてもらえた時一番やりがいを感じます。',
      '<br/>',
      '最近はAIに進化に怯え中、、、',
    ],
    percent: 75,
  },
  {
    year: 'XXXX - ???時代',
    text: ['いつ進化できるのかは不明。がんばれ未来の自分！！！'],
    percent: 100,
  },
]

const steps = [
  {
    percent: 0,
    image: {
      src: '/image/pokemon/たまご.png',
      alt: 'ポケモンのたまご',
      width: 75,
      height: 75,
    },
  },
  {
    percent: 25,
    image: {
      src: '/image/pokemon/ピチュー.png',
      alt: 'ピチュー',
      width: 70,
      height: 70,
    },
  },
  {
    percent: 50,
    image: {
      src: '/image/pokemon/ピカチュー.png',
      alt: 'ピカチュウ',
      width: 80,
      height: 80,
    },
  },
  {
    percent: 75,
    image: {
      src: '/image/pokemon/かみなりのいし.png',
      alt: 'かみなりのいし',
      width: 60,
      height: 60,
    },
  },
  {
    percent: 100,
    image: {
      src: '/image/pokemon/ライチュー.png',
      alt: 'ライチュウ',
      width: 80,
      height: 80,
    },
  },
]

export default function History() {
  const [percent, setPercent] = useState(0)
  return (
    <div className={styles.container}>
      <BaseHead title={'History'} />
      <div className={styles.progressContainer}>
        <ProgressBar percent={percent} filledBackground="linear-gradient(to right, #fefb72, #f0bb31)">
          {steps.map((step, index) => (
            <Step key={index} transition="scale">
              {() => (
                <div className={`${styles.contents} ${step.percent === 75 ? styles.pickel : ''}`}>
                  <Image
                    priority
                    onClick={() => setPercent(step.percent)}
                    className={`${styles.hoverImage}`}
                    style={{ filter: `grayscale(${step.percent <= percent ? 0 : 80}%)` }}
                    alt={step.image.alt}
                    width={step.image.width}
                    height={step.image.height}
                    src={step.image.src}
                  />
                </div>
              )}
            </Step>
          ))}
        </ProgressBar>
      </div>
      <div className={styles.textContainer}>
        {textList.map((item, index) => {
          const isActive = percent === item.percent
          return (
            <div key={index} style={{ display: isActive ? 'block' : 'none' }}>
              <p>{item.year}</p>
              <br />
              {item.text.map((text, index) => (
                <div key={index}>{text === '<br/>' ? <br /> : <p key={index}>{text}</p>}</div>
              ))}
            </div>
          )
        })}
      </div>
    </div>
  )
}
