import { BaseHead } from '@/components/BaseHead'
import { useState } from 'react'
import { BsFillArrowDownRightCircleFill } from 'react-icons/bs/'
import { TagCloud } from 'react-tagcloud'
import styles from '../../styles/profile/mind.module.css'
const data = [
  // 性格
  { value: '犬派', count: 16 },
  { value: 'B型', count: 17 },
  { value: '楽天家', count: 18 },
  { value: '愛妻家', count: 18 },
  { value: 'マイペース', count: 16 },
  { value: '寝れば忘れる', count: 15 },
  { value: '量より質', count: 17 },
  { value: '食べるの大好き', count: 15 },
  { value: '秋', count: 15 },
  // 好きな食べ物
  { value: '焼き鳥', count: 16 },
  { value: '蟹味噌', count: 16 },
  { value: 'あん肝', count: 16 },
  { value: 'レバーパテ', count: 16 },
  { value: '白子ポン酢', count: 16 },
  { value: 'ペペロンチーノ', count: 16 },
  { value: 'ラム肉', count: 16 },
  { value: 'ハーゲンダッツ', count: 16 },
  // 趣味
  { value: 'サッカー', count: 17 },
  { value: 'フットサル', count: 17 },
  { value: 'チェキフィルム', count: 16 },
  { value: 'Netflix', count: 17 },
  { value: 'サウナ', count: 17 },
  { value: 'Pokémon', count: 18 },
  { value: 'ポケカ', count: 17 },
  // 好きなポケモン6匹
  { value: 'ゲンガー', count: 18 },
  { value: 'リザードン', count: 17 },
  { value: 'パチリス', count: 16 },
  { value: 'ゾロアーク', count: 15 },
  { value: 'ルカリオ', count: 16 },
  { value: 'メッソン', count: 16 },
  // 好きなサッカーチーム
  { value: 'バルセロナ', count: 17 },
  // 好きなアーティスト
  { value: 'BUMP OF CHICKEN', count: 16 },
  { value: 'King Gnu', count: 17 },
  { value: 'Mr.Children', count: 16 },
  // 好きな漫画
  { value: 'ONE PIECE', count: 16 },
  { value: 'キングダム', count: 15 },
  { value: 'SLAM DUNK', count: 16 },
  { value: 'HUNTER×HUNTER', count: 15 },
  // その他
  { value: '股抜き得意', count: 14 },
]
const customRenderer = (tag: any, size: any, color: any) => (
  <span
    key={tag.value}
    style={{
      animation: 'blinker 3s linear infinite',
      animationDelay: `${Math.random() * 2}s`,
      fontSize: `${Math.random() * size }em`,
      border: `2px solid ${color}`,
      margin: '3px',
      padding: '3px',
      display: 'inline-block',
      color: 'white',
    }}>
    {tag.value}
  </span>
)
export default function Blog() {
  const [shuffle, setShuffle] = useState(true)
  return (
    <div className={styles.container} onClick={() => setShuffle(!shuffle)}>
      <BaseHead title={'Mind'} />
      <div className={styles.prompt}>
        <div className={styles.display}>
          <p>please touch this screen</p>
          <BsFillArrowDownRightCircleFill className={styles.buttonPosition} />
        </div>
      </div>
      <TagCloud
        className={styles.cloud}
        minSize={1}
        maxSize={5}
        tags={data}
        renderer={customRenderer}
        shuffle={shuffle}
      />
    </div>
  )
}
