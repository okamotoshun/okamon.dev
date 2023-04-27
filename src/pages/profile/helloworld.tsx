const Typewriter = dynamic(() => import('typewriter-effect'))
// import Typewriter from 'typewriter-effect'
import styles from '@/styles/profile/helloworld.module.css'
import { Stack } from '@mui/system'
import { asciiArt, helloWorld } from '../../const/asciiArt'
import { useState } from 'react'
import { BaseHead } from '@/components/BaseHead'
import dynamic from 'next/dynamic'

const colors = {
  pink: '#D082C4',
  yellow: '#FED701',
  lightYellow: '#DBDDA4',
  royalBlue: '#3C9DDC',
  blue: '#4FC2FF',
  lightBlue: '#8ADDFF',
  orange: '#D78E74',
  green: '#65964E',
}
const lines = [...Array(40)].map((_, i) => i + 1)
const numberLines = lines.map((line) => {
  return (
    <div key={line}>
      {line} <br />
    </div>
  )
})

export default function Helloworld() {
  const [typeFlag, setTypeFlag] = useState(false)
  return (
    <Stack direction="row" justifyContent="flex-start" alignItems="flex-start">
      <BaseHead title={'Hello World'} />
      <div className={styles.lines}>{numberLines}</div>
      <pre className={styles.code}>
        <p style={{ color: colors.green }}>{helloWorld}</p>
        {/* 遅延表示用 */}
        {typeFlag && (
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(40)
                .typeString(
                  `<span style="color: ${colors.pink};">import </span>` +
                    `<span style="color: ${colors.yellow}">{ </span>` +
                    `<span style="color: ${colors.lightBlue}">wifey</span>` +
                    `<span style="color: ${colors.yellow}"> }</span>` +
                    `<span style="color: ${colors.pink}"> from </span>` +
                    `<span style="color: ${colors.orange}">'@/House/wifey'</span><br/>`,
                )
                // カーソルなくす処理(後々なんとかしたい。。)
                .pasteString(
                  '                                                                                                                                                                                                                                                                           ',
                  null,
                )
                .start()
            }}></Typewriter>
        )}
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .changeDelay(40)
              .typeString(
                `<span style="color: ${colors.royalBlue};">const </span>` +
                  `<span style="color: ${colors.blue};">me </span>` +
                  `= ` +
                  `<span style="color: ${colors.royalBlue};">new </span>` +
                  `<span style="color: ${colors.lightYellow}">Man</span>` +
                  `<span style="color: ${colors.yellow}">()</span><br/><br/>`,
              )
              .pauseFor(300)
              .typeString(
                `<span style="color: ${colors.blue};">me</span>` +
                  `.` +
                  `<span style="color: ${colors.lightBlue};">name </span>` +
                  `= ` +
                  `<span style="color: ${colors.orange}">'Shun Okamoto'</span><br/>`,
              )
              .pauseFor(300)
              .typeString(
                `<span style="color: ${colors.blue};">me</span>` +
                  `.` +
                  `<span style="color: ${colors.lightBlue};">job </span>` +
                  `= ` +
                  `<span style="color: ${colors.orange}">'Frontend Developer'</span><br/><br/>`,
              )
              .pauseFor(300)
              .typeString(
                `<span style="color: ${colors.lightBlue};">console</span>` +
                  `.` +
                  `<span style="color: ${colors.lightYellow};">log</span>` +
                  `<span style="color: ${colors.yellow}">(</span>` +
                  `<span style="color: ${colors.blue};">me</span>` +
                  `.` +
                  `<span style="color: ${colors.lightYellow};">introduce</span>` +
                  `<span style="color: ${colors.pink}">()</span>` +
                  `<span style="color: ${colors.yellow}">)</span><br/><br/>`,
              )
              .callFunction(() => {
                console.log(`
                == 自己紹介 ===============================================================
                私の名前はオカモトシュンです。
                仕事ではWebのフロントエンド周りを担当しています👨‍💻(バックエンドは苦手。。。)
                わざわざconsole.logまで見てくれてありがとうございます！！！
                他のページもぜひ見て下さいね😊
                ===========================================================================
                `)
              })
              // while文 ------------------------------------------------------------
              .pauseFor(300)
              .typeString(
                `<span style="color: ${colors.pink};">while</span>` +
                  `<span style="color: ${colors.yellow};"> (</span>` +
                  `<span style="color: ${colors.blue};">me</span>` +
                  '.' +
                  `<span style="color: ${colors.lightYellow};">isAlive</span>` +
                  `<span style="color: ${colors.pink};">()</span>` +
                  `<span style="color: ${colors.yellow};">)</span>` +
                  `<span style="color: ${colors.yellow};"> {</span><br/>`,
              )
              .pauseFor(300)
              .typeString(
                `<span style="color: ${colors.blue};">  me</span>` +
                  '.' +
                  `<span style="color: ${colors.lightYellow};">eat</span>` +
                  `<span style="color: ${colors.pink};">(</span>` +
                  `<span style="color: ${colors.pink};">)</span><br/>`,
              )
              .pauseFor(300)
              .typeString(
                `<span style="color: ${colors.blue};">  me</span>` +
                  '.' +
                  `<span style="color: ${colors.lightYellow};">slee</span>`,
              )
              .pauseFor(500)
              .typeString(`<span style="color: ${colors.lightYellow};">z</span>`)
              .pauseFor(600)
              .typeString(`<span style="color: ${colors.lightYellow};">z</span>`)
              .pauseFor(700)
              .typeString(`<span style="color: ${colors.lightYellow};">z</span>`)
              .pauseFor(800)
              .typeString(`<span style="color: ${colors.lightYellow};">zZZZZZZZZZZZ</span>`)
              .pauseFor(1000)
              .changeDeleteSpeed(50)
              .deleteChars(15)
              .typeString(
                `<span style="color: ${colors.lightYellow};">p</span>` +
                  `<span style="color: ${colors.pink};">()</span><br/>`,
              )
              .pauseFor(300)
              .typeString(
                `<span style="color: ${colors.blue};">  me</span>` +
                  '.' +
                  `<span style="color: ${colors.lightYellow};">skillUp</span>` +
                  `<span style="color: ${colors.pink};">()</span><br/>`,
              )
              .pauseFor(300)
              .typeString(
                `<span style="color: ${colors.blue};">  me</span>` +
                  '.' +
                  `<span style="color: ${colors.lightYellow};">love</span>` +
                  `<span style="color: ${colors.pink};">(</span>`,
              )
              .pasteString(
                '                                                                                                                                                                                                                                                                            ',
                null,
              )
              .pauseFor(1000)
              .callFunction(() => {
                setTypeFlag(true)
              })
              .pauseFor(3000)
              .changeDeleteSpeed(1)
              .deleteChars(1)
              .typeString(
                `<span style="color: ${colors.lightBlue};">wifey</span>` +
                  `<span style="color: ${colors.pink};">)</span><br/>` +
                  `<span style="color:${colors.yellow} ;">}<br/><br/>`,
              )
              // while文ここまで ----------------------------------------------------
              .pauseFor(300)
              .typeString(
                `<span style="color: ${colors.lightBlue};">console</span>` +
                  `.` +
                  `<span style="color: ${colors.lightYellow};">log</span>` +
                  `<span style="color: ${colors.yellow}">(</span>` +
                  `<span style="color: ${colors.lightBlue};">me</span>` +
                  `.` +
                  `<span style="color: ${colors.lightYellow};">getProfile</span>` +
                  `<span style="color: ${colors.pink};">()</span>` +
                  `<span style="color: ${colors.yellow}">)</span>` +
                  `<span style="color: ${colors.green};"> // Please take a look at other pages !!!</span><br/>`,
              )
              .callFunction(() => {
                console.log(asciiArt)
              })
              .start()
          }}
        />
      </pre>
    </Stack>
  )
}
